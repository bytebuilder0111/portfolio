import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  achievements: string[];
  tech: string[];
}

const experiences: Experience[] = [
  {
    company: "Ontraport",
    role: "Senior Software Engineer",
    location: "Santa Barbara, California, United States",
    period: "Apr 2022 – Apr 2025",
    achievements: [
      "Developed responsive CRM web application, boosting user task throughput by 30%",
      "Designed GraphQL and RESTful APIs, reducing response latency by 40%",
      "Built SEO-friendly frontends with React and Next.js, increasing engagement by 35%",
      "Migrated features to Dockerized microservices on Kubernetes (AWS)",
      "Integrated Redis for caching, significantly improving dashboard performance"
    ],
    tech: ["Node.js", "Nest.js", "Python", "Django", "React", "Next.js", "GraphQL", "PostgreSQL", "MongoDB", "Redis", "AWS", "Docker", "Kubernetes"]
  },
  {
    company: "Upgrade, Inc",
    role: "Full Stack Developer",
    location: "San Francisco, California, United States",
    period: "Aug 2020 – Apr 2022",
    achievements: [
      "Built backend services handling 500,000+ daily API requests, improving efficiency by 40%",
      "Architected PostgreSQL and MongoDB solutions, increasing query performance by 40%",
      "Developed serverless functions with AWS Lambda, reducing infrastructure costs by 35%",
      "Created OAuth2/JWT authentication systems, enhancing security"
    ],
    tech: ["Node.js", "Nest.js", "Python", "FastAPI", "React", "PostgreSQL", "MongoDB", "AWS Lambda", "GraphQL"]
  },
  {
    company: "Southern Code",
    role: "Frontend Developer",
    location: "Houston, Texas, United States",
    period: "Dec 2018 – Aug 2020",
    achievements: [
      "Created user interfaces with React and Vue.js, improving responsiveness by 25%",
      "Partnered with backend engineers on PHP-based APIs for seamless integration",
      "Built UI components with Material UI, ensuring design consistency"
    ],
    tech: ["React", "Vue.js", "Nuxt.js", "TypeScript", "PHP", "Laravel", "Cypress", "Jest"]
  },
  {
    company: "Twenty Ideas",
    role: "Junior Software Developer",
    location: "Eugene, Oregon, United States",
    period: "Feb 2018 – Dec 2018",
    achievements: [
      "Developed E-Cash Management tools handling $5M+ transactions annually",
      "Created dynamic frontend components, improving engagement by 35%"
    ],
    tech: ["PHP", "SQL", "JavaScript", "React", "MVC"]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-32 relative" data-testid="section-experience">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-display font-semibold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-muted-foreground text-lg">A journey of continuous growth and innovation</p>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-chart-2 to-primary" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative animate-fade-up ${
                  index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                data-testid={`experience-${index}`}
              >
                <div className="absolute left-0 md:left-1/2 w-6 h-6 -ml-3 bg-gradient-to-br from-primary to-chart-2 rounded-full border-4 border-background z-10" />

                <Card className="p-6 md:p-8 bg-gradient-to-br from-card to-primary/5 border-primary/20 hover:border-primary/40 transition-all hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-display font-semibold text-primary">
                        {exp.role}
                      </h3>
                      <p className="text-lg font-medium mt-1">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      {exp.location}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1 flex-shrink-0">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
