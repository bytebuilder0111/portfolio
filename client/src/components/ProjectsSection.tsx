import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";

import streamFlowImg from "@assets/generated_images/StreamFlow_project_hero_image_1070022b.png";
import cloudSyncImg from "@assets/generated_images/CloudSync_CRM_project_image_70f26e0b.png";
import dataPulseImg from "@assets/generated_images/DataPulse_Analytics_project_image_9c126760.png";
import secureAuthImg from "@assets/generated_images/SecureAuth_Gateway_project_image_c16241e7.png";
import marketPlaceImg from "@assets/generated_images/MarketPlace_Pro_project_image_470b8e2c.png";
import devOpsImg from "@assets/generated_images/DevOps_Commander_project_image_75ddaba7.png";
import chatConnectImg from "@assets/generated_images/ChatConnect_project_image_1dcf7145.png";
import finTechImg from "@assets/generated_images/FinTech_Ledger_project_image_f88cc94e.png";
import aiAssistImg from "@assets/generated_images/AIAssist_Bot_project_image_6e8f93f5.png";
import cloudMigrateImg from "@assets/generated_images/CloudMigrate_project_image_6b000e09.png";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  features: string[];
  impact: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "StreamFlow",
    description: "Real-time video streaming platform with adaptive bitrate streaming and CDN integration",
    image: streamFlowImg,
    tech: ["Node.js", "React", "AWS MediaLive", "WebRTC", "Redis"],
    features: [
      "Live video streaming with sub-second latency",
      "Adaptive bitrate for optimal viewing experience",
      "CDN integration for global distribution",
      "Real-time chat and viewer analytics"
    ],
    impact: "Handles 10,000+ concurrent streams with 99.9% uptime"
  },
  {
    id: 2,
    title: "CloudSync CRM",
    description: "Multi-tenant customer management system with real-time collaboration",
    image: cloudSyncImg,
    tech: ["Next.js", "GraphQL", "PostgreSQL", "Redis", "AWS"],
    features: [
      "Multi-tenant architecture with data isolation",
      "Real-time collaboration and updates",
      "Advanced search and filtering",
      "Customizable dashboards and reports"
    ],
    impact: "Serving 500+ businesses with 50,000+ active users"
  },
  {
    id: 3,
    title: "DataPulse Analytics",
    description: "Big data visualization dashboard with real-time insights",
    image: dataPulseImg,
    tech: ["Python", "D3.js", "Kafka", "Elasticsearch", "React"],
    features: [
      "Real-time data processing pipeline",
      "Interactive data visualizations",
      "Custom metrics and KPI tracking",
      "Automated anomaly detection"
    ],
    impact: "Processes 1M+ events per second with real-time insights"
  },
  {
    id: 4,
    title: "SecureAuth Gateway",
    description: "OAuth2/JWT authentication service with multi-factor authentication",
    image: secureAuthImg,
    tech: ["Nest.js", "Redis", "MongoDB", "OAuth2", "JWT"],
    features: [
      "OAuth2 and OpenID Connect support",
      "Multi-factor authentication",
      "Session management and token refresh",
      "Rate limiting and security monitoring"
    ],
    impact: "Secures 100+ applications with 1M+ authentications daily"
  },
  {
    id: 5,
    title: "MarketPlace Pro",
    description: "E-commerce platform handling millions of products with microservices architecture",
    image: marketPlaceImg,
    tech: ["React", "Microservices", "Kubernetes", "PostgreSQL", "Stripe"],
    features: [
      "Microservices-based architecture",
      "Product catalog with advanced search",
      "Payment processing with Stripe",
      "Order management and fulfillment"
    ],
    impact: "1M+ products, 100K+ daily transactions, $10M+ GMV"
  },
  {
    id: 6,
    title: "DevOps Commander",
    description: "CI/CD automation tool for streamlined deployments",
    image: devOpsImg,
    tech: ["Python", "Docker", "AWS", "Jenkins", "Terraform"],
    features: [
      "Automated CI/CD pipelines",
      "Infrastructure as Code",
      "Multi-cloud deployment support",
      "Rollback and disaster recovery"
    ],
    impact: "Reduced deployment time by 80%, 500+ deployments per day"
  },
  {
    id: 7,
    title: "ChatConnect",
    description: "Real-time messaging application with end-to-end encryption",
    image: chatConnectImg,
    tech: ["WebSockets", "RabbitMQ", "React Native", "Node.js", "MongoDB"],
    features: [
      "End-to-end encryption",
      "Real-time message delivery",
      "File sharing and media support",
      "Group chats and channels"
    ],
    impact: "Supporting 200K+ active users with 10M+ messages daily"
  },
  {
    id: 8,
    title: "FinTech Ledger",
    description: "Financial transaction processing system with high throughput",
    image: finTechImg,
    tech: ["FastAPI", "PostgreSQL", "Kafka", "Redis", "React"],
    features: [
      "High-throughput transaction processing",
      "Double-entry accounting system",
      "Real-time balance calculations",
      "Audit trail and compliance reporting"
    ],
    impact: "Processes $100M+ in transactions with 99.99% accuracy"
  },
  {
    id: 9,
    title: "AIAssist Bot",
    description: "Machine learning chatbot with natural language processing",
    image: aiAssistImg,
    tech: ["Python", "NLP", "REST APIs", "TensorFlow", "React"],
    features: [
      "Natural language understanding",
      "Context-aware responses",
      "Multi-language support",
      "Integration with popular platforms"
    ],
    impact: "Handles 50K+ conversations daily with 95% satisfaction rate"
  },
  {
    id: 10,
    title: "CloudMigrate",
    description: "Legacy system modernization toolkit for cloud migration",
    image: cloudMigrateImg,
    tech: ["Node.js", "AWS Lambda", "DynamoDB", "Docker", "Terraform"],
    features: [
      "Automated code migration",
      "Database schema conversion",
      "Serverless architecture adoption",
      "Performance optimization"
    ],
    impact: "Migrated 50+ legacy systems with 60% cost reduction"
  }
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 md:py-32 relative" data-testid="section-projects">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-chart-2/5 to-background" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-display font-semibold mb-4 bg-gradient-to-r from-foreground to-chart-2 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">Building innovative solutions that make a difference</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group overflow-hidden bg-gradient-to-br from-card to-primary/5 border-primary/20 hover:border-primary/40 transition-all hover:-translate-y-2 cursor-pointer animate-fade-up"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => setSelectedProject(project)}
              data-testid={`card-project-${project.id}`}
            >
              <div className="aspect-video overflow-hidden bg-gradient-to-br from-primary/20 to-chart-2/20">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-display font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.tech.length - 3}
                    </Badge>
                  )}
                </div>

                <Button
                  variant="ghost"
                  className="w-full justify-between group/btn"
                  data-testid={`button-view-details-${project.id}`}
                >
                  View Details
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto" data-testid="dialog-project-details">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-display bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-base">
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <Badge
                        key={tech}
                        className="bg-gradient-to-r from-primary/10 to-chart-2/10 border-primary/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-gradient-to-r from-primary/10 to-chart-2/10 rounded-lg border border-primary/20">
                  <h4 className="font-semibold mb-2">Impact</h4>
                  <p className="text-sm text-muted-foreground">{selectedProject.impact}</p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
