import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { adminApi } from '@/services/adminApi';
import { toast } from 'sonner';

interface AdminUser {
  id: number;
  email: string;
  role: string;
  is_active: boolean;
  created_at?: string;
}

interface AdminContextType {
  admin: AdminUser | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

interface AdminProviderProps {
  children: ReactNode;
}

export const AdminProvider: React.FC<AdminProviderProps> = ({ children }) => {
  const [admin, setAdmin] = useState<AdminUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check if admin is authenticated on mount
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('admin_token');
      if (token) {
        try {
          const response = await adminApi.getProfile();
          setAdmin(response.data);
        } catch (error) {
          console.error("Admin auth check failed:", error);
          localStorage.removeItem("admin_token");
          setAdmin(null);
          // Note: Redirect will be handled by RequireAdminAuth component
        }
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await adminApi.login(email, password);
      localStorage.setItem('admin_token', response.access_token);
      
      // Get admin profile
      const profileResponse = await adminApi.getProfile();
      setAdmin(profileResponse.data);
      
      toast.success('Admin login successful');
    } catch (error: any) {
      const errorMessage = error.response?.data?.detail || 'Login failed';
      toast.error(errorMessage);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('admin_token');
    setAdmin(null);
    toast.success('Admin logged out successfully');
  };

  const value: AdminContextType = {
    admin,
    isLoading,
    login,
    logout,
    isAuthenticated: !!admin,
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
}; 