import { config } from "@/config";
import axios from "axios";

export function getAdminAuthHeaders() {
  const token = localStorage.getItem("admin_token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export const adminApi = {
  createQuizQuestions: async (data: any) => {
    return axios.post(`${config.API_BASE_URL}/admin/quiz-questions`, data, {
      headers: getAdminAuthHeaders(),
    });
  },
  createQuizOption: async (data: any) => {
    return axios.post(`${config.API_BASE_URL}/admin/quiz-options`, data, {
      headers: getAdminAuthHeaders(),
    });
  },
  createDSAQuestion: async (data: any) => {
    return axios.post(`${config.API_BASE_URL}/admin/dsa-questions`, data, {
      headers: getAdminAuthHeaders(),
    });
  },
  deleteTest: async (id: number) => {
    return axios.delete(`${config.API_BASE_URL}/admin/tests/${id}`, {
      headers: getAdminAuthHeaders(),
    });
  },
  getTests: async () => {
    return axios.get(`${config.API_BASE_URL}/admin/tests`, {
      headers: getAdminAuthHeaders(),
    });
  },
  createTest: async (data: any) => {
    return axios.post(`${config.API_BASE_URL}/admin/tests`, data, {
      headers: getAdminAuthHeaders(),
    });
  },
  login: async (email: string, password: string) => {
    const response = await axios.post(`${config.API_BASE_URL}/admin/login`, { email, password });
    return response.data; // { access_token, token_type }
  },
  logout: async () => {
    return axios.post(`${config.API_BASE_URL}/admin/logout`, null, {
      headers: getAdminAuthHeaders(),
    });
  },
  getProfile: async () => {
    return axios.get(`${config.API_BASE_URL}/admin/profile`, {
      headers: getAdminAuthHeaders(),
    });
  },
  getJobSeekers: async () => {
    return axios.get(`${config.API_BASE_URL}/admin/jobseekers`, {
      headers: getAdminAuthHeaders(),
    });
  },
  suspendJobSeeker: async (id: number, suspend: boolean) => {
    return axios.post(`${config.API_BASE_URL}/admin/jobseekers/${id}/suspend?suspend=${suspend}`, null, {
      headers: getAdminAuthHeaders(),
    });
  },
  verifyJobSeeker: async (id: number, verify: boolean) => {
    return axios.post(`${config.API_BASE_URL}/admin/jobseekers/${id}/verify?verify=${verify}`, null, {
      headers: getAdminAuthHeaders(),
    });
  },
  getCompanies: async () => {
    return axios.get(`${config.API_BASE_URL}/admin/companies`, {
      headers: getAdminAuthHeaders(),
    });
  },
  suspendCompany: async (id: number, suspend: boolean) => {
    return axios.post(`${config.API_BASE_URL}/admin/companies/${id}/suspend?suspend=${suspend}`, null, {
      headers: getAdminAuthHeaders(),
    });
  },
  verifyCompany: async (id: number, verify: boolean) => {
    return axios.post(`${config.API_BASE_URL}/admin/companies/${id}/verify?verify=${verify}`, null, {
      headers: getAdminAuthHeaders(),
    });
  },
  deleteCompany: async (id: number) => {
    return axios.delete(`${config.API_BASE_URL}/admin/companies/${id}`, {
      headers: getAdminAuthHeaders(),
    });
  },
  getJobs: async () => {
    return axios.get(`${config.API_BASE_URL}/admin/jobs`, {
      headers: getAdminAuthHeaders(),
    });
  },
  approveJob: async (id: number, approve: boolean) => {
    return axios.post(`${config.API_BASE_URL}/admin/jobs/${id}/approve?approve=${approve}`, null, {
      headers: getAdminAuthHeaders(),
    });
  },
  closeJob: async (id: number, close: boolean) => {
    return axios.post(`${config.API_BASE_URL}/admin/jobs/${id}/close?close=${close}`, null, {
      headers: getAdminAuthHeaders(),
    });
  },
  featureJob: async (id: number, feature: boolean) => {
    return axios.post(`${config.API_BASE_URL}/admin/jobs/${id}/feature?feature=${feature}`, null, {
      headers: getAdminAuthHeaders(),
    });
  },
  deleteJob: async (id: number) => {
    return axios.delete(`${config.API_BASE_URL}/admin/jobs/${id}`, {
      headers: getAdminAuthHeaders(),
    });
  },
  getAiInterviewedJobs: async () => {
    return axios.get(`${config.API_BASE_URL}/admin/ai-interviewed-jobs`, {
      headers: getAdminAuthHeaders(),
    });
  },
  approveAiInterviewedJob: async (id: number, approve: boolean) => {
    return axios.post(`${config.API_BASE_URL}/admin/ai-interviewed-jobs/${id}/approve?approve=${approve}`, null, {
      headers: getAdminAuthHeaders(),
    });
  },
  closeAiInterviewedJob: async (id: number, close: boolean) => {
    return axios.post(`${config.API_BASE_URL}/admin/ai-interviewed-jobs/${id}/close?close=${close}`, null, {
      headers: getAdminAuthHeaders(),
    });
  },
  deleteAiInterviewedJob: async (id: number) => {
    return axios.delete(`${config.API_BASE_URL}/admin/ai-interviewed-jobs/${id}`, {
      headers: getAdminAuthHeaders(),
    });
  },
  getInterviews: async () => {
    return axios.get(`${config.API_BASE_URL}/admin/interviews`, {
      headers: getAdminAuthHeaders(),
    });
  },
  flagInterview: async (id: number, flag: boolean) => {
    return axios.post(`${config.API_BASE_URL}/admin/interviews/${id}/flag?flag=${flag}`, null, {
      headers: getAdminAuthHeaders(),
    });
  },
  deleteInterview: async (id: number) => {
    return axios.delete(`${config.API_BASE_URL}/admin/interviews/${id}`, {
      headers: getAdminAuthHeaders(),
    });
  },
  // Admin management methods
  getAdmins: async () => {
    return axios.get(`${config.API_BASE_URL}/admin/admins`, {
      headers: getAdminAuthHeaders(),
    });
  },
  createAdmin: async (data: { email: string; password: string; role: string }) => {
    return axios.post(`${config.API_BASE_URL}/admin/create`, data, {
      headers: getAdminAuthHeaders(),
    });
  },
  updateAdmin: async (id: number, data: any) => {
    return axios.put(`${config.API_BASE_URL}/admin/admins/${id}`, data, {
      headers: getAdminAuthHeaders(),
    });
  },
  deleteAdmin: async (id: number) => {
    return axios.delete(`${config.API_BASE_URL}/admin/admins/${id}`, {
      headers: getAdminAuthHeaders(),
    });
  },
}; 