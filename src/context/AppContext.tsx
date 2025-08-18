import { companyApi } from "@/services/companyApi";
import { CompanyData, CompanyLoginData } from "@/types/company";
import { JobSeekerData } from "@/types/jobSeeker";
import { jobSeekerApi } from "@/services/jobSeekerApi";
import { createContext, FC, ReactNode, useEffect, useState } from "react";

interface AppContextType {
  companyLogin?: (data: CompanyLoginData) => Promise<void>;
  companyLogout?: () => Promise<void>;
  companyVerifyLogin?: () => Promise<void>;
  company?: CompanyData | null;

  jobSeekerLogin?: (data: { email: string; password: string }) => Promise<void>;
  jobSeekerLogout?: () => void;
  jobSeekerVerifyLogin?: ()=>void;
  jobSeeker?: JobSeekerData | null;
  updateJobSeeker?: (data: Partial<JobSeekerData>) => Promise<void>;
}

export const AppContext = createContext<AppContextType | null>(null);

export const AppContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [company, setCompany] = useState<CompanyData | null>(null);
  const [jobSeeker, setJobSeeker] = useState<JobSeekerData | null>(null);

  const companyLogin = async (data: CompanyLoginData) => {
    const res = await companyApi.login(data);
    const companyData = res.data;
    
    // Check if company is suspended in login response - check multiple possible field names
    if (companyData && (companyData.is_suspended || companyData.suspended || companyData.isSuspended)) {
      throw new Error("Account suspended. Please contact support.");
    }
    
    localStorage.setItem(
      "token",
      res.headers.authorization.split("Bearer ")[1]
    );
    setCompany(companyData);
  };

  const companyLogout = async () => {
    localStorage.removeItem("token");
    setCompany(null);
  };

  const companyVerifyLogin = async () => {
    const res = await companyApi.verifyLogin();
    const companyData = res.data;
    
    // Check if company is suspended - check multiple possible field names
    if (companyData.is_suspended || companyData.suspended || companyData.isSuspended) {
      localStorage.removeItem("token");
      setCompany(null);
      throw new Error("Account suspended. Please contact support.");
    }
    
    setCompany(companyData);
  };

  // Job Seeker login
  const jobSeekerLogin = async (data: { email: string; password: string }) => {
    const res = await jobSeekerApi.login(data);
    const token = res.headers["authorization"]?.split("Bearer ")[1];
    if (token) {
      localStorage.setItem("jobseeker_token", token);
      
      // Check if login response contains user data with suspended status
      if (res.data && (res.data.is_suspended || res.data.suspended || res.data.isSuspended)) {
        localStorage.removeItem("jobseeker_token");
        throw new Error("Account suspended. Please contact support.");
      }
      
      // Fetch and set job seeker profile
      const profileRes = await jobSeekerApi.verifyLogin();
      const jobSeekerData = profileRes.data;
      
      // Check if user is suspended - check multiple possible field names
      if (jobSeekerData.is_suspended || jobSeekerData.suspended || jobSeekerData.isSuspended) {
        localStorage.removeItem("jobseeker_token");
        setJobSeeker(null);
        throw new Error("Account suspended. Please contact support.");
      }
      
      setJobSeeker(jobSeekerData);
    } else {
      throw new Error("No token received");
    }
  };
  const jobSeekerLogout = () => {
    localStorage.removeItem("jobseeker_token");
    setJobSeeker(null);
  };
  const jobSeekerVerifyLogin = async () => {
    const token = localStorage.getItem("jobseeker_token");
    if (!token) {
      setJobSeeker(null);
      throw new Error("No jobseeker token found");
    }
    try {
      const res = await jobSeekerApi.verifyLogin();
      const jobSeekerData = res.data;
      
      // Check if user is suspended - check multiple possible field names
      if (jobSeekerData.is_suspended || jobSeekerData.suspended || jobSeekerData.isSuspended) {
        localStorage.removeItem("jobseeker_token");
        setJobSeeker(null);
        throw new Error("Account suspended. Please contact support.");
      }
      
      setJobSeeker(jobSeekerData);
    } catch (error) {
      localStorage.removeItem("jobseeker_token");
      setJobSeeker(null);
      throw error;
    }
  };
  const updateJobSeeker = async (data: Partial<JobSeekerData>) => {
    const res = await jobSeekerApi.update(data);
    setJobSeeker(res.data);
  };

  return (
    <AppContext.Provider value={{ companyLogin, companyLogout, company, companyVerifyLogin, jobSeekerLogin, jobSeekerLogout, jobSeekerVerifyLogin, jobSeeker, updateJobSeeker }}>
      {children}
    </AppContext.Provider>
  );
};
