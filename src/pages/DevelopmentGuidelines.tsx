import React from "react";
import RegularLayout from "@/components/layout/RegularLayout";

// import devGuidelines from "../../../technical-documentation/DevelopmentGuidelines.md?raw";


const DevelopmentGuidelines = () => (
  <RegularLayout>
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center py-20 px-4 mb-16">
        <div className="absolute inset-0 w-full h-full bg-background/80 pointer-events-none" />
        <div className="relative z-10 max-w-2xl text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand to-foreground drop-shadow-lg animate-fade-in-down">
            Development Guidelines
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-medium animate-fade-in-up text-muted-foreground">
            Best practices and standards for contributing to the project.
          </p>
        </div>
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 right-10 w-72 h-72 bg-muted/30 rounded-full blur-2xl pointer-events-none" />
      </section>
      {/* Content Section */}
      <section className="max-w-3xl mx-auto px-4 mb-24 animate-fade-in space-y-10">
        <div className="bg-background border border-border rounded-2xl shadow p-8">
          <h2 className="text-2xl font-bold mb-4 text-brand">Introduction</h2>
          <p>This document outlines the best practices and guidelines for contributing to the project. Adhering to these guidelines will help maintain code quality, consistency, and collaboration among team members.</p>
        </div>

        <div className="bg-background border border-border rounded-2xl shadow p-8">
          <h2 className="text-2xl font-bold mb-4 text-brand">Coding Standards</h2>
          <ul className="list-disc ml-6 space-y-2 text-base">
            <li><b>Language Conventions:</b> Follow the established conventions for the programming languages used in the project (e.g., PEP 8 for Python, Airbnb style guide for JavaScript).</li>
            <li><b>Code Structure:</b> Organize code into modules and packages logically. Each module should have a clear purpose and should be named accordingly.</li>
            <li><b>Commenting:</b> Write clear and concise comments to explain complex logic. Use docstrings for functions and classes to describe their purpose and usage.</li>
          </ul>
        </div>

        <div className="bg-background border border-border rounded-2xl shadow p-8">
          <h2 className="text-2xl font-bold mb-4 text-brand">Commit Message Conventions</h2>
          <p className="mb-2">Use the following format for commit messages:</p>
          <pre className="bg-muted rounded p-4 text-sm overflow-x-auto mb-2">[TYPE] Short description (max 50 characters)

Detailed description (optional, wrap at 72 characters)</pre>
          <p className="mb-2">Types:</p>
          <ul className="list-disc ml-6 space-y-1 text-base">
            <li><code>feat</code>: A new feature</li>
            <li><code>fix</code>: A bug fix</li>
            <li><code>docs</code>: Documentation only changes</li>
            <li><code>style</code>: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc.)</li>
            <li><code>refactor</code>: A code change that neither fixes a bug nor adds a feature</li>
            <li><code>test</code>: Adding missing or correcting existing tests</li>
            <li><code>chore</code>: Changes to the build process or auxiliary tools and libraries such as documentation generation</li>
          </ul>
        </div>

        <div className="bg-background border border-border rounded-2xl shadow p-8">
          <h2 className="text-2xl font-bold mb-4 text-brand">Branching Strategy</h2>
          <ul className="list-disc ml-6 space-y-2 text-base">
            <li><b>Main Branch:</b> The main branch should always be in a deployable state. Only merge code that has been reviewed and tested.</li>
            <li><b>Feature Branches:</b> Create a new branch for each feature or bug fix. Use descriptive names for branches, such as <code>feature/add-login</code> or <code>fix/issue-123</code>.</li>
          </ul>
        </div>

        <div className="bg-background border border-border rounded-2xl shadow p-8">
          <h2 className="text-2xl font-bold mb-4 text-brand">Pull Requests</h2>
          <ul className="list-disc ml-6 space-y-2 text-base">
            <li><b>Review Process:</b> All code changes must be submitted via pull requests. Ensure that your pull request includes a description of the changes and any relevant issue numbers.</li>
            <li><b>Code Review:</b> Participate in code reviews by providing constructive feedback. Reviewers should check for code quality, adherence to guidelines, and potential issues.</li>
          </ul>
        </div>

        <div className="bg-background border border-border rounded-2xl shadow p-8">
          <h2 className="text-2xl font-bold mb-4 text-brand">Testing</h2>
          <ul className="list-disc ml-6 space-y-2 text-base">
            <li><b>Write Tests:</b> Ensure that new features and bug fixes are accompanied by appropriate tests. Follow the project's testing framework and structure.</li>
            <li><b>Run Tests:</b> Before submitting a pull request, run all tests to ensure that your changes do not break existing functionality.</li>
          </ul>
        </div>

        <div className="bg-background border border-border rounded-2xl shadow p-8">
          <h2 className="text-2xl font-bold mb-4 text-brand">Documentation</h2>
          <ul className="list-disc ml-6 space-y-2 text-base">
            <li><b>Update Documentation:</b> Whenever you add a new feature or make significant changes, update the relevant documentation files to reflect those changes.</li>
          </ul>
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

export default DevelopmentGuidelines;
