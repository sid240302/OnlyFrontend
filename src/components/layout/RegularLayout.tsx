import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/common/ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, ChevronDown } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Features", href: "/features" },
  { label: "How It Works", href: "/how-it-works" },
  // Case Studies, About, and Pricing pages temporarily hidden
  // { label: "Pricing", href: "/pricing" },
  // { label: "Case Studies", href: "/case-studies" },
  // { label: "About", href: "/about" },
];

const RegularLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        src='/Video_Playback_in_Infinity_Loop.mp4'
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          zIndex: -1, // Keep it in the background
          
        }}
      />
      
      {/* Overlay to darken the video slightly for better text readability */}
      <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          zIndex: -1,
      }} />
      
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6 md:gap-8 lg:gap-10">
              

            <Link to="/" className="flex items-center space-x-2">
            <img src="/favicon.png" alt="Logo" className="w-8 h-8 rounded-md object-cover dark:invert dark:brightness-200" />
              
            </Link>

            <nav className="hidden md:flex gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === link.href
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            {/* <ThemeToggle /> */}

            <div className="hidden md:flex items-center gap-4">
              <Link to="/jobseeker/login">
                <Button variant="ghost">Log in</Button>
              </Link>
              <Link to="/jobseeker/signup">
                <Button>Sign up</Button>
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-1">
                    Employer
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link to="/employer/login">Employer Login</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/employer/signup">Employer Signup</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-screen p-4 mt-2">
                <nav className="flex flex-col gap-4 mb-4">
                  {navLinks.map((link) => (
                    <DropdownMenuItem key={link.href} asChild>
                      <Link
                        to={link.href}
                        className={`text-sm font-medium transition-colors ${
                          location.pathname === link.href
                            ? "text-foreground"
                            : "text-muted-foreground"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </nav>
                <div className="flex flex-col gap-2">
                  <Link to="/jobseeker/login" className="w-full">
                    <Button variant="outline" className="w-full">
                      Log in
                    </Button>
                  </Link>
                  <Link to="/jobseeker/signup" className="w-full">
                    <Button className="w-full">Sign up</Button>
                  </Link>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild className="md:hidden">
                <Button variant="outline">Employer <ChevronDown/></Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link to="/employer/login">Employer Login</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/employer/signup">Employer Signup</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <main className="flex-1 p-8 relative z-10">{children}</main>

      <footer className="relative z-10 border-t border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <img src="/favicon.png" alt="Logo" className="w-8 h-8 rounded-md object-cover dark:invert dark:brightness-200" />
                <span className="text-2xl font-semibold" style={{ fontFamily: 'Libertinus Serif, serif', fontWeight: 600 }}>
                  EduDiagno
                </span>
              </Link>
              <p className="text-muted-foreground text-sm">
                Revolutionizing educational assessments with AI-powered
                diagnostics and student evaluations.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/features" className="hover:text-foreground transition-colors">Features</Link></li>
                <li><Link to="/how-it-works" className="hover:text-foreground transition-colors">How It Works</Link></li>
                <li><Link to="/pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
                {/* <li><Link to="/integrations" className="hover:text-foreground transition-colors">Integrations</Link></li> */}
                <li><Link to="/changelog" className="hover:text-foreground transition-colors">Changelog</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
                {/* <li><Link to="/case-studies" className="hover:text-foreground transition-colors">Case Studies</Link></li> */}
                <li><Link to="/contact" className="hover:text-foreground transition-colors">Help Center</Link></li>
                {/* <li><Link to="/documentation" className="hover:text-foreground transition-colors">Documentation</Link></li> */}
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/about" className="hover:text-foreground transition-colors">About</Link></li>
                {/* <li><Link to="/careers" className="hover:text-foreground transition-colors">Careers</Link></li> */}
                <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
                <li><Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} EduDiagno. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <a href="https://www.youtube.com/@edudiagnoAiHiring" className="transition-transform duration-200 hover:scale-110 hover:brightness-125">
                <img src="https://img.icons8.com/ios-filled/50/000000/youtube.png" alt="YouTube" className="w-7 h-7"/>
              </a>
              <a href="https://api.whatsapp.com/send?phone=918949895149&text=Hello%2C%20I%20had%20a%20query%20regarding%20EduDiagno%20AI" className="transition-transform duration-200 hover:scale-110 hover:brightness-125">
                <img src="https://img.icons8.com/ios-filled/50/000000/whatsapp.png" alt="Whatsapp" className="w-5 h-5"/>
              </a>
              <a href="https://www.linkedin.com/company/edudiagno/" className="transition-transform duration-200 hover:scale-110 hover:brightness-125">
                <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="LinkedIn" className="w-5 h-5"/>
              </a>
              <a href="https://www.instagram.com/edudiagno/" className="transition-transform duration-200 hover:scale-110 hover:brightness-125">
                <img src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png" alt="Instagram" className="w-5 h-5"/>
              </a>
              <a href="mailto:contact@edudiagno.com" className="transition-transform duration-200 hover:scale-110 hover:brightness-125">
                <img src="https://img.icons8.com/ios-filled/50/000000/mail.png" alt="mail" className="w-5 h-5"/>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RegularLayout;
