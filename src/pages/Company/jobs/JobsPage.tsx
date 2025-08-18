import React, { useEffect, useState, useRef, useContext } from "react";
import { Plus, Trash } from "lucide-react";
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
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { companyApi } from "@/services/companyApi";
import CompanyLayout from "@/components/layout/CompanyLayout";
import { AppContext } from "@/context/AppContext";
import { Link } from "react-router-dom";
import { Job } from "@/types/job";
import EditJobModal from "@/components/company/jobs/EditJobModal";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";

const JobsPage: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState<string | undefined>(undefined);
  const pageSize = 10; // Adjust as needed
  const appContext = useContext(AppContext);

  useEffect(() => {
    fetchJobs(searchTerm, currentPage);
    // eslint-disable-next-line
  }, [currentPage, searchTerm]);

  const fetchJobs = async (search?: string, page: number = 1) => {
    setLoading(true);
    try {
      // Use limit/offset for pagination if supported by your API
      const params: any = {
        search,
        company_id: appContext?.company?.id,
        limit: pageSize,
        offset: (page - 1) * pageSize,
      };
      const res = await companyApi.listJobs(params);
      // AxiosResponse: data is the payload
      const data = res.data || [];
      // If API returns count for total items
      const count = res.data?.count ?? data.length;
      const jobsList = res.data?.results ?? data;
      setJobs(jobsList);
      setTotalPages(Math.max(1, Math.ceil(count / pageSize)));
    } catch {
      setJobs([]);
      setTotalPages(1);
    } finally {
      setLoading(false);
    }
  };

  const createJob = async (form: Job) => {
    setLoading(true);
    try {
      await companyApi.createJob({ ...form, company_id: appContext?.company?.id });
      fetchJobs(searchTerm, currentPage);
      setShowForm(false);
    } catch (e) {
      // handle error
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <CompanyLayout>
      <EditJobModal 
        open={showForm} 
        onClose={() => setShowForm(false)} 
        onSave={createJob}        
      />
      <div className="bg-background min-h-screen">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Jobs</h1>
          <Button onClick={() => setShowForm(true)}>
            <Plus className="mr-2" />
            Add Job
          </Button>
        </div>
        <Card className="mt-4">
          <CardHeader>
            <CardTitle>Job Listings</CardTitle>
          </CardHeader>
          <CardContent>
            <Input
              placeholder="Search jobs..."
              onChange={handleSearch}
              value={searchTerm || ''}
            />
            <Table className="mt-4">
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>City</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Experience</TableHead>
                  <TableHead>Salary (₹/mo)</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
            <TableBody>
              {jobs.map((job) => (
                <TableRow key={job.id}>
                  <TableCell>
                    <Link to={`/company/job/${job.id}`} className="text-blue-500 hover:underline">
                      {job.job_title}
                    </Link>
                  </TableCell>
                  <TableCell>{job.job_role}</TableCell>
                  <TableCell>{job.job_location}</TableCell>
                  <TableCell>{job.work_mode}</TableCell>
                  <TableCell>{job.min_work_experience} - {job.max_work_experience} yrs</TableCell>
                  <TableCell>{job.min_salary_per_month} - {job.max_salary_per_month}</TableCell>
                  <TableCell>
                    <Button
                      variant={"ghost"}
                      className="text-destructive"
                      onClick={() => {
                        // TODO: implement delete
                      }}
                    >
                      <Trash />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <div className="flex justify-center mt-4">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>
            {currentPage > 2 && (
              <PaginationItem>
                <PaginationLink onClick={() => setCurrentPage(1)}>
                  1
                </PaginationLink>
              </PaginationItem>
            )}
            {currentPage > 3 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            {Array.from({ length: 3 }, (_, i) => currentPage - 1 + i)
              .filter((page) => page > 0 && page <= totalPages)
              .map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    onClick={() => setCurrentPage(page)}
                    isActive={page === currentPage}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
            {currentPage < totalPages - 2 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            {currentPage < totalPages - 1 && (
              <PaginationItem>
                <PaginationLink onClick={() => setCurrentPage(totalPages)}>
                  {totalPages}
                </PaginationLink>
              </PaginationItem>
            )}
            <PaginationItem>
              <PaginationNext
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  </CompanyLayout>
  );
};

export default JobsPage;
