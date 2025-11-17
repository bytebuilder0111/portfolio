import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Server, Cloud, Database, Shield, Zap } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: ["React", "Next.js", "Angular", "Vue.js", "TypeScript", "Tailwind CSS", "Redux", "Material UI"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Backend & APIs",
    icon: Server,
    skills: ["Node.js", "Python", "Express.js", "Nest.js", "Django", "FastAPI", "GraphQL", "REST APIs"],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Jenkins", "GitHub Actions", "Terraform", "Azure"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "DynamoDB", "Oracle", "Prisma", "TypeORM"],
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Security & Auth",
    icon: Shield,
    skills: ["OAuth2", "JWT", "OpenID Connect", "HTTPS", "RBAC", "Security Best Practices"],
    color: "from-indigo-500 to-blue-500"
  },
  {
    title: "Testing & Tools",
    icon: Zap,
    skills: ["Jest", "Pytest", "Cypress", "Selenium", "TDD", "Agile", "Scrum", "Git"],
    color: "from-yellow-500 to-amber-500"
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32 relative" data-testid="section-skills">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-chart-2/5 to-background" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-display font-semibold mb-4 bg-gradient-to-r from-foreground to-chart-2 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg">Mastering the tools that power modern applications</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="p-6 bg-gradient-to-br from-card to-primary/5 border-primary/20 hover:border-primary/40 transition-all hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
              data-testid={`card-skill-category-${index}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 bg-gradient-to-br ${category.color} bg-opacity-10 rounded-lg`}>
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    className="bg-gradient-to-r from-primary/10 to-chart-2/10 border-primary/30 hover:scale-105 transition-transform"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block p-6 bg-gradient-to-r from-primary/10 to-chart-2/10 border-primary/30 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Development Methodologies:</span> Agile, SCRUM, Kanban, TDD, OOP, Design Patterns, Microservices Architecture
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
