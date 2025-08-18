import React from "react";
import RegularLayout from "@/components/layout/RegularLayout";


const APIDocumentation = () => (
  <RegularLayout>
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center py-20 px-4 mb-16">
        <div className="absolute inset-0 w-full h-full bg-background/80 pointer-events-none" />
        <div className="relative z-10 max-w-2xl text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand to-foreground drop-shadow-lg animate-fade-in-down">
            API Documentation
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-medium animate-fade-in-up text-muted-foreground">
            Explore our API endpoints, authentication, and integration guides.
          </p>
        </div>
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 right-10 w-72 h-72 bg-muted/30 rounded-full blur-2xl pointer-events-none" />
      </section>
      {/* Content Section */}
      <section className="max-w-3xl mx-auto px-4 mb-24 animate-fade-in space-y-10">
        <div className="bg-background border border-border rounded-2xl shadow p-8">
          <h2 className="text-2xl font-bold mb-4 text-brand">Overview</h2>
          <p>This document provides detailed information about the API endpoints available in the project. It includes the request and response formats, authentication methods, and usage examples for each endpoint.</p>
        </div>
        <div className="bg-background border border-border rounded-2xl shadow p-8">
          <h2 className="text-2xl font-bold mb-4 text-brand">Base URL</h2>
          <pre className="bg-muted rounded p-4 text-sm overflow-x-auto mb-2">http://localhost:8000/api/v1</pre>
        </div>
        <div className="bg-background border border-border rounded-2xl shadow p-8">
          <h2 className="text-2xl font-bold mb-4 text-brand">Authentication</h2>
          <p>All API requests require authentication. Use the following method to authenticate:</p>
          <ul className="list-disc ml-6 space-y-2 text-base">
            <li><b>Bearer Token:</b> Include the token in the Authorization header of your requests.</li>
          </ul>
          <pre className="bg-muted rounded p-4 text-sm overflow-x-auto mb-2">Authorization: Bearer &lt;your_token&gt;</pre>
        </div>
        <div className="bg-background border border-border rounded-2xl shadow p-8">
          <h2 className="text-2xl font-bold mb-4 text-brand">Endpoints</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-foreground">1. Generate Interview Questions</h3>
            <ul className="list-disc ml-6 mb-2 text-base">
              <li><b>Endpoint:</b> <code>/generate-interview-questions</code></li>
              <li><b>Method:</b> <code>POST</code></li>
              <li><b>Description:</b> Generates interview questions based on the job description and candidate's resume.</li>
            </ul>
            <div className="mb-2"><b>Request Example:</b></div>
            <pre className="bg-muted rounded p-4 text-xs overflow-x-auto mb-2">{`{
  "interview_id": "string",
  "job": {
    "title": "string",
    "description": "string"
  },
  "resume_text": "string"
}`}</pre>
            <div className="mb-2"><b>Response Example:</b></div>
            <pre className="bg-muted rounded p-4 text-xs overflow-x-auto mb-2">{`{
  "questions": [
    {
      "question": "string",
      "type": "string"
    }
  ]
}`}</pre>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-foreground">2. Get Candidate Details</h3>
            <ul className="list-disc ml-6 mb-2 text-base">
              <li><b>Endpoint:</b> <code>/candidates/&#123;id&#125;</code></li>
              <li><b>Method:</b> <code>GET</code></li>
              <li><b>Description:</b> Retrieves details of a specific candidate by ID.</li>
            </ul>
            <div className="mb-2"><b>Response Example:</b></div>
            <pre className="bg-muted rounded p-4 text-xs overflow-x-auto mb-2">{`{
  "id": "string",
  "name": "string",
  "email": "string",
  "resume": "string"
}`}</pre>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-foreground">3. Submit Interview Feedback</h3>
            <ul className="list-disc ml-6 mb-2 text-base">
              <li><b>Endpoint:</b> <code>/interviews/&#123;id&#125;/feedback</code></li>
              <li><b>Method:</b> <code>POST</code></li>
              <li><b>Description:</b> Submits feedback for a specific interview.</li>
            </ul>
            <div className="mb-2"><b>Request Example:</b></div>
            <pre className="bg-muted rounded p-4 text-xs overflow-x-auto mb-2">{`{
  "feedback": "string",
  "rating": 1
}`}</pre>
            <div className="mb-2"><b>Response Example:</b></div>
            <pre className="bg-muted rounded p-4 text-xs overflow-x-auto mb-2">{`{
  "message": "Feedback submitted successfully."
}`}</pre>
          </div>
        </div>
        <div className="bg-background border border-border rounded-2xl shadow p-8">
          <h2 className="text-2xl font-bold mb-4 text-brand">Error Handling</h2>
          <p>In case of an error, the API will return a response with the following structure:</p>
          <pre className="bg-muted rounded p-4 text-xs overflow-x-auto mb-2">{`{
  "error": {
    "code": "string",
    "message": "string"
  }
}`}</pre>
        </div>
        <div className="bg-background border border-border rounded-2xl shadow p-8">
          <h2 className="text-2xl font-bold mb-4 text-brand">Conclusion</h2>
          <p>This API documentation serves as a guide for developers to integrate and utilize the API effectively. For further assistance, please refer to the other documentation files or contact the support team.</p>
        </div>
      </section>
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
  </RegularLayout>
);

export default APIDocumentation;
