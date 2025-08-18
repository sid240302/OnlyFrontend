import React from "react";
import RegularLayout from "@/components/layout/RegularLayout";

const Blog2 = () => (
  <RegularLayout>
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500 overflow-x-hidden">
      <section className="relative flex flex-col items-center justify-center py-20 px-4 mb-16">
        <div className="absolute inset-0 w-full h-full bg-background/80 pointer-events-none" />
        <div className="relative z-10 max-w-2xl text-center">
          <h1 className="text-2xl md:text-4xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-brand to-foreground drop-shadow-lg animate-fade-in-down text-center">
            How AI Recruiters Help Find Top Talent Faster
          </h1>
          <img src="/BlogImages/2.png" alt="Blog 2" className="mx-auto mb-8 rounded-2xl shadow-lg w-full max-w-md" />
        </div>
      </section>

      <section className="max-w-3xl mx-auto mb-20 px-4 text-lg leading-relaxed prose prose-invert">
        <h2 className="mb-4 text-3xl font-bold text-brand">The Hiring Challenge in Today’s Market</h2>
        <p className="mb-6">Recruiters today face a double challenge:</p>
        <ol className="mb-6">
          <li className="flex items-start mb-2"><span className="mr-2 flex-shrink-0"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#6366F1"/><path d="M6 10l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Too many applications – with 70–80% being irrelevant or unqualified.</li>
          <li className="flex items-start mb-2"><span className="mr-2 flex-shrink-0"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#6366F1"/><path d="M6 10l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Increased candidate fraud – from exaggerated resumes to fake interview participants.</li>
        </ol>
        <p className="mb-6">That’s where AI-powered recruiters like EduDiagno step in — making the hiring process faster, more accurate, and more secure.</p>
        <h2 className="mb-4 text-3xl font-bold text-brand">How AI Recruiters Find Top Talent Faster</h2>
        <ul className="mb-6">
          <li className="flex items-start mb-2"><span className="mr-2 flex-shrink-0"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#6366F1"/><path d="M6 10l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Automated Screening – AI filters candidates based on skills, not just keywords.</li>
          <li className="flex items-start mb-2"><span className="mr-2 flex-shrink-0"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#6366F1"/><path d="M6 10l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Smart Assessments – DSA coding, aptitude, and technical MCQs test real capabilities.</li>
          <li className="flex items-start mb-2"><span className="mr-2 flex-shrink-0"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#6366F1"/><path d="M6 10l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Instant Feedback Reports – Recruiters know exactly who’s qualified without multiple rounds.</li>
          <li className="flex items-start mb-2"><span className="mr-2 flex-shrink-0"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#6366F1"/><path d="M6 10l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Bias Reduction – AI focuses on skills and performance, not personal background or appearance.</li>
        </ul>
        <p className="mb-6 font-semibold">EduDiagno’s AI can evaluate hundreds of candidates in minutes — helping recruiters focus only on the top 5–10%.</p>
        <h2 className="mb-4 text-3xl font-bold text-brand">Can an AI Recruiter Replace a Human Recruiter?</h2>
        <p className="mb-6">The Short Answer: Not entirely — at least not yet.</p>
        <p className="mb-6">AI is excellent at filtering and shortlisting, but the human touch is still valuable in:</p>
        <ul className="mb-6">
          <li className="flex items-start mb-2"><span className="mr-2 flex-shrink-0"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#6366F1"/><path d="M6 10l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Building candidate relationships</li>
          <li className="flex items-start mb-2"><span className="mr-2 flex-shrink-0"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#6366F1"/><path d="M6 10l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Understanding nuanced career goals</li>
          <li className="flex items-start mb-2"><span className="mr-2 flex-shrink-0"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#6366F1"/><path d="M6 10l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Negotiating offers and onboarding</li>
        </ul>
        <h2 className="mb-4 text-3xl font-bold text-brand">Pros of AI Recruiters</h2>
        <ul className="mb-6">
          <li className="flex items-start mb-2"><span className="mr-2 flex-shrink-0"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#6366F1"/><path d="M6 10l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Speed – Screen hundreds of candidates in minutes</li>
          <li className="flex items-start mb-2"><span className="mr-2 flex-shrink-0"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#6366F1"/><path d="M6 10l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Accuracy – Data-backed skill evaluation</li>
          <li className="flex items-start mb-2"><span className="mr-2 flex-shrink-0"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#6366F1"/><path d="M6 10l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Scalability – Handle bulk hiring easily</li>
          <li className="flex items-start mb-2"><span className="mr-2 flex-shrink-0"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#6366F1"/><path d="M6 10l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Cost-Efficiency – Reduce manual HR hours</li>
        </ul>
        <h2 className="mb-4 text-3xl font-bold text-brand">Cons of AI Recruiters</h2>
        <ul className="mb-6">
          <li className="flex items-start mb-2"><span className="mr-2 flex-shrink-0"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#6366F1"/><path d="M6 10l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Lack of Emotional Understanding – Can’t replace human empathy</li>
          <li className="flex items-start mb-2"><span className="mr-2 flex-shrink-0"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#6366F1"/><path d="M6 10l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Limited to Given Data – Performance is only as good as the dataset</li>
          <li className="flex items-start mb-2"><span className="mr-2 flex-shrink-0"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#6366F1"/><path d="M6 10l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Potential for Algorithmic Bias – If not trained properly</li>
        </ul>
        <h2 className="mb-4 text-3xl font-bold text-brand">How AI Interviewers Detect Fake Candidates</h2>
        <ol className="mb-6">
          <li className="flex items-start mb-2"><span className="mr-2 flex-shrink-0"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#6366F1"/><path d="M6 10l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Facial Recognition & Liveness Detection – Ensures the same person appears throughout the interview.</li>
          <li className="flex items-start mb-2"><span className="mr-2 flex-shrink-0"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#6366F1"/><path d="M6 10l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Voice Analysis – Detects voice mismatches or hidden prompts.</li>
          <li className="flex items-start mb-2"><span className="mr-2 flex-shrink-0"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#6366F1"/><path d="M6 10l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Behavioral Tracking – AI flags unusual response delays or external assistance.</li>
          <li className="flex items-start mb-2"><span className="mr-2 flex-shrink-0"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#6366F1"/><path d="M6 10l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Plagiarism Checks – Detects copied answers in coding and technical questions.</li>
        </ol>
        <h2 className="mb-4 text-3xl font-bold text-brand">Why EduDiagno Stands Out</h2>
        <ul className="mb-6">
          <li className="flex items-start mb-2"><span className="mr-2 flex-shrink-0"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#6366F1"/><path d="M6 10l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Candidates take DSA coding, aptitude tests, and mock AI interviews in one go.</li>
          <li className="flex items-start mb-2"><span className="mr-2 flex-shrink-0"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#6366F1"/><path d="M6 10l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>An AI-generated report gives recruiters a crystal-clear hiring decision.</li>
          <li className="flex items-start mb-2"><span className="mr-2 flex-shrink-0"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#6366F1"/><path d="M6 10l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Top performers are fast-tracked to internships and job offers.</li>
        </ul>
        <h2 className="mb-4 text-3xl font-bold text-brand">Final Word</h2>
        <p className="mb-6">AI recruiters are not here to replace humans entirely, but they supercharge the hiring process — making it faster, smarter, and fraud-proof. With platforms like EduDiagno, companies save time, reduce risk, and get access to only the most authentic, skilled talent.</p>
        <p className="mb-6">If you’re a recruiter or candidate, you’re just one test away from your next big opportunity. Visit us : <a href="https://www.edudiagno.com" target="_blank" rel="noopener noreferrer">www.edudiagno.com</a></p>
      </section>
      <div className="max-w-2xl mx-auto mt-16">
        <h2 className="text-2xl font-bold mb-4 text-brand">Related Blogs</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <a href="/blog/1" className="block bg-muted/30 rounded-xl shadow-md p-6 hover:bg-brand/10 transition-colors">
            <h3 className="font-semibold text-lg mb-2 text-brand">Natural Language Processing for Resume Analysis</h3>
            <p className="text-muted-foreground text-sm">Discover how NLP and ML are revolutionizing resume analysis and candidate matching.</p>
          </a>
          <a href="/blog/3" className="block bg-muted/30 rounded-xl shadow-md p-6 hover:bg-brand/10 transition-colors">
            <h3 className="font-semibold text-lg mb-2 text-brand">Digital AI Interviews: The Future of Recruitment Explained</h3>
            <p className="text-muted-foreground text-sm">Learn about digital interviews and how AI is transforming the recruitment process for employers and candidates.</p>
          </a>
        </div>
      </div>
    </div>
  </RegularLayout>
);

export default Blog2;
