import React from "react";
import RegularLayout from "@/components/layout/RegularLayout";




const GettingStarted = () => (
  <RegularLayout>
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center py-20 px-4 mb-16">
        <div className="absolute inset-0 w-full h-full bg-background/80 pointer-events-none" />
        <div className="relative z-10 max-w-2xl text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand to-foreground drop-shadow-lg animate-fade-in-down">
            Getting Started
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-medium animate-fade-in-up text-muted-foreground">
            Learn how to set up, configure, and use the platform efficiently.
          </p>
        </div>
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 right-10 w-72 h-72 bg-muted/30 rounded-full blur-2xl pointer-events-none" />
      </section>
      {/* Content Section */}
      <section className="max-w-3xl mx-auto px-4 mb-24 animate-fade-in space-y-10">
        <div className="bg-background border border-border rounded-2xl shadow p-8">
          <h2 className="text-2xl font-bold mb-4 text-brand">Prerequisites</h2>
          <ul className="list-disc ml-6 space-y-2 text-base">
            <li>A compatible operating system (Windows, macOS, or Linux).</li>
            <li>Python 3.8 or higher installed on your machine.</li>
            <li>Node.js and npm installed for frontend development.</li>
            <li>Access to a terminal or command prompt.</li>
          </ul>
        </div>
        <div className="bg-background border border-border rounded-2xl shadow p-8">
          <h2 className="text-2xl font-bold mb-4 text-brand">Installation Steps</h2>
          <ol className="list-decimal ml-6 space-y-4 text-base">
            <li>
              <b>Clone the Repository</b>
              <pre className="bg-muted rounded p-4 text-sm overflow-x-auto mb-2">git clone &lt;repository-url&gt;</pre>
            </li>
            <li>
              <b>Set Up the Backend</b>
              <pre className="bg-muted rounded p-4 text-sm overflow-x-auto mb-2">cd backend</pre>
            </li>
            <li>
              <b>Set Up the Frontend</b>
              <pre className="bg-muted rounded p-4 text-sm overflow-x-auto mb-2">cd ../frontend</pre>
            </li>
            <li>
              <b>Configure Environment Variables</b>
              <pre className="bg-muted rounded p-4 text-sm overflow-x-auto mb-2">cp .env.example .env</pre>
            </li>
            <li>
              <b>Run Database Migrations</b>
              <pre className="bg-muted rounded p-4 text-sm overflow-x-auto mb-2">cd ../backend</pre>
            </li>
            <li>
              <b>Start the Development Servers</b>
              <pre className="bg-muted rounded p-4 text-sm overflow-x-auto mb-2">uvicorn app.main:app --reload</pre>
              <pre className="bg-muted rounded p-4 text-sm overflow-x-auto mb-2">npm run dev</pre>
            </li>
            <li>
              <b>Access the Application</b>
              <pre className="bg-muted rounded p-4 text-sm overflow-x-auto mb-2">http://localhost:8080  # Frontend</pre>
              <pre className="bg-muted rounded p-4 text-sm overflow-x-auto mb-2">http://localhost:8000/docs  # Backend API Docs</pre>
            </li>
          </ol>
        </div>
        <div className="bg-background border border-border rounded-2xl shadow p-8">
          <h2 className="text-2xl font-bold mb-4 text-brand">Initial Configuration</h2>
          <p>After installation, you may need to adjust some configuration settings in the <code>.env</code> file to match your local environment. Ensure that database connection strings and API keys are correctly set.</p>
        </div>
        <div className="bg-background border border-border rounded-2xl shadow p-8">
          <h2 className="text-2xl font-bold mb-4 text-brand">Additional Resources</h2>
          <ul className="list-disc ml-6 space-y-2 text-base">
            <li><a href="/project-overview" className="text-brand underline">Project Overview</a></li>
            <li><a href="/system-architecture" className="text-brand underline">System Architecture</a></li>
            <li><a href="/technical-stack" className="text-brand underline">Technical Stack</a></li>
          </ul>
        </div>
      </section>
    </div>
  </RegularLayout>
);

export default GettingStarted;
