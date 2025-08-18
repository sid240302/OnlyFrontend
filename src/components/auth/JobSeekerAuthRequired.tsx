import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "@/context/AppContext";
import { toast } from "sonner";

const JobSeekerAuthRequired: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const appContext = useContext(AppContext);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await appContext?.jobSeekerVerifyLogin?.();
        setChecked(true);
      } catch (error: any) {
        // Handle suspended account specifically
        if (error.message === "Account suspended. Please contact support.") {
          toast.error("Your account has been suspended. Please contact support.");
          localStorage.removeItem("jobseeker_token");
        }
        navigate("/jobseeker/login");
      }
    };
    checkAuth();
  }, []);

  if (!checked) return null;
  return <>{children}</>;
};

export default JobSeekerAuthRequired;
