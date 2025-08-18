
import React from "react";
import RegularLayout from "@/components/layout/RegularLayout";

const Documentation = () => (
  <RegularLayout>
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center py-20 px-4 mb-16">
        <div className="absolute inset-0 w-full h-full bg-background/80 pointer-events-none" />
        <div className="relative z-10 max-w-2xl text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand to-foreground drop-shadow-lg animate-fade-in-down">
            Documentation
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-medium animate-fade-in-up text-muted-foreground">
            Find guides, API references, and resources to help you get the most out of AI Interviewer.
          </p>
        </div>
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 right-10 w-72 h-72 bg-muted/30 rounded-full blur-2xl pointer-events-none" />
      </section>

      {/* Quick Links Section */}
      <section className="max-w-4xl mx-auto mb-20 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-brand">Quick Links</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a href="/api-documentation" className="bg-background border border-border rounded-xl shadow-md px-8 py-6 text-lg font-medium hover:bg-brand/10 transition-colors duration-200">API Documentation</a>
          <a href="/getting-started" className="bg-background border border-border rounded-xl shadow-md px-8 py-6 text-lg font-medium hover:bg-brand/10 transition-colors duration-200">Getting Started</a>
          <a href="/development-guidelines" className="bg-background border border-border rounded-xl shadow-md px-8 py-6 text-lg font-medium hover:bg-brand/10 transition-colors duration-200">Development Guidelines</a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto mb-24 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-brand">Frequently Asked Questions</h2>
        <div className="space-y-8">
          <div className="bg-background border border-border rounded-2xl shadow p-6">
            <h3 className="text-xl font-semibold mb-2 text-foreground">How do I integrate the AI Interviewer API?</h3>
            <p className="text-muted-foreground">Refer to the <a href="/api-documentation" className="text-brand underline">API Documentation</a> for integration steps, authentication, and usage examples.</p>
          </div>
          <div className="bg-background border border-border rounded-2xl shadow p-6">
            <h3 className="text-xl font-semibold mb-2 text-foreground">Where can I find setup instructions?</h3>
            <p className="text-muted-foreground">Visit the <a href="/getting-started" className="text-brand underline">Getting Started</a> guide for environment setup, installation, and first steps.</p>
          </div>
          <div className="bg-background border border-border rounded-2xl shadow p-6">
            <h3 className="text-xl font-semibold mb-2 text-foreground">Who do I contact for support?</h3>
            <p className="text-muted-foreground">If you need help, please use the <a href="/contact" className="text-brand underline">Help Center</a> or email our support team.</p>
          </div>
        </div>
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
  </RegularLayout>
);

export default Documentation;
