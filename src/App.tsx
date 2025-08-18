import { Toaster } from "sonner";
import { Routes, Route } from "react-router-dom";
import Landing from "@/pages/Landing";
import Features from "@/pages/Features";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";
import Careers from "@/pages/Careers";
import Integrations from "@/pages/Integrations";
import Changelog from "@/pages/Changelog";
import HowItWorks from "@/pages/HowItWorks";
import Signup from "@/pages/Company/CompanySignup";
import JobSeekerSignup from "@/pages/JobSeeker/JobSeekerSignup";
import JobSeekerLogin from "@/pages/JobSeeker/JobSeekerLogin";
import JobSeekerHomePage from "@/pages/JobSeeker/JobSeekerHomePage";
import JobSeekerProfile from "@/pages/JobSeeker/JobSeekerProfile";
import CompanyDashboard from "@/pages/Company/CompanyDashboard";
import AiInterviewedJobsPage from "@/pages/Company/aiInterviewedJobs/AiInterviewedJobsPage";
import NewJob from "@/pages/Company/aiInterviewedJobs/NewAiInterviewedJob";
import JobDetail from "@/pages/Company/aiInterviewedJobs/AiInterviewedJobDetail";
import InterviewsPage from "@/pages/Company/Interviews/InterviewsPage";
import InterviewDetail from "@/pages/Company/Interviews/InterviewDetail";
import InterviewPage from "@/pages/Interview/InterviewPage";
import MCQTest from "@/pages/Interview/MCQTest";
import UnifiedInterviewFlow from "@/pages/Interview/UnifiedInterviewFlow";
import DSAPlayground from "@/pages/Interview/DSAPlayground";
import NotFound from "@/pages/NotFound";
import JobSeekerAuthRequired from "@/components/auth/JobSeekerAuthRequired";
import CompanyLogin from "@/pages/Company/CompanyLogin";
import CompanyForgotPassword from "@/pages/Company/CompanyForgotPassword";
import AdminDashboard from "@/pages/AdminDashboard";
import AdminLogin from "@/pages/AdminLogin";
import AdminManagement from "@/pages/AdminManagement";
import { ADMIN_CONFIG } from "@/config/admin";
// import AdminLayout from "@/pages/Admin/AdminLayout";g
// import AdminDashboard from "@/pages/Admin/Dashboard";
// import UserManagement from "@/pages/Admin/Users";
// import DevelopmentManagement from "@/pages/Admin/Development";
// import ContentManagement from "@/pages/Admin/Content";
// import SecurityCompliance from "@/pages/Admin/Security";
// import SystemHealth from "@/pages/Admin/Health";
// import SystemSettings from "@/pages/Admin/Settings";
// import PlatformAnalytics from "@/pages/Admin/Analytics";
// import BillingManagement from "@/pages/Admin/Billing";
// import IntegrationManagement from "@/pages/Admin/Integrations";
// import SupportManagement from "@/pages/Admin/Support";
// import Dashboard4 from "@/pages/Dashboard4";
// import Candidates4 from "@/pages/Candidates4";
// import Jobs4 from "@/pages/Jobs4";
// import Analytics4 from "@/pages/Analytics4";
// import Settings4 from "@/pages/Settings4";
import RequireAuth from "@/components/auth/RequireAuth";
import RequireCompanyAuth from "@/components/auth/RequireCompanyAuth";
import RequireProfileVerified from "@/components/auth/RequireProfileVerified";
import RequireAdminAuth from "@/components/auth/RequireAdminAuth";
import VideoInterview from "@/pages/Interview/VideoInterview";
import JobsPage from "./pages/Company/jobs/JobsPage";
import JobPage from "./pages/Company/jobs/JobPage";
import JobSearchPage from "@/pages/JobSeeker/JobSearchPage";
import JobDetailPage from "@/pages/JobSeeker/JobDetailPage";
import CompanySearchPage from "@/pages/Company/CompanySearchPage";
import CompanyDetailPage from "@/pages/JobSeeker/CompanyDetailPage";
import CompanyProfilePage from "@/pages/Company/CompanyProfilePage";
import InterviewOverview from "./pages/Interview/InterviewOverview";
import PrivateInterviewPage from "@/pages/Interview/PrivateInterviewPage";
import UserDetailPage from "@/pages/JobSeeker/UserDetailPage";
import CandidateSearch from './pages/Company/CandidateSearch';
import Blog from "./pages/Blog";
import Blog1 from "./pages/Blog1";
import Blog2 from "./pages/Blog2";
import Blog3 from "./pages/Blog3";
import About from "./pages/About";
import CaseStudy from "./pages/CaseStudy";
import APIDocumentation from "./pages/APIDocumentation";
import GettingStarted from "./pages/GettingStarted";
import DevelopmentGuidelines from "./pages/DevelopmentGuidelines";
import Documentation from "./pages/Documentation";
import Pricing from "./pages/Pricing"; // Import the new Pricing page
// import { interviewAPI, jobAPI } from "@/lib/api";

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Landing />} />
  <Route path="/blog" element={<Blog />} />
  <Route path="/blog/1" element={<Blog1 />} />
  <Route path="/blog/2" element={<Blog2 />} />
  <Route path="/blog/3" element={<Blog3 />} />
        <Route path="/about" element={<About />} />
        <Route path="/case-studies" element={<CaseStudy />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/integrations" element={<Integrations />} />

        <Route path="/changelog" element={<Changelog />} />
  <Route path="/how-it-works" element={<HowItWorks />} />
  <Route path="/documentation" element={<Documentation />} />
  <Route path="/api-documentation" element={<APIDocumentation />} />
  <Route path="/getting-started" element={<GettingStarted />} />
  <Route path="/development-guidelines" element={<DevelopmentGuidelines />} />
        <Route path="/employer/login" element={<CompanyLogin />} />
        <Route path="/employer/forgot-password" element={<CompanyForgotPassword />} />
        <Route path="/employer/signup" element={<Signup />} />
        <Route path="/jobseeker/signup" element={<JobSeekerSignup />} />
        <Route path="/jobseeker/login" element={<JobSeekerLogin />} />

        {/* Admin Routes */}
        <Route path={ADMIN_CONFIG.LOGIN_URL} element={<AdminLogin />} />
        <Route
          path="/admin-dashboard"
          element={<RequireAdminAuth><AdminDashboard /></RequireAdminAuth>}
        />
        <Route
          path="/admin-dashboard/users/:id"
          element={<RequireAdminAuth><UserDetailPage /></RequireAdminAuth>}
        />
        <Route
          path="/admin-management"
          element={<RequireAdminAuth><AdminManagement /></RequireAdminAuth>}
        />

        <Route path="/jobseeker/home" element={
          <JobSeekerAuthRequired>
            <JobSeekerHomePage />
          </JobSeekerAuthRequired>
        } />
        <Route path="/jobseeker/profile" element={
          <JobSeekerAuthRequired>
            <JobSeekerProfile />
          </JobSeekerAuthRequired>
        } />
        <Route path="/jobseeker/job-search" element={
          <JobSeekerAuthRequired>
            <JobSearchPage />
          </JobSeekerAuthRequired>
        } />
        <Route path="/jobseeker/job/:jobId" element={
          <JobSeekerAuthRequired>
            <JobDetailPage />
          </JobSeekerAuthRequired>
        } />
        <Route path="/jobseeker/companies" element={<JobSeekerAuthRequired><CompanySearchPage /></JobSeekerAuthRequired>} />
        <Route path="/jobseeker/company/:companyId" element={<JobSeekerAuthRequired><CompanyDetailPage /></JobSeekerAuthRequired>} />

        <Route path="/interview" element={<InterviewPage />} />
        <Route path="/interview/compatibility" element={<UnifiedInterviewFlow />} />
        <Route path="/interview/dsa-playground" element={<DSAPlayground />} />
        <Route path="/interview/video" element={<VideoInterview />} />
        <Route path="/interview/overview" element={<InterviewOverview />} />
        <Route path="/mcq" element={<MCQTest />} />
       

        <Route path="/interview/private/:token" element={<PrivateInterviewPage />} /> 
        {/* Protected Dashboard Routes */}
        <Route
          path="/company/dashboard"
          element={
            <RequireCompanyAuth>
              <CompanyDashboard />
            </RequireCompanyAuth>
          }
        />
        <Route
          path="/company/ai-interviewed-jobs/new"
          element={
            <RequireCompanyAuth>
              <RequireProfileVerified>
                <NewJob />
              </RequireProfileVerified>
            </RequireCompanyAuth>
          }
        />
        <Route
          path="/company/ai-interviewed-jobs/:id"
          element={
            <RequireCompanyAuth>
              <RequireProfileVerified>
                <JobDetail />
              </RequireProfileVerified>
            </RequireCompanyAuth>
          }
        />
        <Route
          path="/company/interviews"
          element={
            <RequireCompanyAuth>
              <InterviewsPage />
            </RequireCompanyAuth>
          }
        />
        <Route
          path="/company/interviews/:id"
          element={
            <RequireCompanyAuth>
              <InterviewDetail />
            </RequireCompanyAuth>
          }
        />
        {/* <Route
              path="/company/interviews/new"
              element={
                <RequireAuth>
                  <RequireProfileVerified>
                    <InterviewDetail />
                  </RequireProfileVerified>
                </RequireAuth>
              }
            /> */}
        <Route
          path="/company/ai-interviewed-jobs"
          element={<RequireCompanyAuth><AiInterviewedJobsPage /></RequireCompanyAuth>}
        />
        <Route
          path="/company/jobs"
          element={<RequireCompanyAuth><JobsPage /></RequireCompanyAuth>}
        />
        <Route
          path="/company/job/:jobId"
          element={<RequireCompanyAuth><JobPage /></RequireCompanyAuth>}
        />
        <Route
          path="/company/profile"
          element={<RequireCompanyAuth><CompanyProfilePage /></RequireCompanyAuth>}
        />
        <Route
          path="/company/candidate-search"
          element={<RequireCompanyAuth><CandidateSearch /></RequireCompanyAuth>}
        />

        {/* Admin Routes */}
        <Route
          path="/admin-dashboard"
          element={<RequireAdminAuth><AdminDashboard /></RequireAdminAuth>}
        />
        <Route
          path="/admin-dashboard/users/:id"
          element={<RequireAdminAuth><UserDetailPage /></RequireAdminAuth>}
        />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
