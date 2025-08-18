import React, { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import * as faceapi from "face-api.js";

interface FaceTrackingProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  isActive: boolean;
  onFaceAlert?: (show: boolean) => void;
  onEyeMovementAlert?: (show: boolean) => void;
  onAudioAlert?: (show: boolean) => void;
}

export const FaceTracking: React.FC<FaceTrackingProps> = ({
  videoRef,
  isActive,
  onFaceAlert,
  onEyeMovementAlert,
  onAudioAlert,
}) => {
  // Face detection and audio monitoring state
  const [showFaceAlert, setShowFaceAlert] = useState(false);
  const [showEyeMovementAlert, setShowEyeMovementAlert] = useState(false);
  const [showAudioAlert, setShowAudioAlert] = useState(false);
  const [isFaceDetectionActive, setIsFaceDetectionActive] = useState(false);
  const audioAlertTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Add refs for alert clear counters
  const faceAlertClearCount = useRef(0);
  const eyeAlertClearCount = useRef(0);
  const audioAlertClearCount = useRef(0);

  // Add ref to track processing state
  const isProcessingRef = useRef(false);

  // Face detection and audio monitoring refs
  const lastEyeCenters = useRef<{ left: { x: number; y: number }; right: { x: number; y: number } } | null>(null);
  const movementAlertCount = useRef(0);
  const voiceAlertCounter = useRef(0);
  const faceDetectionIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const audioMonitoringIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const faceDetectionAudioContextRef = useRef<AudioContext | null>(null);
  const faceDetectionAnalyserRef = useRef<AnalyserNode | null>(null);
  const faceDetectionAudioStreamRef = useRef<MediaStream | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);
  const isFaceDetectionActiveRef = useRef(false);

  // Load face detection models
  const loadFaceDetectionModels = async () => {
    try {
      const MODEL_URL = "/models";
      await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
      await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
      console.log("Face detection models loaded successfully");
    } catch (error) {
      console.error("Error loading face detection models:", error);
      toast.error("Failed to load face detection models");
    }
  };

  const getEyeCenter = (eye: any[]) => {
    const x = eye.reduce((sum, p) => sum + p.x, 0) / eye.length;
    const y = eye.reduce((sum, p) => sum + p.y, 0) / eye.length;
    return { x, y };
  };

  const detectFaces = async () => {
    if (!videoRef.current || !isFaceDetectionActiveRef.current) {
      console.log("Face detection skipped - videoRef:", !!videoRef.current, "isFaceDetectionActive:", isFaceDetectionActiveRef.current);
      return;
    }

    // Check if video is actually playing
    if (videoRef.current.paused || videoRef.current.ended || videoRef.current.readyState < 2) {
      console.log("Video not ready for face detection - paused:", videoRef.current.paused, "ended:", videoRef.current.ended, "readyState:", videoRef.current.readyState);
      return;
    }

    try {
      console.log("Running face detection...");
      const results = await faceapi
        .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks();

      console.log("Face detection results:", results.length, "faces detected");

      if (results.length > 1) {
        console.log("Multiple faces detected!");
        setShowFaceAlert(true);
        onFaceAlert?.(true);
        faceAlertClearCount.current = 0;
      } else if (results.length === 1) {
        faceAlertClearCount.current++;
        if (faceAlertClearCount.current >= 3) {
          setShowFaceAlert(false);
          onFaceAlert?.(false);
        }
        const { landmarks } = results[0];

        const leftEye = landmarks.getLeftEye();
        const rightEye = landmarks.getRightEye();

        const currentEyes = {
          left: getEyeCenter(leftEye),
          right: getEyeCenter(rightEye),
        };

        if (lastEyeCenters.current) {
          const dxL = Math.abs(currentEyes.left.x - lastEyeCenters.current.left.x);
          const dyL = Math.abs(currentEyes.left.y - lastEyeCenters.current.left.y);
          const dxR = Math.abs(currentEyes.right.x - lastEyeCenters.current.right.x);
          const dyR = Math.abs(currentEyes.right.y - lastEyeCenters.current.right.y);

          const movement = dxL + dyL + dxR + dyR;

          if (movement > 20) {
            movementAlertCount.current++;
          } else {
            movementAlertCount.current = 0;
          }

          if (movementAlertCount.current >= 10) {
            setShowEyeMovementAlert(true);
            onEyeMovementAlert?.(true);
            eyeAlertClearCount.current = 0;
            movementAlertCount.current = 0;
          } else {
            eyeAlertClearCount.current++;
            if (eyeAlertClearCount.current >= 3) {
              setShowEyeMovementAlert(false);
              onEyeMovementAlert?.(false);
            }
          }
        }

        lastEyeCenters.current = currentEyes;
      } else {
        faceAlertClearCount.current++;
        if (faceAlertClearCount.current >= 3) {
          setShowFaceAlert(false);
          onFaceAlert?.(false);
        }
        eyeAlertClearCount.current++;
        if (eyeAlertClearCount.current >= 3) {
          setShowEyeMovementAlert(false);
          onEyeMovementAlert?.(false);
        }
      }
    } catch (error) {
      console.error("Face detection error:", error);
    }
  };

  const startAudioDetection = async () => {
    try {
      console.log("Starting audio detection...");
      faceDetectionAudioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      faceDetectionAudioStreamRef.current = await navigator.mediaDevices.getUserMedia({ audio: true });
      const source = faceDetectionAudioContextRef.current.createMediaStreamSource(faceDetectionAudioStreamRef.current);
      faceDetectionAnalyserRef.current = faceDetectionAudioContextRef.current.createAnalyser();
      source.connect(faceDetectionAnalyserRef.current);
      faceDetectionAnalyserRef.current.fftSize = 256;

      const bufferLength = faceDetectionAnalyserRef.current.frequencyBinCount;
      dataArrayRef.current = new Uint8Array(bufferLength);

      console.log("Audio detection started successfully");
      monitorAudio();
    } catch (error) {
      console.error("Audio access error:", error);
      toast.error("Failed to access microphone for audio monitoring");
    }
  };

  const monitorAudio = () => {
    if (!faceDetectionAnalyserRef.current || !dataArrayRef.current || !isFaceDetectionActiveRef.current) {
      console.log("Audio monitoring skipped - analyser:", !!faceDetectionAnalyserRef.current, "dataArray:", !!dataArrayRef.current, "isFaceDetectionActive:", isFaceDetectionActiveRef.current);
      return;
    }

    faceDetectionAnalyserRef.current.getByteFrequencyData(dataArrayRef.current);

    const average = dataArrayRef.current.filter(v => v > 100).length;
    console.log("Audio average:", average, "showAudioAlert:", showAudioAlert);

    if (average > 30) {
      voiceAlertCounter.current++;
      audioAlertClearCount.current = 0; // Reset clear counter on bad frame
      console.log("High audio detected, voice counter:", voiceAlertCounter.current);
      if (voiceAlertCounter.current >= 20) {
        console.log("Setting audio alert to true");
        setShowAudioAlert(true);
        onAudioAlert?.(true);
        // Clear any existing timeout
        if (audioAlertTimeoutRef.current) {
          clearTimeout(audioAlertTimeoutRef.current);
        }
        // Set timeout to clear alert after 3 seconds
        audioAlertTimeoutRef.current = setTimeout(() => {
          setShowAudioAlert(false);
          onAudioAlert?.(false);
        }, 3000);
        voiceAlertCounter.current = 0;
      }
    } else {
      voiceAlertCounter.current = 0;
      // Do not clear the alert immediately; let the timeout handle it
    }

    requestAnimationFrame(monitorAudio);
  };

  const startFaceDetection = () => {
    console.log("Starting face detection...");
    if (faceDetectionIntervalRef.current) {
      clearInterval(faceDetectionIntervalRef.current);
    }
    
    // Set both state and ref
    setIsFaceDetectionActive(true);
    isFaceDetectionActiveRef.current = true;
    console.log("isFaceDetectionActive set to true");
    
    faceDetectionIntervalRef.current = setInterval(() => {
      console.log("Face detection interval triggered, isFaceDetectionActive:", isFaceDetectionActiveRef.current);
      detectFaces();
    }, 700);
    console.log("Face detection interval set");
  };

  const stopFaceDetection = () => {
    setIsFaceDetectionActive(false);
    isFaceDetectionActiveRef.current = false;
    if (faceDetectionIntervalRef.current) {
      clearInterval(faceDetectionIntervalRef.current);
      faceDetectionIntervalRef.current = null;
    }
    setShowFaceAlert(false);
    setShowEyeMovementAlert(false);
    setShowAudioAlert(false);
    onFaceAlert?.(false);
    onEyeMovementAlert?.(false);
    onAudioAlert?.(false);
  };

  const cleanupFaceDetection = () => {
    stopFaceDetection();
    if (faceDetectionAudioStreamRef.current) {
      faceDetectionAudioStreamRef.current.getTracks().forEach(track => track.stop());
    }
    if (faceDetectionAudioContextRef.current) {
      faceDetectionAudioContextRef.current.close();
    }
    if (audioAlertTimeoutRef.current) {
      clearTimeout(audioAlertTimeoutRef.current);
    }
  };

  // Cleanup audio alert timeout on unmount
  useEffect(() => {
    return () => {
      if (audioAlertTimeoutRef.current) {
        clearTimeout(audioAlertTimeoutRef.current);
      }
    };
  }, []);

  // Load models and start detection when component becomes active
  useEffect(() => {
    if (isActive) {
      const initializeFaceTracking = async () => {
        await loadFaceDetectionModels();
        await startAudioDetection();
        startFaceDetection();
      };
      initializeFaceTracking();
    } else {
      cleanupFaceDetection();
    }

    return () => {
      cleanupFaceDetection();
    };
  }, [isActive]);

  // Return null as this is a utility component that doesn't render anything
  return null;
};

export default FaceTracking; 