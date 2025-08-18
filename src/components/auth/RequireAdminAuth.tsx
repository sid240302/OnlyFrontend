import React, { FC, useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "sonner";
import { AppContext } from "@/context/AppContext";
import { ADMIN_CONFIG } from "@/config/admin";

interface RequireAdminAuthProps {
  children: React.ReactNode;
}

const RequireAdminAuth: FC<RequireAdminAuthProps> = ({ children }) => {
  const location = useLocation();
  const appContext = useContext(AppContext);
  
  if (!appContext) {
    toast.error("Something went wrong");
    return null;
  }

  // Check for admin token
  const adminToken = localStorage.getItem("admin_token");
  
  if (!adminToken) {
    // Redirect to admin login page
    return <Navigate to={ADMIN_CONFIG.LOGIN_URL} state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default RequireAdminAuth; 