import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Briefcase, Award } from "lucide-react";

export default function AboutSection() {
  const stats = [
    { icon: Briefcase, label: "Years Experience", value: "7+" },
    { icon: Code2, label: "Projects Completed", value: "50+" },
    { icon: Award, label: "Certifications", value: "4" },
  ];

  const topSkills = [
    "Node.js", "Python", "React", "Next.js", "AWS", "GraphQL",
    "PostgreSQL", "MongoDB", "Docker", "Kubernetes"
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative" data-testid="section-about">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-display font-semibold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg">Building the future, one line of code at a time</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-up">
            <div className="relative w-64 h-64 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-chart-2 rounded-full opacity-20 blur-2xl" />
              <div className="relative w-full h-full bg-gradient-to-br from-primary/20 to-chart-2/20 rounded-full border-2 border-primary/30 flex items-center justify-center">
                <div className="text-8xl font-display font-bold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                  JAM
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <p className="text-lg leading-relaxed">
              I'm a passionate Senior Full-Stack Engineer specializing in building scalable, 
              high-performance web applications. With over 7 years of experience, I've mastered 
              both backend and frontend technologies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My expertise spans across Node.js and Python ecosystems, creating robust backend 
              systems with Nest.js, Express.js, Django, and FastAPI. On the frontend, I craft 
              seamless user experiences with React and Next.js.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm proficient in cloud technologies, particularly AWS, where I deploy and manage 
              applications using Docker and Kubernetes. My approach combines modern architecture 
              patterns with best practices to deliver solutions that scale.
            </p>

            <div className="flex flex-wrap gap-2 pt-4">
              {topSkills.map((skill) => (
                <Badge
                  key={skill}
                  className="bg-gradient-to-r from-primary/10 to-chart-2/10 border-primary/30 hover:scale-105 transition-transform"
                  data-testid={`badge-skill-${skill.toLowerCase().replace(/\./g, '-')}`}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={stat.label}
              className="p-8 bg-gradient-to-br from-card via-card to-primary/5 border-primary/20 hover:border-primary/40 transition-all hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`card-stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 bg-gradient-to-br from-primary/20 to-chart-2/20 rounded-2xl">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-display font-bold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
