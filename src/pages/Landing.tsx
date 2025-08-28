import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import LandingLayout from "@/components/layout/RegularLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
// Icon components
import { ArrowRight, CheckCircle2, Users, Brain, BarChart3, Calendar, Search, Clock } from 'lucide-react';

// Small typewriter component that reveals text like a terminal insert-mode typing
const Typewriter: React.FC<{ text: string; speed?: number; pauseBefore?: number; pauseAfter?: number; loop?: boolean; initialDelay?: number }> = ({ text, speed = 80, pauseBefore = 800, pauseAfter = 30000, loop = true, initialDelay = 5000 }) => {
  const [displayed, setDisplayed] = useState("");
  const timers = React.useRef<number[]>([]);

  useEffect(() => {
    timers.current.forEach((t) => clearTimeout(t));
    timers.current = [];
    let cancelled = false;
    const startTyping = () => {
      if (cancelled) return;
      setDisplayed("");
      const chars = Array.from(text);
      let i = 0;
      const tick = () => {
        if (cancelled) return;
        setDisplayed((prev) => prev + (chars[i] ?? ""));
        i += 1;
        if (i < chars.length) {
          timers.current.push(window.setTimeout(tick, speed));
        } else if (loop) {
          timers.current.push(window.setTimeout(() => {
            if (cancelled) return;
            setDisplayed("");
            timers.current.push(window.setTimeout(startTyping, pauseBefore));
          }, pauseAfter));
        }
      };
      timers.current.push(window.setTimeout(tick, speed));
    };
    const scheduleInitial = () => {
      timers.current.push(window.setTimeout(startTyping, initialDelay));
    };
    const onLoad = () => scheduleInitial();
    if (document.readyState === 'complete') scheduleInitial(); else window.addEventListener('load', onLoad);
    return () => {
      cancelled = true;
      window.removeEventListener('load', onLoad);
      timers.current.forEach((t) => clearTimeout(t));
      timers.current = [];
    };
  }, [text, speed, pauseBefore, pauseAfter, loop, initialDelay]);

  return (
    <span style={{ whiteSpace: 'normal', color: 'inherit' }}>
      <span>{displayed}</span>
      <span style={{ display: 'inline-block', marginLeft: 6, animation: 'ed-caret 1s steps(1) infinite' }}>|</span>
      <style>{`@keyframes ed-caret {50% { opacity: 0; } }`}</style>
    </span>
  );
};

