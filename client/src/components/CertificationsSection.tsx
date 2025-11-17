import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, GraduationCap, ExternalLink } from "lucide-react";

interface Certification {
  name: string;
  provider: string;
  date: string;
  type: "certification" | "education";
}

const certifications: Certification[] = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    provider: "Amazon Web Services",
    date: "Aug 2023",
    type: "certification"
  },
  {
    name: "Node.js Engineer Certificate",
    provider: "Coursera",
    date: "Jan 2023",
    type: "certification"
  },
  {
    name: "Python Engineer Certificate",
    provider: "Coursera",
    date: "Jun 2022",
    type: "certification"
  },
  {
    name: "React Engineer Certificate",
    provider: "EDUCBA",
    date: "Mar 2019",
    type: "certification"
  }
];

const education = {
  degree: "Bachelor of Engineering (BEng)",
  field: "Computer Software Engineering",
  institution: "Technological University of Pereira",
  location: "Colombia",
  period: "2013 – 2017",
  gpa: "3.4"
};

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 md:py-32 relative" data-testid="section-certifications">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-display font-semibold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Certifications & Education
          </h2>
          <p className="text-muted-foreground text-lg">Continuous learning and professional development</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-display font-semibold">Certifications</h3>
            </div>

            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="p-6 bg-gradient-to-br from-card to-primary/5 border-primary/20 hover:border-primary/40 transition-all hover:-translate-y-1 group cursor-pointer animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
                data-testid={`card-certification-${index}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">{cert.provider}</p>
                    <Badge variant="secondary" className="text-xs">
                      {cert.date}
                    </Badge>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-chart-2/20 rounded-lg">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-display font-semibold">Education</h3>
            </div>

            <Card className="p-8 bg-gradient-to-br from-card via-primary/5 to-chart-2/5 border-primary/30 hover:border-primary/50 transition-all animate-fade-up" data-testid="card-education">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <h4 className="text-2xl font-display font-semibold mb-2 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                    {education.institution}
                  </h4>
                  <p className="text-sm text-muted-foreground">{education.location}</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-primary/20 to-chart-2/20 rounded-lg">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-lg">{education.degree}</p>
                  <p className="text-muted-foreground">{education.field}</p>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Badge className="bg-gradient-to-r from-primary/10 to-chart-2/10 border-primary/30">
                    {education.period}
                  </Badge>
                  <Badge className="bg-gradient-to-r from-primary/10 to-chart-2/10 border-primary/30">
                    GPA: {education.gpa}
                  </Badge>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-r from-primary/5 to-chart-2/5 border-primary/20 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Key Achievements:</span> Strong foundation in software engineering principles, data structures, algorithms, and system design. Graduated with honors specializing in web technologies and cloud computing.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
