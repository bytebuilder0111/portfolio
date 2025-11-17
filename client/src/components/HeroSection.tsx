import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Mail, Phone } from "lucide-react";

export default function HeroSection() {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = [
    "Senior Full Stack Engineer",
    "Node.js Expert",
    "React Specialist",
    "AWS Solutions Architect",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-chart-2/20 animate-gradient-shift bg-[length:200%_200%]" />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl opacity-20 animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-chart-2/30 rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="animate-fade-up">
          <h1 className="text-4xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-chart-2 bg-clip-text text-transparent">
            Julian Arleby Munoz Mendez
          </h1>
          
          <div className="h-16 mb-8">
            <p
              key={currentTitle}
              className="text-xl md:text-3xl font-display font-semibold text-primary animate-fade-in"
            >
              {titles[currentTitle]}
            </p>
          </div>

          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Senior Full-Stack Engineer with expertise in Node.js and Python, building scalable, 
            high-performance web applications using modern technologies. Creating seamless, interactive 
            user interfaces with React and Next.js.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-primary to-chart-2 hover:scale-105 transition-transform"
              data-testid="button-view-projects"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-primary/50 backdrop-blur-sm bg-background/50"
              data-testid="button-contact-me"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="mailto:JulianArlebyMunozMendez@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-email"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="tel:+573204483228"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-phone"
            >
              <Phone className="w-6 h-6" />
            </a>
          </div>
        </div>

        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-primary transition-colors"
          data-testid="button-scroll-indicator"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}
