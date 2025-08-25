import React from "react";
import { Link } from "react-router-dom";
import LandingLayout from "@/components/layout/RegularLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Users,
  BarChart3,
  Calendar,
  Search,
  Brain,
  Clock,
  CheckCircle2
} from "lucide-react";

const Landing = () => {
  return (
    <LandingLayout>
      {/* Video background behind header and hero */}
      <div className="fixed inset-0 w-screen h-screen -z-10 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          src="/Video_Playback_in_Infinity_Loop.mp4"
          className="absolute inset-0 w-full h-full object-cover m-0 p-0 border-none"
          style={{ top: 0, left: 0, width: '100vw', height: '100vh' }}
        />
      </div>
      <section className="relative min-h-screen w-screen flex items-center justify-center overflow-hidden p-0 m-0 border-none">
        {/* Large, fixed, flipped video on the left side */}
        <video
          src="/Thumbs_Up.webm"
          autoPlay
          loop
          muted
          playsInline
          style={{ position: 'relative', left: -450, top: 0, height: '100vh', width: 'auto', zIndex: 2, transform: 'scaleX(-1)' }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
          <div className="flex flex-col items-end justify-center w-full pr-12 md:pr-32 lg:pr-48 text-right">
            <h1 className="text-6xl md:text-8xl font-extrabold mb-6 animate-fade-up [animation-delay:100ms]" style={{background: 'linear-gradient(90deg, #237be7ff 0%, #da4adaff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
              <span style={{fontFamily: 'Playfair Display, serif', fontWeight: 700}}>EduDiagno</span>
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up [animation-delay:200ms]" style={{background: 'linear-gradient(90deg, #237be7ff 0%, #da4adaff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontFamily: 'Space Grotesk, sans-serif'}}>
              Smarter Hiring. <br/>
              Smarter Learning.<br/>
              Powered by AI.
            </h2>
            <p className="max-w-2xl text-2xl md:text-3xl font-medium mb-10 animate-fade-up [animation-delay:300ms] text-[#6B7280]" style={{fontFamily: 'Space Grotesk, sans-serif'}} >
              <span style={{color: '#000'}}>
                Hire smarter. Learn faster. Prepare better.<br/>
EduDiagno bridges the gap between students and recruiters with an AI-driven hiring platform <br/> that combines interviews, skill labs, and automated screening—all in one place.<br/>👉 Students practice, recruiters hire—all powered by AI.<br/>
              </span>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 animate-fade-up [animation-delay:300ms]">
            <div className="flex flex-col sm:flex-row items-end justify-end gap-4 w-full pr-12 md:pr-4 lg:pr-2">
              <Link to="/employer/signup">
                <Button
                  size="lg"
                  className="w-full sm:w-auto button-hover-effect"
                  style={{
                    background: 'linear-gradient(45deg, #237be7ff 0%, #da4adaff 100%)',
                    color: '#fff',
                    border: 'none',
                    boxShadow: '0 2px 8px rgba(79, 142, 219, 0.15)',
                    left: 450,
                    top: 0
                  }}
                >
                  Start Hiring Smarter
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto glass-button"
                  style={{
                    background: 'linear-gradient(125deg, #D18DD1 0%, #517cf3ff 40%,  #4fd2dbff 100%)',
                    color: '#fff',
                    border: 'none',
                    boxShadow: '0 2px 8px rgba(209, 141, 209, 0.15)'
                  }}
                >
                  Request a Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

  {/* How it works section */}
  {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="h2 mb-4">How It Works</h2>
            <p className="p">
              <span style={{textShadow: '0 2px 8px rgba(0,0,0,0.10)'}}>
                Our streamlined AI-driven hiring process makes finding the right candidates easier than ever.
              </span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8"> */}
            {/* Step 1 */}
            {/* <Card className="border-border/50 overflow-hidden card-hover text-center">
              <div className="h-2 bg-brand w-full" />
              <CardContent className="pt-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-brand/10 text-brand mx-auto mb-4 text-xl font-bold">1</div>
                <h3 className="font-bold text-xl mb-2">Create Job Listings</h3>
                <p className="text-muted-foreground">
                  Create detailed job listings, specify requirements, and let AI
                  generate optimized job descriptions.
                </p>
              </CardContent>
            </Card> */}

            {/* Step 2 */}
            {/* <Card className="border-border/50 overflow-hidden card-hover text-center">
              <div className="h-2 bg-brand w-full" />
              <CardContent className="pt-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-brand/10 text-brand mx-auto mb-4 text-xl font-bold">2</div>
                <h3 className="font-bold text-xl mb-2">AI Screens Candidates</h3>
                <p className="text-muted-foreground">
                  Our AI analyzes resumes and identifies candidates that best
                  match your job requirements.
                </p>
              </CardContent>
            </Card> */}

            {/* Step 3 */}
            {/* <Card className="border-border/50 overflow-hidden card-hover text-center">
              <div className="h-2 bg-brand w-full" />
              <CardContent className="pt-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-brand/10 text-brand mx-auto mb-4 text-xl font-bold">3</div>
                <h3 className="font-bold text-xl mb-2">Automated Interviews</h3>
                <p className="text-muted-foreground">
                  Candidates participate in AI-conducted video interviews, with
                  responses analyzed for key insights.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-lg mx-auto mt-16 text-center">
            <Link to="/how-it-works">
              <Button variant="outline" size="lg" className="glass-button">
                Learn more about the process
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section> */}

      {/* Testimonials section - temporarily hidden
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="h2 mb-4">Trusted by Employers</h2>
            <p className="p">
              See how companies are transforming their hiring process with
              InterviewPro AI.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass-card p-6 card-hover">
              <div className="mb-4 flex">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-brand text-brand" />
                ))}
              </div>
              <p className="mb-6 italic">
                "InterviewPro AI has completely transformed our hiring process.
                The AI interviews have saved our team countless hours and
                improved our candidate selection."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-muted mr-4" />
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">
                    HR Director, TechGrowth Inc.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="glass-card p-6 card-hover">
              <div className="mb-4 flex">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-brand text-brand" />
                ))}
              </div>
              <p className="mb-6 italic">
                "The insights we get from the AI interview analysis are
                incredible. We're making better hires and our turnover rate has
                decreased by 35%."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-muted mr-4" />
                <div>
                  <p className="font-semibold">Michael Chen</p>
                  <p className="text-sm text-muted-foreground">
                    CEO, Innovate Solutions
                  </p>
                </div>
              </div>
            </Card>

            <Card className="glass-card p-6 card-hover">
              <div className="mb-4 flex">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-brand text-brand" />
                ))}
              </div>
              <p className="mb-6 italic">
                "The automated resume screening is a game-changer. We're now
                only interviewing candidates who truly match our requirements,
                saving enormous time."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-muted mr-4" />
                <div>
                  <p className="font-semibold">Jessica Martinez</p>
                  <p className="text-sm text-muted-foreground">
                    Talent Acquisition Manager, Global Retail
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      */}

  {/* Benefits section */}
  {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="h2 mb-4">Why Choose InterviewPro AI</h2>
            <p className="p">
              <span style={{textShadow: '0 2px 8px rgba(0,0,0,0.10)'}}>
                Our platform offers unparalleled benefits for modern employers looking to optimize their hiring process.
              </span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16"> */}
            {/* Benefits as cards */}
            {/* <Card className="border-border/50 overflow-hidden card-hover">
              <div className="h-2 bg-brand w-full" />
              <CardContent className="pt-6 flex gap-4 items-center">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center text-brand">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Save Time</h3>
                  <p className="text-muted-foreground">
                    Reduce hiring time by up to 70% with automated screening and
                    AI-conducted interviews.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 overflow-hidden card-hover">
              <div className="h-2 bg-brand w-full" />
              <CardContent className="pt-6 flex gap-4 items-center">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center text-brand">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Better Candidates</h3>
                  <p className="text-muted-foreground">
                    AI screening ensures you only review candidates who truly
                    match your requirements.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 overflow-hidden card-hover">
              <div className="h-2 bg-brand w-full" />
              <CardContent className="pt-6 flex gap-4 items-center">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center text-brand">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Data-Driven Decisions</h3>
                  <p className="text-muted-foreground">
                    Make hiring decisions based on objective data and AI
                    insights rather than gut feelings.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 overflow-hidden card-hover">
              <div className="h-2 bg-brand w-full" />
              <CardContent className="pt-6 flex gap-4 items-center">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center text-brand">
                  <Brain className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Reduce Bias</h3>
                  <p className="text-muted-foreground">
                    Our AI is designed to minimize unconscious bias in the
                    hiring process, promoting diversity.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 overflow-hidden card-hover">
              <div className="h-2 bg-brand w-full" />
              <CardContent className="pt-6 flex gap-4 items-center">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center text-brand">
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Flexible Scheduling</h3>
                  <p className="text-muted-foreground">
                    Candidates can complete AI interviews at their convenience,
                    expanding your talent pool.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 overflow-hidden card-hover">
              <div className="h-2 bg-brand w-full" />
              <CardContent className="pt-6 flex gap-4 items-center">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center text-brand">
                  <Search className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Customizable Process</h3>
                  <p className="text-muted-foreground">
                    Tailor interview questions and screening criteria to your
                    specific job requirements.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

  {/* CTA section */}
  {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="h2 mb-6">Ready to Transform Your Hiring Process?</h2>
            <p className="p text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of employers who are saving time, reducing costs,
              and finding better candidates with InterviewPro AI.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/employer/signup">
                <Button
                  size="lg"
                  className="w-full sm:w-auto button-hover-effect"
                >
                  Start Hiring Smarter
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto glass-button"
                >
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </LandingLayout>
  );
};

export default Landing; */}


      {/* NEW: For Students section */}
      <section className="py-16 md:py-24 bg-muted/60">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: Copy */}
            <div>
              <div className="text-6xl md:text-8xl font-extrabold mb-6 animate-fade-up [animation-delay:100ms]" style={{background: 'linear-gradient(90deg, #237be7ff 0%, #da4adaff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                 <h1 className="text-6xl md:text-8xl font-extrabold mb-6 animate-fade-up [animation-delay:100ms]" style={{background: 'linear-gradient(90deg, #237be7ff 0%, #da4adaff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
              <span style={{fontFamily: 'Playfair Display, serif', fontWeight: 700}}>For Students</span>
            </h1>
              </div>

              <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
                Looking for <span className="text-brand">internships?</span>
              </h2>

              <p className="text-muted-foreground text-base md:text-2xl" style={{color: 'black'}}>
                Just score <strong>50% or above</strong> in our assessment and
                get access to internships across various domains. Start your
                career journey with real-world projects and opportunities
                tailored for you.
              </p>

              <div className="mt-8 space-y-4 text-xl">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-brand" />
                  <p className="text-foreground">AI-powered skill assessments</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-brand" />
                  <p className="text-foreground">
                    Access to premium internships
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-brand" />
                  <p className="text-foreground">
                    Real-world project experience
                  </p>
                </div>
              </div>

              {/* Updated: shift Start Assessment button slightly right on small screens */}
              <div className="mt-8 flex justify-center md:justify-start">
                <Link to="/student/assessment">
                  <Button size="lg" className="button-hover-effect ml-4 md:ml-0 px-8 py-4 text-xl">
                    Start Assessment
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right: Image (bigger, correct public path) */}
            <div className="relative">
              <div className="absolute -inset-4 -z-10 bg-brand/10 blur-2xl rounded-3xl" />
              <img
                src="/student-heross.jpeg"
                alt="Student holding laptop, ready for internships"
                className="w-full rounded-2xl shadow-2xl object-cover aspect-[16/11] md:h-[460px] lg:h-[560px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Top Candidates Section (image left, copy right) */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: Image */}
            <div className="relative">
              <div className="absolute -inset-4 -z-10 bg-brand/10 blur-2xl rounded-3xl" />
              <img
                src="/top-candidatess.png"
                alt="Smiling manager holding tablet"
                className="w-full rounded-2xl shadow-2xl object-cover aspect-[16/10] md:h-[480px] lg:h-[600px]"
              />
            </div>

            {/* Right: Copy */}
            <div>
              <div className="text-6xl md:text-8xl font-extrabold mb-6 animate-fade-up [animation-delay:100ms]" style={{background: 'linear-gradient(90deg, #237be7ff 0%, #da4adaff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
              <h1 className="text-6xl md:text-8xl font-extrabold mb-6 animate-fade-up [animation-delay:100ms]" style={{background: 'linear-gradient(90deg, #237be7ff 0%, #da4adaff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
              <span style={{fontFamily: 'Playfair Display, serif', fontWeight: 700, whiteSpace: 'normal'}}>For Company</span>
            </h1>
              </div>

              <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
                Looking for <span className="text-brand">top candidates?</span>
              </h2>

              <p className="text-muted-foreground text-base md:text-lg">
                Access pre-qualified candidates from top colleges and conduct
                AI-powered interviews. Find the right talent faster with our
                intelligent recruitment platform powered by edudiagno.com.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-3">
                  <Users className="mt-1 h-5 w-5 text-brand" />
                  <div>
                    <p className="font-semibold">Access to top-tier candidates</p>
                    <p className="text-sm text-muted-foreground">
                      Pre-screened talent from leading colleges
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Brain className="mt-1 h-5 w-5 text-brand" />
                  <div>
                    <p className="font-semibold">AI-powered interview system</p>
                    <p className="text-sm text-muted-foreground">
                      Streamlined hiring with intelligent assessments
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <BarChart3 className="mt-1 h-5 w-5 text-brand" />
                  <div>
                    <p className="font-semibold">Quality-first recruitment</p>
                    <p className="text-sm text-muted-foreground">
                      Focus on skills and potential, not just grades
                    </p>
                  </div>
                </div>
              </div>

              {/* Updated: shift Start Hiring button slightly right on small screens */}
              <div className="mt-8 flex justify-center md:justify-start">
                <Link to="/employer/signup">
                   <Button size="lg" className="button-hover-effect ml-4 md:ml-0 px-8 py-4 text-xl">
                    Start Hiring
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="h2 mb-4">Cutting-Edge Features</h2>
            <p className="p">
              Our platform streamlines the hiring process with powerful AI tools
              designed specifically for employers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <Card className="border-border/50 overflow-hidden card-hover">
              <div className="h-2 bg-brand w-full" />
              <CardContent className="pt-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-brand/10 text-brand mb-4">
                  <Calendar className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-xl mb-2">AI Video Interviews</h3>
                <p className="text-muted-foreground">
                  Conduct interviews in real-time with an AI interviewer that
                  asks job-relevant questions and evaluates responses.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="border-border/50 overflow-hidden card-hover">
              <div className="h-2 bg-brand w-full" />
              <CardContent className="pt-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-brand/10 text-brand mb-4">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-xl mb-2">Instant Insights</h3>
                <p className="text-muted-foreground">
                  AI analyzes candidate responses and generates comprehensive
                  hiring reports with scores and recommendations.
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="border-border/50 overflow-hidden card-hover">
              <div className="h-2 bg-brand w-full" />
              <CardContent className="pt-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-brand/10 text-brand mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-xl mb-2">Private Interviews</h3>
                <p className="text-muted-foreground">
                  Generate secure private interview links for each candidate,
                  ensuring only invited candidates can access their interviews.
                </p>
              </CardContent>
            </Card>

            {/* Feature 4 */}
            <Card className="border-border/50 overflow-hidden card-hover">
              <div className="h-2 bg-brand w-full" />
              <CardContent className="pt-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-brand/10 text-brand mb-4">
                  <Search className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-xl mb-2">Smart Screening</h3>
                <p className="text-muted-foreground">
                  AI filters only the best-matched candidates by analyzing
                  resumes against your job requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it works section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="h2 mb-4">How It Works</h2>
            <p className="p">
              Our streamlined AI-driven hiring process makes finding the right
              candidates easier than ever.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center px-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-brand text-white text-xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Create Job Listings</h3>
              <p className="text-muted-foreground">
                Create detailed job listings, specify requirements, and let AI
                generate optimized job descriptions.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center px-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-brand text-white text-xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">AI Screens Candidates</h3>
              <p className="text-muted-foreground">
                Our AI analyzes resumes and identifies candidates that best
                match your job requirements.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center px-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-brand text-white text-xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Automated Interviews</h3>
              <p className="text-muted-foreground">
                Candidates participate in AI-conducted video interviews, with
                responses analyzed for key insights.
              </p>
            </div>
          </div>

          <div className="max-w-lg mx-auto mt-16 text-center">
            <Link to="/how-it-works">
              <Button variant="outline" size="lg" className="glass-button">
                Learn more about the process
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="h2 mb-4">Why Choose InterviewPro AI</h2>
            <p className="p">
              Our platform offers unparalleled benefits for modern employers
              looking to optimize their hiring process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            {/* Left column */}
            <div className="space-y-8">
              {/* Benefit 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center text-brand">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Save Time</h3>
                  <p className="text-muted-foreground">
                    Reduce hiring time by up to 70% with automated screening and
                    AI-conducted interviews.
                  </p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center text-brand">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Better Candidates</h3>
                  <p className="text-muted-foreground">
                    AI screening ensures you only review candidates who truly
                    match your requirements.
                  </p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center text-brand">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Data-Driven Decisions
                  </h3>
                  <p className="text-muted-foreground">
                    Make hiring decisions based on objective data and AI
                    insights rather than gut feelings.
                  </p>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-8">
              {/* Benefit 4 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center text-brand">
                  <Brain className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Reduce Bias</h3>
                  <p className="text-muted-foreground">
                    Our AI is designed to minimize unconscious bias in the
                    hiring process, promoting diversity.
                  </p>
                </div>
              </div>

              {/* Benefit 5 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center text-brand">
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Flexible Scheduling
                  </h3>
                  <p className="text-muted-foreground">
                    Candidates can complete AI interviews at their convenience,
                    expanding your talent pool.
                  </p>
                </div>
              </div>

              {/* Benefit 6 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center text-brand">
                  <Search className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Customizable Process
                  </h3>
                  <p className="text-muted-foreground">
                    Tailor interview questions and screening criteria to your
                    specific job requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 bg-brand/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="h2 mb-6">Ready to Transform Your Hiring Process?</h2>
            <p className="p text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of employers who are saving time, reducing costs,
              and finding better candidates with InterviewPro AI.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/employer/signup">
                <Button
                  size="lg"
                  className="w-full sm:w-auto button-hover-effect"
                >
                  Start Hiring Smarter
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto glass-button"
                >
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </LandingLayout>
  );
};

export default Landing;