import React from 'react'
import { Link } from "react-router-dom";
import LandingLayout from "@/components/layout/RegularLayout";
import { ArrowRight } from "lucide-react";


const blogPosts = [
  {
    id: 1,
    
    title: "Key AI Recruitment Technologies Transforming Hiring",
    excerpt: "Gone are the days of manually scanning through hundreds of resumes. NLP technology now rips through thousands of applications in minutes, picking up on key qualifications you'd never spot at a glance.",
    image: "/BlogImages/1.png",
    author: "Chaitali Ghatol",
    date: "August 12, 2025"
  },
  {
    id: 2,
    
    title: "How AI Recruiters Help Find Top Talent Faster",
    excerpt: "The Hiring Challenge in Today’s Market Recruiters today face a double challenge: 1.	Too many applications – with 70–80% being irrelevant or unqualified. 2.	Increased candidate fraud – from exaggerated resumes to fake interview participants. That’s where AI-powered recruiters like EduDiagno step in — making the hiring process faster, more accurate, and more secure.",
    image: "/BlogImages/2.png",
    author: "Pranjal Yadav",
    date: "August 05, 2025"
  },
  {
    id: 3,
    
    title: "Digital AI Interviews: The Future of Recruitment Explained",
    excerpt: "Technology has transformed nearly every aspect of life—and recruitment is no exception.The traditional handshake-and-resume process has evolved into digital interviews, now a core part of modern hiring. They allow employers to assess candidates remotely, cut down on travel and scheduling hassles, and speed up decision-making.",
    image: "/BlogImages/3.png",
    author: "Payal Patil",
    date: "July 30, 2025"
  }
];

const Blog = () => {
  return (
    <LandingLayout>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-500 overflow-x-hidden">

        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center py-20 px-4 mb-10">
          <div className="absolute inset-0 w-full h-full bg-background/80 pointer-events-none" />
          <div className="relative z-10 max-w-3xl text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand to-foreground drop-shadow-lg animate-fade-in-down">
              Explore the Future of Learning
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-medium animate-fade-in-up text-muted-foreground">
              Insights, tips, and the latest trends in education and technology—curated for you.
            </p>
          </div>
          {/* Decorative shapes */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 right-10 w-72 h-72 bg-muted/30 rounded-full blur-2xl pointer-events-none" />
        </section>

        {/* Blog Cards */}
        <section className="max-w-7xl mx-auto px-4 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-20">
          {blogPosts.map((post, idx) => (
            // Each card is now a link to the full blog post page
            <Link
              to={`/blog/${post.id}`}
              key={post.id}
              className="relative group rounded-3xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105 bg-background border border-border animate-fade-in flex flex-col"
              style={{ animationDelay: `${idx * 0.15 + 0.2}s` }}
            >
              <div className="relative z-10 flex flex-col h-full">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="p-7 flex flex-col flex-grow">
                  <h2 className="text-2xl font-bold mb-2 transition-colors duration-300 group-hover:text-brand text-foreground">
                    {post.title}
                  </h2>
                  <p className="mb-5 text-base font-medium text-muted-foreground">
                    {post.excerpt}
                  </p>
                  {/* Pushes the content below it to the bottom of the card */}
                  <div className="mt-auto">
                    <div className="flex items-center justify-between text-sm mb-4">
                      <span className="text-brand font-semibold">{post.author}</span>
                      <span className="text-muted-foreground">{post.date}</span>
                    </div>
                    <div className="text-brand font-semibold flex items-center transition-transform duration-300 group-hover:translate-x-1">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Card hover overlay */}
              <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition bg-brand/10 pointer-events-none" />
            </Link>
          ))}
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
  )
}

export default Blog;
