import React from 'react';
import LandingLayout from "@/components/layout/RegularLayout";
import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import { ArrowRightIcon, LightBulbIcon } from '@heroicons/react/24/solid';

// const team = [
//   {
//     name: 'Shreya Ahhs',
//     role: 'Founder & Lead Developer',
//     image: '/public/models/executive-avatar.png',
//     bio: 'Passionate about AI, education, and building impactful products.'
//   },
//   {
//     name: 'Jane Doe',
//     role: 'AI Researcher',
//     image: '/public/models/AIAvatar.svg',
//     bio: 'Loves solving real-world problems with machine learning.'
//   },
//   {
//     name: 'John Smith',
//     role: 'Frontend Engineer',
//     image: '/public/models/placeholder.svg',
//     bio: 'Designs beautiful, accessible, and performant user interfaces.'
//   }
// ];

const About = () => (
    <LandingLayout>
  <div className="min-h-screen bg-background text-foreground transition-colors duration-500 overflow-x-hidden">
    {/* Hero Section */}
    <section className="relative flex flex-col items-center justify-center py-20 px-4 mb-16">
      <div className="absolute inset-0 w-full h-full bg-background/80 pointer-events-none" />
      <div className="relative z-10 max-w-2xl text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand to-foreground drop-shadow-lg animate-fade-in-down">
          About EduDiagno
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-medium animate-fade-in-up text-muted-foreground">
          At EduDiagno, we believe that preparing for your dream job should be smart, efficient, and results-driven — not endless trial and error. That’s why we’ve built an AI-powered skill diagnosis and hiring platform that helps students, job seekers, and fresh graduates understand exactly where they stand and how to improve.
        </p>
<p className="text-xl md:text-2xl mb-8 font-medium animate-fade-in-up text-muted-foreground">
          Whether you’re aiming for an internship, your first job, or a competitive placement, EduDiagno gives you a clear, data-backed roadmap to success.
        </p>
        </div>
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 right-10 w-72 h-72 bg-muted/30 rounded-full blur-2xl pointer-events-none" />
    </section>

    {/* Mission Section */}
    <section className="max-w-4xl mx-auto mb-20 px-4 text-center">
      <h2 className="text-3xl font-bold mb-4 text-brand">Our Mission</h2>
      <p className="text-lg text-muted-foreground mb-2">
        To transform the way candidates prepare for placements and interviews by replacing guesswork with AI-driven insights — making job readiness faster, easier, and more accessible for everyone.
      </p>
    </section>
   {/* What We Do */}
<section className="max-w-4xl mx-auto mb-20 px-4 text-center">
  <h2 className="text-3xl font-bold mb-4 text-brand">What We Do</h2>
  <p className="text-lg text-muted-foreground mb-6">
    We bring together the <span className="font-semibold">three pillars of job readiness</span> in one smart platform:
  </p>
  <ul className="list-disc list-inside text-lg text-muted-foreground text-center max-w-2xl mx-auto space-y-2">
    <li>
      <strong> DSA Coding Challenges</strong> – Test your problem-solving skills like in real interviews.
    </li>
    <li>
      <strong> Aptitude & Technical MCQs</strong> – Assess your core knowledge across key subjects.
    </li>
    <li>
      <strong> AI-Powered Interviews</strong> – Experience realistic interview simulations with instant feedback.
    </li>
  </ul>
  <p className="text-lg text-muted-foreground mt-6">
    After your test, our AI generates a detailed performance report with personalized recommendations so you know exactly what to work on, and how to get there.
  </p>
</section>
    {/* Our Vision */}
    <section className="max-w-4xl mx-auto mb-20 px-4 text-center">
      <h2 className="text-3xl font-bold mb-4 text-brand">Our Vision</h2>
      <p className="text-lg text-muted-foreground mb-2">
        A future where every deserving candidate finds the right opportunity, and every recruiter gets access to the best-prepared talent powered by data, AI, and skill transparency.
      </p>
    </section>


{/* Why Choose EduDiagno? */}
<section className="max-w-4xl mx-auto mb-20 px-4">
  <h2 className="text-3xl font-bold mb-8 text-brand text-center">Why Choose EduDiagno?</h2>
  <ul className="list-none max-w-2xl mx-auto space-y-5 text-lg text-left">
    
    <li className="flex items-start">
      <CheckBadgeIcon className="h-7 w-7 flex-shrink-0 text-blue-500 mr-3" />
      <span className="text-muted-foreground">
        <strong className="font-semibold text-foreground">All-in-One Preparation</strong> – No need to juggle multiple platforms for coding, aptitude, and interview practice.
      </span>
    </li>
    
    <li className="flex items-start">
      <CheckBadgeIcon className="h-7 w-7 flex-shrink-0 text-blue-500 mr-3" />
      <span className="text-muted-foreground">
        <strong className="font-semibold text-foreground">Personalized Feedback</strong> – Get actionable insights instead of generic scores.
      </span>
    </li>
    
    <li className="flex items-start">
      <CheckBadgeIcon className="h-7 w-7 flex-shrink-0 text-blue-500 mr-3" />
      <span className="text-muted-foreground">
        <strong className="font-semibold text-foreground">Affordable Access</strong> – Quality preparation at a fraction of the cost.
      </span>
    </li>
    
    <li className="flex items-start">
      <CheckBadgeIcon className="h-7 w-7 flex-shrink-0 text-blue-500 mr-3" />
      <span className="text-muted-foreground">
        <strong className="font-semibold text-foreground">Guaranteed Internships for Top Performers</strong> – Stand out and get hired.
      </span>
    </li>
    
  </ul>
</section>

{/* Final CTA Section */}

<section className="py-20 px-4">
<div className="relative max-w-4xl mx-auto bg-slate-900/80 border border-slate-700 rounded-2xl p-10 md:p-16 text-center shadow-2xl overflow-hidden">
{/* Inner Glow */}
<div className="absolute top-1/2 left-1/2 w-96 h-96 bg-brand/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

<div className="relative z-10">
  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white flex items-center justify-center gap-2">
    <LightBulbIcon className="h-8 w-8 text-yellow-400" />
    Your Career. Your Skills. Your Roadmap.
  </h2>
  <p className="text-lg md:text-xl mb-8 text-slate-300 max-w-2xl mx-auto">
    With EduDiagno, you’re just one test away from discovering your strengths, fixing your weaknesses, and landing your dream opportunity.
  </p>
  <a
    href="/jobseeker/login"
    className="inline-flex items-center bg-white text-slate-900 font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-slate-200 transition-transform duration-300 hover:scale-105 gap-2"
  >
    Take the Test Now
    <ArrowRightIcon className="h-5 w-5" />
  </a>
</div>
</div>
</section>
    {/* Team Section */}
    {/* <section className="max-w-6xl mx-auto px-4 mb-24">
      <h2 className="text-3xl font-bold mb-10 text-center text-brand">Meet the Team</h2>
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {team.map(member => (
          <div key={member.name} className="bg-background border border-border rounded-2xl shadow-xl p-8 flex flex-col items-center animate-fade-in group transition-transform duration-300 hover:scale-105">
            <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mb-4 object-cover bg-muted" />
            <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-brand transition-colors duration-300">{member.name}</h3>
            <span className="text-brand font-medium mb-2">{member.role}</span>
            <p className="text-muted-foreground text-center text-sm">{member.bio}</p>
          </div>
        ))}
      </div>
    </section> */}

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

export default About;