// New 3D Aero Flip Testimonials (Windows 7 style Flip 3D inspiration)
const Testimonials3D: React.FC = () => {
  // Data
  const testimonials = [
  { img: '/Testimonials/Jaya Kumawat.jpeg', name: 'Jaya Kumawat', country: 'India', quote: 'The AI mock interviews were a game-changer for me! I used to get so nervous during real interviews, but practicing with EduDiagno AI platform felt incredibly realistic. It pinpointed exactly where I was fumbling and gave me the confidence to ace my interview with TechSolutions. I couldn\'t have done it without them!'},
  { img: '/Testimonials/Luisine Hunanyan.jpeg', name: 'Luisine Hunanyan', country: 'Armenia', quote: 'What I loved most was the instant, detailed feedback after each mock interview. The AI analyzed everything from my answers to my body language. This personalized feedback helped me improve with every session. I walked into my final interview feeling prepared and self-assured. Thank you, EduDiagno AI!' },
  { img: '/Testimonials/Precious Bassey.jpeg', name: 'Precious Bassey', country: 'Nigeria', quote: 'Honestly, I was skeptical about an AI interview platform at first, but it completely exceeded my expectations. It simulated the pressure of a real technical interview perfectly. By the time I interviewed with CodeCrafters, I had already practiced the toughest questions and knew how to structure my answers clearly and concisely.' },
  { img: '/Testimonials/Shafali Awasthi.jpeg', name: 'Shafali Awasthi', country: 'India', quote: 'The journey from a nervous graduate to a confident intern at a top fintech company was made possible by EduDiagno AI. Their blend of AI-driven practice sessions and proactive placement support is the perfect formula for success. They helped me find a role that perfectly matched my skills and ambitions.' },
  { img: '/Testimonials/Shreeya Maliye.jpeg', name: 'Shreeya Maliye', country: 'India', quote: 'As someone in a competitive field like Machine Learning, preparation is key. EduDiagno AI provided an extensive question bank and industry-specific interview scenarios that were incredibly relevant. The platform prepared me for the technical depth required and helped me land my dream internship at NextGen Analytics.' },
  { img: '/Testimonials/Shubham Chaudhary.jpeg', name: 'Shubham Chaudhary', country: 'India', quote: 'EduDiagno AI is more than just an interview prep tool; it’s a complete career launchpad. The AI interviews helped me refine my storytelling and product sense, while the placement team worked tirelessly to find the right fit for me. I’m so grateful for their guidance and support!' },
  { img: '/Testimonials/Rutuja Kale.jpeg', name: 'Rutuja Kale', country: 'India', quote: 'I struggled with articulating my thoughts under pressure. The repetitive practice with the AI interviewer on EduDiagno AI was crucial. It taught me to stay calm, listen carefully to the questions, and provide thoughtful responses. This skill was invaluable in securing my internship at HealthTech Innovations.' },
  { img: '/Testimonials/Abderahim Benaissa.png', name: 'Abderahim Benaissa', country: 'Morocco', quote: 'EduDiagno AI\'s placement assistance is top-notch. They didn\'t just forward my resume; they helped me tailor it to the roles I was applying for. The team was super supportive and connected me with great opportunities, ultimately leading to my internship at Innovate Corp. It felt like I had a dedicated career coach in my corner.' },
  ];

  // State
  // Simple active index (center card) for clarity
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = testimonials.length;

  // Layout config
  const MAX_SIDE = 2;          // show 2 on each side => 5 total
  const X_STEP = 150;          // horizontal spread
  const Z_STEP = 100;          // depth difference
  const ANGLE = 15;            // tilt magnitude per side

  // Responsive breakpoint state (client-side only)
  const [isSmall, setIsSmall] = useState(false);
  const [vw, setVw] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 1024);
  useEffect(() => {
    const check = () => {
      const w = window.innerWidth;
      setVw(w);
      setIsSmall(w < 640);
    };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => setActive(a => (a + 1) % n), 6000);
    return () => clearInterval(id);
  }, [paused, n]);

  // Pointer (drag / swipe)
  const dragStart = useRef<number | null>(null);
  const dragLast = useRef<number | null>(null);
  const dragging = useRef(false);
  const SWIPE_PX = 45;
  const pointerDown = (x: number) => { dragging.current = true; dragStart.current = x; dragLast.current = x; setPaused(true); };
  const pointerMove = (x: number) => { if (!dragging.current) return; dragLast.current = x; };
  const pointerUp = () => {
    if (!dragging.current || dragStart.current == null || dragLast.current == null) { dragging.current = false; setPaused(false); return; }
    const delta = dragLast.current - dragStart.current;
    if (Math.abs(delta) > SWIPE_PX) {
      // Swipe left -> go forward (next), swipe right -> previous (classic carousel expectation)
      setActive(a => (a + (delta < 0 ? 1 : -1) + n) % n);
    }
    dragging.current = false; dragStart.current = null; dragLast.current = null; setPaused(false);
  };

  // Keyboard
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') setActive(a => (a + 1) % n);
    else if (e.key === 'ArrowLeft') setActive(a => (a - 1 + n) % n);
    else if (e.key === 'Home') setActive(0);
    else if (e.key === 'End') setActive(n - 1);
  };

  // Compute minimal signed distance helper
  const calcDist = (i: number) => {
    let d = i - active; // raw difference
    if (d > n / 2) d -= n;
    if (d < -n / 2) d += n;
    return d; // range roughly [-n/2, n/2]
  };

  return (
  <section className="pt-10 pb-20 " aria-labelledby="testimonials-3d-heading">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-5xl mx-auto mb-1 relative z-10">
          <h2 id="testimonials-3d-heading" className="text-6xl md:text-8xl font-extrabold mb-2 bg-gradient-to-r from-[#237be7] to-[#da4ada] bg-clip-text text-transparent leading-[1.05]">
            <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}>What Our Students & Recruiters Say</span>
          </h2>
          <p className="text-xl md:text-2xl text-black">Real stories from students and recruiters using EduDiagno.</p>
        </div>

  <div className="relative -mt-24 md:-mt-40 z-20" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          {/* Stage */}
          <div className="relative mx-auto w-full max-w-6xl h-[480px] sm:h-[500px] md:h-[560px] overflow-visible" style={{ perspective: '1600px' }}>
            <div
              className="absolute inset-0"
              role="list"
              aria-roledescription="carousel"
              aria-label="Testimonials Aero Flip stack"
              tabIndex={0}
              onKeyDown={onKeyDown}
              onMouseDown={(e) => pointerDown(e.clientX)}
              onMouseMove={(e) => pointerMove(e.clientX)}
              onMouseUp={pointerUp}
              onMouseLeave={pointerUp}
              onTouchStart={(e) => pointerDown(e.touches[0].clientX)}
              onTouchMove={(e) => pointerMove(e.touches[0].clientX)}
              onTouchEnd={pointerUp}
              aria-live="polite"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {testimonials.map((t, i) => {
                const dist = calcDist(i);
                if (Math.abs(dist) > MAX_SIDE) return null;
                const isFront = dist === 0;
                const isNext = dist === 1;
                const abs = Math.abs(dist);
                const cardW = isSmall ? 260 : (vw >= 1024 ? 560 : 380);
                const sideMargin = 16;
                const maxX = Math.max(40, (vw - cardW - sideMargin * 2) / 2);
                const baseStep = isSmall ? 90 : X_STEP;
                const xStep = Math.min(baseStep, maxX);
                let x = dist * xStep;
                if (x > maxX) x = maxX; if (x < -maxX) x = -maxX;
                const zStep = isSmall ? 80 : Z_STEP;
                const z = -abs * zStep;
                const rotateY = dist * -ANGLE;
                const scale = 1 - abs * 0.07;
                const opacity = 1 - abs * 0.22;
                return (
                  <figure
                    key={t.name}
                    role="listitem"
                    aria-label={`${t.name} from ${t.country}`}
                    className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:-translate-x-[70%] md:-translate-y-[78%] rounded-3xl bg-white/95 shadow-xl border border-white/40 flex flex-col p-4 sm:p-6 md:p-10 w-[260px] h-[340px] sm:w-[380px] sm:h-[400px] md:w-[560px] md:h-[460px] transition-all duration-600 ease-[cubic-bezier(.22,.84,.32,.1)] ${isFront ? 'ring-2 ring-brand/40 shadow-2xl' : 'hover:shadow-2xl'} cursor-pointer`}
                    style={{
                      transform: `translate3d(${x - 135}px, 0, ${z}px) rotateY(${rotateY}deg) scale(${scale})`,
                      opacity,
                      zIndex: 100 - abs,
                      willChange: 'transform'
                    }}
                    onClick={() => { if(!isFront){ setActive(i); } }}
                  >
              
                    <div className="flex items-center gap-4 sm:gap-6">
                      <img src={t.img} alt="" aria-hidden className="w-16 h-16 sm:w-20 sm:h-20 md:w-25 md:h-25 rounded-full object-cover shadow-md" />
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold leading-snug">{t.name}</h3>
                        <span className="text-sm sm:text-base md:text-[20px] tracking-wide uppercase text-muted-foreground">{t.country}</span>
                      </div>
                    </div>
                    <blockquote className="mt-4 sm:mt-5 text-xs sm:text-sm md:text-[18px] text-gray-700 leading-relaxed line-clamp-7 sm:line-clamp-8">“{t.quote}”</blockquote>
                  </figure>
                );
              })}
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-muted-foreground">Drag / swipe or use Arrow keys • Auto rotates</p>
        </div>
      </div>
    </section>
  );
};

const Landing = () => {
  return (
    <LandingLayout>
      {/* Background infinity loop video (restored) */}
      <div className="fixed inset-0 w-screen h-screen -z-10 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          src="/InfinityLoopVideo.mp4"
          className="absolute inset-0 w-full h-full object-cover m-0 p-0 border-none"
        />
        {/* Optional subtle overlay for readability */}
        {/* <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px]" /> */}
      </div>
      {/* Unified Hero section (matches layout/style of following sections) */}
      <section className="py-16 md:py-24 bg-muted/60">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: Copy */}
            <div>
              <h1 className="text-6xl md:text-8xl font-extrabold mb-6" style={{background: 'linear-gradient(90deg, #237be7ff 0%, #da4adaff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1.12}}>
                <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}>EduDiagno</span>
              </h1>
              <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6" style={{ background: 'linear-gradient(90deg, #237be7ff 0%, #da4adaff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                Smarter Learning. <br /> Smarter Hiring. <br /> Powered by AI.
              </h2>
              <p className="text-muted-foreground text-base md:text-2xl max-w-xl" style={{color: 'black'}}>
                Hire smarter. Learn faster. Prepare better. EduDiagno bridges the gap between students and recruiters with an AI-driven hiring platform that combines interviews, skill labs, and automated screening—all in one place.
                <br /> <br />
                👉 <Typewriter text={"Students practice, recruiters hire—all powered by AI."} speed={20} /><br />
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link to="/employer/signup">
                  <Button size="lg" className="button-hover-effect" style={{background: 'linear-gradient(45deg, #237be7ff 0%, #da4adaff 100%)', color:'#fff', border:'none'}}>
                    Start Hiring Smarter
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/jobseeker/signup">
                  <Button size="lg" variant="outline" className="glass-button" style={{background: 'linear-gradient(125deg, #D18DD1 0%, #517cf3ff 40%,  #4fd2dbff 100%)', color:'#fff', border:'none'}}>
                    Students Login
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            {/* Right: Image */}
            <div className="relative">
              <div className="absolute -inset-4 -z-10 bg-brand/10 blur-2xl rounded-3xl" />
              <img
                src="/EdudiagnoTest.jpg"
                alt="EduDiagno hero"
                className="w-full rounded-2xl shadow-2xl object-cover aspect-[16/11] md:h-[520px] lg:h-[620px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* NEW: For Students section */}
      <section className="py-16 md:py-24 bg-muted/60">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: Copy */}
            <div>
              <div className="text-6xl md:text-8xl font-extrabold mb-6 animate-fade-up [animation-delay:100ms]" style={{background: 'linear-gradient(90deg, #237be7ff 0%, #da4adaff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                 <h1 className="text-6xl md:text-8xl font-extrabold mb-6 animate-fade-up [animation-delay:100ms]" style={{background: 'linear-gradient(90deg, #237be7ff 0%, #da4adaff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
              <span style={{fontFamily: 'Playfair Display, serif', fontWeight: 700}}>For Students</span>
            </h1>
              </div>

              <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
                Looking for <span className="text-brand">internships?</span>
              </h2>

              <p className="text-muted-foreground text-base md:text-2xl" style={{color: 'black'}}>
                Just score <strong>50% or above</strong> in our assessment and
                get access to internships across various domains. Start your
                career journey with real-world projects and opportunities
                tailored for you.
              </p>

              <div className="mt-8 space-y-4 text-xl">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-brand" />
                  <p className="text-foreground">AI-powered skill assessments</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-brand" />
                  <p className="text-foreground">
                    Access to premium internships
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-brand" />
                  <p className="text-foreground">
                    Real-world project experience
                  </p>
                </div>
              </div>

              {/* Updated: shift Start Assessment button slightly right on small screens */}
              <div className="mt-8 flex justify-center md:justify-start">
                <Link to="/student/assessment">
                  <Button size="lg" className="button-hover-effect ml-4 md:ml-0 px-8 py-4 text-xl">
                    Start Assessment
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right: Image (bigger, correct public path) */}
            <div className="relative">
              <div className="absolute -inset-4 -z-10 bg-brand/10 blur-2xl rounded-3xl" />
              <img
                src="/student-heross.jpeg"
                alt="Student holding laptop, ready for internships"
                className="w-full rounded-2xl shadow-2xl object-cover aspect-[16/11] md:h-[460px] lg:h-[560px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Top Candidates Section (image left, copy right) */}
      <section className="py-16 md:py-24 bg-muted/60">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left (desktop) / Bottom (mobile): Image */}
            <div className="relative order-2 md:order-1">
              <div className="absolute -inset-4 -z-10 bg-brand/10 blur-2xl rounded-3xl" />
              <img
                src="/top-candidatess.png"
                alt="Smiling manager holding tablet"
                className="w-full rounded-2xl shadow-2xl object-cover aspect-[16/10] md:h-[480px] lg:h-[600px]"
              />
            </div>

            {/* Right (desktop) / Top (mobile): Copy */}
            <div className="order-1 md:order-2">
              <div className="text-6xl md:text-8xl font-extrabold mb-6 animate-fade-up [animation-delay:100ms]" style={{background: 'linear-gradient(90deg, #237be7ff 0%, #da4adaff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
              <h1 className="text-6xl md:text-8xl font-extrabold mb-6 animate-fade-up [animation-delay:100ms]" style={{background: 'linear-gradient(90deg, #237be7ff 0%, #da4adaff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
              <span style={{fontFamily: 'Playfair Display, serif', fontWeight: 700, whiteSpace: 'normal'}}>For Recruiters</span>
            </h1>
              </div>

              <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
                Looking for <span className="text-brand">top candidates?</span>
              </h2>

              <p className="text-muted-foreground text-base md:text-2xl" style={{color: 'black'}}>
                Access pre-qualified candidates from top colleges and conduct
                <strong> AI-powered interviews.</strong> Find the right talent faster with our
                intelligent recruitment platform powered by edudiagno.com.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-3">
                  <Users className="mt-1 h-6 w-6 text-brand" />
                  <div>
                    <p className="font-semibold text-lg">Access to top-tier candidates</p>
                    <p className="text-muted-foreground text-lg">
                      Pre-screened talent from leading colleges
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Brain className="mt-1 h-6 w-6 text-brand" />
                  <div>
                    <p className="font-semibold text-lg">AI-powered interview system</p>
                    <p className="text-muted-foreground text-lg">
                      Streamlined hiring with intelligent assessments
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <BarChart3 className="mt-1 h-6 w-6 text-brand " />
                  <div>
                    <p className="font-semibold text-lg">Quality-first recruitment</p>
                    <p className="text-muted-foreground text-lg">
                      Focus on skills and potential, not just grades
                    </p>
                  </div>
                </div>
              </div>

              {/* Updated: shift Start Hiring button slightly right on small screens */}
              <div className="mt-8 flex justify-center md:justify-start">
                <Link to="/employer/signup">
                   <Button size="lg" className="button-hover-effect ml-4 md:ml-0 px-8 py-4 text-xl ">
                    Start Hiring
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* How it works section */}
      <section className="py-20 bg-muted/60">
        <div className="container mx-auto px-4">
           <div>
           <h1 className="text-center text-6xl md:text-8xl font-extrabold mb-6 animate-fade-up [animation-delay:100ms]" style={{background: 'linear-gradient(90deg, #237be7ff 0%, #da4adaff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
              <span style={{fontFamily: 'Playfair Display, serif', fontWeight: 700, whiteSpace: 'normal'}}>How it works ?</span>
            </h1>
            </div>
            <div>
              <img src="/How EduDiagno Works1.png" alt="How EduDiagno Works" />
            </div>
          <div className="max-w-lg mx-auto mt-16 text-center">
            <Link to="/how-it-works">
              <Button variant="outline" size="lg" className="glass-button">
                Learn more about the process
                <ArrowRight className="ml-2 h-5 w-8" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-20 bg-muted/60">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            
           <h1 className="text-center text-6xl md:text-8xl font-extrabold mb-6 animate-fade-up [animation-delay:100ms]" style={{background: 'linear-gradient(90deg, #237be7ff 0%, #da4adaff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
              <span style={{fontFamily: 'Playfair Display, serif', fontWeight: 700, whiteSpace: 'normal'}}>Features</span>
            </h1>

            <p className="text-muted-foreground mt-3 text-2xl" style={{ color: '#000000' }}>
              Our platform streamlines the hiring process with powerful AI tools
              designed specifically for employers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <Card className="border-border/50 overflow-hidden card-hover">
              <div className="h-2 bg-brand w-full" />
              <CardContent className="pt-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-brand/10 text-brand mb-4">
                  <Calendar className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-xl mb-2">AI Video Interviews</h3>
                <p className="text-muted-foreground">
                  Conduct interviews in real-time with an AI interviewer that
                  asks job-relevant questions and evaluates responses.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="border-border/50 overflow-hidden card-hover">
              <div className="h-2 bg-brand w-full" />
              <CardContent className="pt-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-brand/10 text-brand mb-4">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-xl mb-2">Instant Insights</h3>
                <p className="text-muted-foreground">
                  AI analyzes candidate responses and generates comprehensive
                  hiring reports with scores and recommendations.
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="border-border/50 overflow-hidden card-hover">
              <div className="h-2 bg-brand w-full" />
              <CardContent className="pt-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-brand/10 text-brand mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-xl mb-2">Private Interviews</h3>
                <p className="text-muted-foreground">
                  Generate secure private interview links for each candidate,
                  ensuring only invited candidates can access their interviews.
                </p>
              </CardContent>
            </Card>

            {/* Feature 4 */}
            <Card className="border-border/50 overflow-hidden card-hover">
              <div className="h-2 bg-brand w-full" />
              <CardContent className="pt-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-brand/10 text-brand mb-4">
                  <Search className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-xl mb-2">Smart Screening</h3>
                <p className="text-muted-foreground">
                  AI filters only the best-matched candidates by analyzing
                  resumes against your job requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
  

  {/* Benefits section */}
      <section className="py-20 bg-muted/60">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-center text-6xl md:text-8xl font-extrabold mb-6 animate-fade-up [animation-delay:100ms]" style={{background: 'linear-gradient(90deg, #237be7ff 0%, #da4adaff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',lineHeight: 1.12}}>
              <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, whiteSpace: 'normal'}}>Why choose EduDiagno AI</span>
            </h1>
            <p className="text-muted-foreground mt-3 text-2xl" style={{ color: '#000000' }}>
              Our platform offers unparalleled benefits for modern employers
              looking to optimize their hiring process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            {/* Left column */}
            <div className="space-y-8">
              {/* Benefit 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center text-brand">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Save Time</h3>
                  <p className="text-muted-foreground">
                    Reduce hiring time by up to 70% with automated screening and
                    AI-conducted interviews.
                  </p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center text-brand">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Better Candidates</h3>
                  <p className="text-muted-foreground">
                    AI screening ensures you only review candidates who truly
                    match your requirements.
                  </p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center text-brand">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Data-Driven Decisions
                  </h3>
                  <p className="text-muted-foreground">
                    Make hiring decisions based on objective data and AI
                    insights rather than gut feelings.
                  </p>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-8">
              {/* Benefit 4 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center text-brand">
                  <Brain className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Reduce Bias</h3>
                  <p className="text-muted-foreground">
                    Our AI is designed to minimize unconscious bias in the
                    hiring process, promoting diversity.
                  </p>
                </div>
              </div>

              {/* Benefit 5 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center text-brand">
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Flexible Scheduling
                  </h3>
                  <p className="text-muted-foreground">
                    Candidates can complete AI interviews at their convenience,
                    expanding your talent pool.
                  </p>
                </div>
              </div>

              {/* Benefit 6 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center text-brand">
                  <Search className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Customizable Process
                  </h3>
                  <p className="text-muted-foreground">
                    Tailor interview questions and screening criteria to your
                    specific job requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials: moved earlier for better narrative flow (social proof before feature deep-dive) */}
      <div className="relative bg-gradient-to-b from-muted/70 via-white to-muted/50">
        <Testimonials3D />
      </div>

      {/* CTA section */}
      <section className="py-20 bg-brand/5 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="font-bold mb-6 animate-fade-up [animation-delay:200ms]"
              style={{
                fontSize: 'clamp(1.25rem, 3.5vw, 2.2rem)',
                lineHeight: 1.08,
                background: 'linear-gradient(90deg, #237be7ff 0%, #da4adaff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: 'Space Grotesk, sans-serif'
              }}
            >
              Ready to Transform Your Hiring Process?
            </h2>
            <p className="p text-lg mb-8 max-w-2xl mx-auto" style={{ color: '#000000' }}>
              Join thousands of employers who are saving time, reducing costs,
              and finding better candidates with InterviewPro AI.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/employer/signup">
                <Button
                  size="lg"
                  className="w-full sm:w-auto button-hover-effect"
                >
                  Start Hiring Smarter
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto glass-button"
                >
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </LandingLayout>
  );
};

export default Landing;