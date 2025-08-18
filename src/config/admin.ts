// Admin Security Configuration
export const ADMIN_CONFIG = {
  // Secure access token - complex token for admin access
  // Format: edudiagno-admin-YYYY-{64 character random string}
  SECURE_ACCESS_TOKEN: "edudiagno-admin-2024-7f8a9b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z-a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z",
  
  // Admin login URL with secure token
  get LOGIN_URL() {
    return `/admin/secure-access/${this.SECURE_ACCESS_TOKEN}/login`;
  },
  
  // Admin dashboard URL
  DASHBOARD_URL: "/admin-dashboard",
  
  // Admin management URL
  MANAGEMENT_URL: "/admin-management",
  
  // Session timeout (in minutes)
  SESSION_TIMEOUT: 60,
  
  // Rate limiting settings
  RATE_LIMIT_ATTEMPTS: 5,
  RATE_LIMIT_WINDOW: 60, // seconds
  
  // Security settings
  MIN_PASSWORD_LENGTH: 12,
  REQUIRE_SPECIAL_CHARS: true,
  REQUIRE_NUMBERS: true,
  REQUIRE_UPPERCASE: true,
  REQUIRE_LOWERCASE: true,
};

// Helper function to get admin URLs
export const getAdminUrl = (path: string) => {
  return `/admin/secure-access/${ADMIN_CONFIG.SECURE_ACCESS_TOKEN}${path}`;
};

// Helper function to generate a new secure token
export const generateSecureToken = () => {
  const timestamp = new Date().getFullYear();
  const randomString = Array.from({ length: 64 }, () => 
    Math.random().toString(36).charAt(2)
  ).join('');
  return `edudiagno-admin-${timestamp}-${randomString}`;
}; 