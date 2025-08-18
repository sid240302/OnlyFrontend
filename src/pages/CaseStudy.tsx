import React from 'react';
import LandingLayout from "@/components/layout/RegularLayout";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const placementData = {
  labels: ['Before EduDiagno', 'After EduDiagno'],
  datasets: [
    {
      label: 'Placement Accuracy (%)',
      data: [65, 91],
      backgroundColor: ['#e0e7ff', '#6366f1'],
    },
  ],
};

const timeData = {
  labels: ['Before', 'After'],
  datasets: [
    {
      label: 'Avg. Shortlisting Time (mins)',
      data: [120, 48],
      backgroundColor: ['#fca5a5', '#22d3ee'],
    },
  ],
};

const CaseStudy = () => (
  <LandingLayout>
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center py-20 px-4 mb-16">
        <div className="absolute inset-0 w-full h-full bg-background/80 pointer-events-none" />
        <div className="relative z-10 max-w-2xl text-center">
          <img src="/BlogImages/CS1.png" alt="EduDiagno AI" className="mx-auto mb-8 rounded-2xl shadow-lg w-full max-w-md" />
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand to-foreground drop-shadow-lg animate-fade-in-down">
            Case Study: How EduDiagno’s AI Interviews Are Transforming Recruitment
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-medium animate-fade-in-up text-muted-foreground">
            EduDiagno bridges the gap between recruiters and job-ready candidates using AI-based assessments, skill profiling, and the innovative EduDiagno Score.
          </p>
        </div>
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 right-10 w-72 h-72 bg-muted/30 rounded-full blur-2xl pointer-events-none" />
      </section>

      {/* Problem Section */}
      <section className="max-w-4xl mx-auto mb-20 px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-2 text-brand">Recruiter Challenges</h2>
          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-3">
              <svg className="w-7 h-7 text-brand" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              <span className="text-muted-foreground text-lg">Time-Consuming Screening</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-7 h-7 text-brand" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              <span className="text-muted-foreground text-lg">Geographical Limitations</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-7 h-7 text-brand" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              <span className="text-muted-foreground text-lg">Skill Mismatch</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-2 text-brand">Student Challenges</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <svg className="w-7 h-7 text-brand flex-shrink-0" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              <span className="text-muted-foreground text-lg">Lack of Visibility</span>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-7 h-7 text-brand flex-shrink-0" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              <span className="text-muted-foreground text-lg">Unclear Skill Benchmarking</span>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-7 h-7 text-brand flex-shrink-0" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              <span className="text-muted-foreground text-lg">Unstructured Preparation</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <img src="/BlogImages/Student_Recuriter_Challenges.png" alt="Recruitment" className="w-64 h-64 object-contain rounded-2xl bg-muted shadow-xl animate-fade-in" />
        </div>
      </section>

      {/* Solution Section */}
      <section className="max-w-4xl mx-auto mb-20 px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-2 text-brand">EduDiagno Solution</h2>
          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
            <svg className="w-7 h-7 text-brand flex-shrink-0" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              <span className="text-muted-foreground text-lg">AI Interview Agent & Talent Profiler</span>
            </div>
            <div className="flex items-start gap-3">
            <svg className="w-7 h-7 text-brand flex-shrink-0" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              <span className="text-muted-foreground text-lg">Comprehensive DSA, Aptitude, and Technical MCQ Testing</span>
            </div>
            <div className="flex items-start gap-3">
            <svg className="w-7 h-7 text-brand flex-shrink-0" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              <span className="text-muted-foreground text-lg">EduDiagno Score for Transparent Skill Benchmarking</span>
            </div>
            <div className="flex items-start gap-3">
            <svg className="w-7 h-7 text-brand flex-shrink-0" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              <span className="text-muted-foreground text-lg">Global Access for Recruiters</span>
            </div>
            <div className="flex items-start gap-3">
            <svg className="w-7 h-7 text-brand flex-shrink-0" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              <span className="text-muted-foreground text-lg">Efficient Shortlisting & Verified Skills</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <img src="/BlogImages/3.png" alt="AI Solution" className="w-64 h-64 object-contain rounded-2xl bg-muted shadow-xl animate-fade-in" />
        </div>
      </section>

      {/* Results Section with Charts */}
      <section className="max-w-4xl mx-auto mb-20 px-4">
        <h2 className="text-3xl font-bold mb-8 text-brand text-center">Key Results</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Bar data={placementData} options={{ plugins: { legend: { display: false } }, responsive: true }} />
            <p className="mt-6 text-lg text-muted-foreground text-center">Placement accuracy increased from 65% to 91% after implementing EduDiagno AI.</p>
          </div>
          <div>
            <Bar data={timeData} options={{ plugins: { legend: { display: false } }, responsive: true }} />
            <p className="mt-6 text-lg text-muted-foreground text-center">Shortlisting time reduced by 60%, saving recruiters significant hours.</p>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-muted/60 rounded-xl px-6 py-6 shadow animate-fade-in-up">
            <span className="text-3xl font-extrabold text-brand mb-1">60%</span>
            <span className="text-muted-foreground text-base">Faster Shortlisting</span>
          </div>
          <div className="bg-muted/60 rounded-xl px-6 py-6 shadow animate-fade-in-up">
            <span className="text-3xl font-extrabold text-brand mb-1">91%</span>
            <span className="text-muted-foreground text-base">Placement Accuracy</span>
          </div>
          <div className="bg-muted/60 rounded-xl px-6 py-6 shadow animate-fade-in-up">
            <span className="text-3xl font-extrabold text-brand mb-1">Global</span>
            <span className="text-muted-foreground text-base">Reach</span>
          </div>
          <div className="bg-muted/60 rounded-xl px-6 py-6 shadow animate-fade-in-up">
            <span className="text-3xl font-extrabold text-brand mb-1">Career Boost</span>
            <span className="text-muted-foreground text-base">for Students</span>
          </div>
        </div>
      </section>

      {/* Why It Works Section */}
      <section className="max-w-3xl mx-auto mb-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-brand">Why It Works</h2>
        <div className="space-y-4 mb-8 text-left mx-auto max-w-xl">
          <div className="flex items-start gap-3">
            <svg className="w-7 h-7 text-brand flex-shrink-0" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            <span className="text-muted-foreground text-lg">Removes bias from candidate evaluation</span>
          </div>
          <div className="flex items-start gap-3">
            <svg className="w-7 h-7 text-brand flex-shrink-0" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            <span className="text-muted-foreground text-lg">Focuses interviews on high-potential candidates</span>
          </div>
          <div className="flex items-start gap-3">
            <svg className="w-7 h-7 text-brand flex-shrink-0" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            <span className="text-muted-foreground text-lg">Builds a transparent talent ecosystem where skills speak louder than resumes</span>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="max-w-3xl mx-auto mb-24 px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-brand">Conclusion</h2>
        <p className="text-xl text-muted-foreground mb-8">
          EduDiagno is reshaping the recruitment landscape by making hiring faster, smarter, and more authentic. By serving both recruiters and job seekers, it creates a win-win hiring process where top talent meets top opportunities—verified, ranked, and ready.
        </p>
      </section>

      {/* Animations */}
      <style>
        {`
          .animate-fade-in {
            animation: fadeIn 1s cubic-bezier(.4,0,.2,1) both;
          }
          .animate-fade-in-down {
            animation: fadeInDown 1s cubic-bezier(.4,0,.2,1) both;
          }
          .animate-fade-in-up {
            animation: fadeInUp 1s cubic-bezier(.4,0,.2,1) both;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px);}
            to { opacity: 1; transform: translateY(0);}
          }
          @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-40px);}
            to { opacity: 1; transform: translateY(0);}
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(40px);}
            to { opacity: 1; transform: translateY(0);}
          }
        `}
      </style>
    </div>
  </LandingLayout>
);

export default CaseStudy;
