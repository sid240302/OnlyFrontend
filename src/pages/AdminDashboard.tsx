import React, { useState, useEffect } from "react";
import { adminApi } from "@/services/adminApi";
import { toast } from "sonner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { LayoutDashboard, Users, Briefcase, Video, FileQuestion, LogOut, User } from "lucide-react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import AdminDSAPool from "./AdminDSAPool";
import { useAdmin } from "@/context/AdminContext";
import AdminManagement from "./AdminManagement";
import { ADMIN_CONFIG } from "@/config/admin";

const navigation = [
  { key: "users", label: "Users (Job Seekers)", icon: Users },
  { key: "companies", label: "Companies", icon: LayoutDashboard },
  { key: "jobs", label: "Jobs", icon: Briefcase },
  { key: "ai-jobs", label: "AI Interviewed Jobs", icon: Video },
  { key: "interviews", label: "Interviews", icon: Video },
  { key: "questions", label: "Questions", icon: FileQuestion },
];

// Add admin management for superadmins
const getNavigation = (isSuperAdmin: boolean) => {
  if (isSuperAdmin) {
    return [...navigation, { key: "admin-management", label: "Admin Management", icon: User }];
  }
  return navigation;
};

export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState("users");
  const [jobSeekers, setJobSeekers] = useState<any[]>([]);
  const [companies, setCompanies] = useState<any[]>([]);
  const [jobs, setJobs] = useState<any[]>([]);
  const [aiJobs, setAiJobs] = useState<any[]>([]);
  const [interviews, setInterviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [deleteAiJobId, setDeleteAiJobId] = useState<number | null>(null);
  const [deleteJobId, setDeleteJobId] = useState<number | null>(null);
  const [deleteCompanyId, setDeleteCompanyId] = useState<number | null>(null);
  const [actionLoading, setActionLoading] = useState<{ [key: string]: boolean }>({});
  const navigate = useNavigate();
  const { admin, logout } = useAdmin();

  const handleLogout = async () => {
    try {
      await adminApi.logout();
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      logout();
      navigate(ADMIN_CONFIG.LOGIN_URL);
    }
  };

  useEffect(() => {
    if (activeSection === "users") {
      setLoading(true);
      setError(null);
      adminApi.getJobSeekers()
        .then(res => setJobSeekers(res.data))
        .catch(err => {
          setError("Failed to fetch job seekers");
          toast.error("Failed to fetch job seekers");
        })
        .finally(() => setLoading(false));
    } else if (activeSection === "companies") {
      setLoading(true);
      setError(null);
      adminApi.getCompanies()
        .then(res => setCompanies(res.data))
        .catch(err => {
          setError("Failed to fetch companies");
          toast.error("Failed to fetch companies");
        })
        .finally(() => setLoading(false));
    } else if (activeSection === "jobs") {
      setLoading(true);
      setError(null);
      adminApi.getJobs()
        .then(res => setJobs(res.data))
        .catch(err => {
          setError("Failed to fetch jobs");
          toast.error("Failed to fetch jobs");
        })
        .finally(() => setLoading(false));
    } else if (activeSection === "ai-jobs") {
      setLoading(true);
      setError(null);
      adminApi.getAiInterviewedJobs()
        .then(res => setAiJobs(res.data))
        .catch(err => {
          setError("Failed to fetch AI Interviewed Jobs");
          toast.error("Failed to fetch AI Interviewed Jobs");
        })
        .finally(() => setLoading(false));
    } else if (activeSection === "interviews") {
      setLoading(true);
      setError(null);
      adminApi.getInterviews()
        .then(res => setInterviews(res.data))
        .catch(err => {
          setError("Failed to fetch interviews");
          toast.error("Failed to fetch interviews");
        })
        .finally(() => setLoading(false));
    }
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-background flex">
      <aside className="fixed md:sticky top-0 h-screen w-64 bg-card border-r border-border/50">
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-border/50">
            <Link to="/admin-dashboard" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-md bg-brand flex items-center justify-center text-white font-bold">
                E
              </div>
              <span className="font-bold text-lg">EduDiagno Admin</span>
            </Link>
          </div>

          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {getNavigation(admin?.role === "superadmin").map((link) => {
              const isActive = activeSection === link.key;
              return (
                <button
                  key={link.key}
                  onClick={() => setActiveSection(link.key)}
                  className={`w-full flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                    isActive
                      ? "bg-brand text-brand-foreground"
                      : "hover:bg-muted"
                  }`}
                >
                  <link.icon className="w-5 h-5" />
                  <span>{link.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
        <header className="h-16 border-b border-border/50 px-4 flex items-center justify-between bg-background/80 backdrop-blur-md sticky top-0 z-20">
          <h1 className="text-2xl font-bold">{navigation.find(n => n.key === activeSection)?.label}</h1>
          <div className="flex items-center space-x-4">
            {admin && (
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <User className="w-4 h-4" />
                <span>{admin.email}</span>
                <span className="text-xs bg-muted px-2 py-1 rounded">{admin.role}</span>
              </div>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              className="text-destructive hover:text-destructive"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </header>

        <main className="flex-1 p-6">
          {activeSection === "users" && (
            <Card>
              <CardHeader>
                <CardTitle>Job Seekers</CardTitle>
              </CardHeader>
              <CardContent>
                <Input
                  placeholder="Search job seekers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="mb-4"
                />
                {loading && <div className="text-center py-4">Loading...</div>}
                {error && <div className="text-destructive text-center py-4">{error}</div>}
                {!loading && !error && (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Verified</TableHead>
                        <TableHead>Suspended</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {jobSeekers.map((js) => (
                        <TableRow key={js.id}>
                          <TableCell>{js.id}</TableCell>
                          <TableCell>{js.firstname} {js.lastname}</TableCell>
                          <TableCell>{js.email}</TableCell>
                          <TableCell>{js.phone}</TableCell>
                          <TableCell>
                            <Button
                              variant={js.is_verified ? "default" : "secondary"}
                              size="sm"
                              disabled={actionLoading[`verify-${js.id}`]}
                              onClick={async () => {
                                const actionKey = `verify-${js.id}`;
                                setActionLoading(prev => ({ ...prev, [actionKey]: true }));
                                try {
                                  console.log(`Verifying job seeker ${js.id}, current status: ${js.is_verified}, new status: ${!js.is_verified}`);
                                  await adminApi.verifyJobSeeker(js.id, !js.is_verified);
                                  setJobSeekers((prev: any[]) => prev.map(x => x.id === js.id ? { ...x, is_verified: !js.is_verified } : x));
                                  toast.success(js.is_verified ? "User unverified successfully" : "User verified successfully");
                                } catch (error) {
                                  console.error("Error verifying job seeker:", error);
                                  toast.error("Failed to update verification status");
                                } finally {
                                  setActionLoading(prev => ({ ...prev, [actionKey]: false }));
                                }
                              }}
                            >
                              {actionLoading[`verify-${js.id}`] ? "Updating..." : (js.is_verified ? "Verified" : "Verify")}
                            </Button>
                          </TableCell>
                          <TableCell>
                            <Button
                              variant={js.is_suspended ? "destructive" : "secondary"}
                              size="sm"
                              disabled={actionLoading[`suspend-${js.id}`]}
                              onClick={async () => {
                                const actionKey = `suspend-${js.id}`;
                                setActionLoading(prev => ({ ...prev, [actionKey]: true }));
                                try {
                                  console.log(`Suspending job seeker ${js.id}, current status: ${js.is_suspended}, new status: ${!js.is_suspended}`);
                                  await adminApi.suspendJobSeeker(js.id, !js.is_suspended);
                                  setJobSeekers((prev: any[]) => prev.map(x => x.id === js.id ? { ...x, is_suspended: !js.is_suspended } : x));
                                  toast.success(js.is_suspended ? "User unsuspended successfully" : "User suspended successfully");
                                } catch (error) {
                                  console.error("Error suspending job seeker:", error);
                                  toast.error("Failed to update suspension status");
                                } finally {
                                  setActionLoading(prev => ({ ...prev, [actionKey]: false }));
                                }
                              }}
                            >
                              {actionLoading[`suspend-${js.id}`] ? "Updating..." : (js.is_suspended ? "Suspended" : "Suspend")}
                            </Button>
                          </TableCell>
                          <TableCell>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => navigate(`/admin-dashboard/users/${js.id}`)}
                            >
                              View
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          )}
          {activeSection === "companies" && (
            <Card>
              <CardHeader>
                <CardTitle>Companies</CardTitle>
              </CardHeader>
              <CardContent>
                {loading && <div className="text-center py-4">Loading...</div>}
                {error && <div className="text-destructive text-center py-4">{error}</div>}
                {!loading && !error && (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Verified</TableHead>
                        <TableHead>Suspended</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {companies.map((c: any) => (
                        <TableRow key={c.id}>
                          <TableCell>{c.id}</TableCell>
                          <TableCell>{c.name}</TableCell>
                          <TableCell>{c.email}</TableCell>
                          <TableCell>{c.phone}</TableCell>
                          <TableCell>
                            <Button
                              variant={c.verified ? "default" : "secondary"}
                              size="sm"
                              disabled={actionLoading[`verify-company-${c.id}`]}
                              onClick={async () => {
                                const actionKey = `verify-company-${c.id}`;
                                setActionLoading(prev => ({ ...prev, [actionKey]: true }));
                                try {
                                  console.log(`Verifying company ${c.id}, current status: ${c.verified}, new status: ${!c.verified}`);
                                  await adminApi.verifyCompany(c.id, !c.verified);
                                  setCompanies((prev: any[]) => prev.map(x => x.id === c.id ? { ...x, verified: !c.verified } : x));
                                  toast.success(c.verified ? "Company unverified successfully" : "Company verified successfully");
                                } catch (error) {
                                  console.error("Error verifying company:", error);
                                  toast.error("Failed to update verification status");
                                } finally {
                                  setActionLoading(prev => ({ ...prev, [actionKey]: false }));
                                }
                              }}
                            >
                              {actionLoading[`verify-company-${c.id}`] ? "Updating..." : (c.verified ? "Verified" : "Verify")}
                            </Button>
                          </TableCell>
                          <TableCell>
                            <Button
                              variant={c.is_suspended ? "destructive" : "secondary"}
                              size="sm"
                              disabled={actionLoading[`suspend-company-${c.id}`]}
                              onClick={async () => {
                                const actionKey = `suspend-company-${c.id}`;
                                setActionLoading(prev => ({ ...prev, [actionKey]: true }));
                                try {
                                  console.log(`Suspending company ${c.id}, current status: ${c.is_suspended}, new status: ${!c.is_suspended}`);
                                  await adminApi.suspendCompany(c.id, !c.is_suspended);
                                  setCompanies((prev: any[]) => prev.map(x => x.id === c.id ? { ...x, is_suspended: !c.is_suspended } : x));
                                  toast.success(c.is_suspended ? "Company unsuspended successfully" : "Company suspended successfully");
                                } catch (error) {
                                  console.error("Error suspending company:", error);
                                  toast.error("Failed to update suspension status");
                                } finally {
                                  setActionLoading(prev => ({ ...prev, [actionKey]: false }));
                                }
                              }}
                            >
                              {actionLoading[`suspend-company-${c.id}`] ? "Updating..." : (c.is_suspended ? "Suspended" : "Suspend")}
                            </Button>
                          </TableCell>
                          <TableCell>
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button
                                  variant="destructive"
                                  size="sm"
                                  onClick={() => setDeleteCompanyId(c.id)}
                                >
                                  Delete
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Delete Company?</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    Are you sure you want to delete this company? This will also delete all related jobs, AI Interviewed Jobs, and their interviews. This action cannot be undone.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel onClick={() => setDeleteCompanyId(null)}>Cancel</AlertDialogCancel>
                                  <AlertDialogAction
                                    onClick={async () => {
                                      if (deleteCompanyId) {
                                        await adminApi.deleteCompany(deleteCompanyId);
                                        setCompanies((prev: any[]) => prev.filter(x => x.id !== deleteCompanyId));
                                        setDeleteCompanyId(null);
                                      }
                                    }}
                                  >
                                    Delete
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          )}
          {activeSection === "jobs" && (
            <Card>
              <CardHeader>
                <CardTitle>Jobs</CardTitle>
              </CardHeader>
              <CardContent>
                {loading && <div className="text-center py-4">Loading...</div>}
                {error && <div className="text-destructive text-center py-4">{error}</div>}
                {!loading && !error && (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Approved</TableHead>
                        <TableHead>Closed</TableHead>
                        <TableHead>Featured</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {jobs.map((j: any) => (
                        <TableRow key={j.id}>
                          <TableCell>{j.id}</TableCell>
                          <TableCell>{j.job_title}</TableCell>
                          <TableCell>{j.job_role}</TableCell>
                          <TableCell>{j.company_id}</TableCell>
                          <TableCell>{j.job_location}</TableCell>
                          <TableCell>
                            <Button
                              variant={j.is_approved ? "default" : "secondary"}
                              size="sm"
                              onClick={async () => {
                                await adminApi.approveJob(j.id, !j.is_approved);
                                setJobs((prev: any[]) => prev.map(x => x.id === j.id ? { ...x, is_approved: !j.is_approved } : x));
                              }}
                            >
                              {j.is_approved ? "Approved" : "Approve"}
                            </Button>
                          </TableCell>
                          <TableCell>
                            <Button
                              variant={j.is_closed ? "destructive" : "secondary"}
                              size="sm"
                              onClick={async () => {
                                await adminApi.closeJob(j.id, !j.is_closed);
                                setJobs((prev: any[]) => prev.map(x => x.id === j.id ? { ...x, is_closed: !j.is_closed } : x));
                              }}
                            >
                              {j.is_closed ? "Closed" : "Close"}
                            </Button>
                          </TableCell>
                          <TableCell>
                            <Button
                              variant={j.is_featured ? "default" : "secondary"}
                              size="sm"
                              onClick={async () => {
                                await adminApi.featureJob(j.id, !j.is_featured);
                                setJobs((prev: any[]) => prev.map(x => x.id === j.id ? { ...x, is_featured: !j.is_featured } : x));
                              }}
                            >
                              {j.is_featured ? "Featured" : "Feature"}
                            </Button>
                          </TableCell>
                          <TableCell>
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() => setDeleteJobId(j.id)}
                              >
                              Delete
                            </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Delete Job?</AlertDialogTitle>
                                <AlertDialogDescription>
                                  Are you sure you want to delete this job? This will also delete all related AI Interviewed Jobs and their interviews. This action cannot be undone.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel onClick={() => setDeleteJobId(null)}>Cancel</AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={async () => {
                                    if (j.id) {
                                      await adminApi.deleteJob(j.id);
                                      setJobs((prev: any[]) => prev.filter(x => x.id !== j.id));
                                      setDeleteJobId(null);
                                    }
                                  }}
                                >
                                  Delete
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                            </AlertDialog>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          )}
          {activeSection === "ai-jobs" && (
            <Card>
              <CardHeader>
                <CardTitle>AI Interviewed Jobs</CardTitle>
              </CardHeader>
              <CardContent>
                {loading && <div className="text-center py-4">Loading...</div>}
                {error && <div className="text-destructive text-center py-4">{error}</div>}
                {!loading && !error && (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead>Department</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Approved</TableHead>
                        <TableHead>Closed</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {aiJobs.map((j: any) => (
                        <TableRow key={j.id}>
                          <TableCell>{j.id}</TableCell>
                          <TableCell>{j.title}</TableCell>
                          <TableCell>{j.department}</TableCell>
                          <TableCell>{j.location}</TableCell>
                          <TableCell>
                            <Button
                              variant={j.is_approved ? "default" : "secondary"}
                              size="sm"
                              onClick={async () => {
                                await adminApi.approveAiInterviewedJob(j.id, !j.is_approved);
                                setAiJobs((prev: any[]) => prev.map(x => x.id === j.id ? { ...x, is_approved: !j.is_approved } : x));
                              }}
                            >
                              {j.is_approved ? "Approved" : "Approve"}
                            </Button>
                          </TableCell>
                          <TableCell>
                            <Button
                              variant={j.is_closed ? "destructive" : "secondary"}
                              size="sm"
                              onClick={async () => {
                                await adminApi.closeAiInterviewedJob(j.id, !j.is_closed);
                                setAiJobs((prev: any[]) => prev.map(x => x.id === j.id ? { ...x, is_closed: !j.is_closed } : x));
                              }}
                            >
                              {j.is_closed ? "Closed" : "Close"}
                            </Button>
                          </TableCell>
                          <TableCell>
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button
                                  variant="destructive"
                                  size="sm"
                                  onClick={() => setDeleteAiJobId(j.id)}
                                >
                                  Delete
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Delete AI Interviewed Job?</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    Are you sure you want to delete this AI Interviewed Job? This will also delete all related interviews. This action cannot be undone.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel onClick={() => setDeleteAiJobId(null)}>Cancel</AlertDialogCancel>
                                  <AlertDialogAction
                                    onClick={async () => {
                                      if (deleteAiJobId) {
                                        await adminApi.deleteAiInterviewedJob(deleteAiJobId);
                                        setAiJobs((prev: any[]) => prev.filter(x => x.id !== deleteAiJobId));
                                        setDeleteAiJobId(null);
                                      }
                                    }}
                                  >
                                    Delete
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          )}
          {activeSection === "interviews" && (
            <Card>
              <CardHeader>
                <CardTitle>Interviews</CardTitle>
              </CardHeader>
              <CardContent>
                {loading && <div className="text-center py-4">Loading...</div>}
                {error && <div className="text-destructive text-center py-4">{error}</div>}
                {!loading && !error && (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Job</TableHead>
                        <TableHead>Candidate</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Flagged</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {interviews.map((i: any) => (
                        <TableRow key={i.id}>
                          <TableCell>{i.id}</TableCell>
                          <TableCell>{i.ai_interviewed_job_id || i.job_id}</TableCell>
                          <TableCell>{i.firstname} {i.lastname}</TableCell>
                          <TableCell>{i.status}</TableCell>
                          <TableCell>
                            <Button
                              variant={i.is_flagged ? "destructive" : "secondary"}
                              size="sm"
                              onClick={async () => {
                                await adminApi.flagInterview(i.id, !i.is_flagged);
                                setInterviews((prev: any[]) => prev.map(x => x.id === i.id ? { ...x, is_flagged: !i.is_flagged } : x));
                              }}
                            >
                              {i.is_flagged ? "Flagged" : "Flag"}
                            </Button>
                          </TableCell>
                          <TableCell>
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={async () => {
                                await adminApi.deleteInterview(i.id);
                                setInterviews((prev: any[]) => prev.filter(x => x.id !== i.id));
                              }}
                            >
                              Delete
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          )}
          {activeSection === "questions" && (
            <Card>
              <CardHeader>
                <CardTitle>Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <AdminDSAPool />
              </CardContent>
            </Card>
          )}
          {activeSection === "admin-management" && (
            <Card>
              <CardHeader>
                <CardTitle>Admin Management</CardTitle>
              </CardHeader>
              <CardContent>
                <AdminManagement />
              </CardContent>
            </Card>
          )}
        </main>
      </div>
    </div>
  );
}