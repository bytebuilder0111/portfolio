import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Phone, Copy, Check } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const { toast } = useToast();

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }

    toast({
      title: "Copied to clipboard!",
      description: `${type === "email" ? "Email" : "Phone number"} has been copied.`,
    });
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative" data-testid="section-contact">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/10 to-background" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-display font-semibold mb-4 bg-gradient-to-r from-foreground via-primary to-chart-2 bg-clip-text text-transparent">
            Let's Build Something Amazing
          </h2>
          <p className="text-muted-foreground text-lg">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card
            className="p-8 bg-gradient-to-br from-card to-primary/10 border-primary/30 hover:border-primary/50 transition-all hover:-translate-y-2 group cursor-pointer animate-scale-in"
            onClick={() => copyToClipboard("JulianArlebyMunozMendez@gmail.com", "email")}
            data-testid="card-contact-email"
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="p-4 bg-gradient-to-br from-primary/20 to-chart-2/20 rounded-2xl group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-muted-foreground break-all">
                  JulianArlebyMunozMendez@gmail.com
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="mt-2"
                onClick={(e) => {
                  e.stopPropagation();
                  copyToClipboard("JulianArlebyMunozMendez@gmail.com", "email");
                }}
                data-testid="button-copy-email"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Copy
                  </>
                )}
              </Button>
            </div>
          </Card>

          <Card
            className="p-8 bg-gradient-to-br from-card to-chart-2/10 border-primary/30 hover:border-primary/50 transition-all hover:-translate-y-2 group cursor-pointer animate-scale-in"
            style={{ animationDelay: "0.1s" }}
            onClick={() => window.open("https://www.linkedin.com/in/julian-arleby-munoz-mendez/", "_blank")}
            data-testid="card-contact-linkedin"
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="p-4 bg-gradient-to-br from-primary/20 to-chart-2/20 rounded-2xl group-hover:scale-110 transition-transform">
                <Linkedin className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <p className="text-sm text-muted-foreground">
                  Connect with me
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="mt-2"
                data-testid="button-linkedin"
              >
                Visit Profile
              </Button>
            </div>
          </Card>

          <Card
            className="p-8 bg-gradient-to-br from-card to-primary/10 border-primary/30 hover:border-primary/50 transition-all hover:-translate-y-2 group cursor-pointer animate-scale-in"
            style={{ animationDelay: "0.2s" }}
            onClick={() => copyToClipboard("+57 320 448 3228", "phone")}
            data-testid="card-contact-phone"
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="p-4 bg-gradient-to-br from-primary/20 to-chart-2/20 rounded-2xl group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-sm text-muted-foreground">
                  +57 320 448 3228
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="mt-2"
                onClick={(e) => {
                  e.stopPropagation();
                  copyToClipboard("+57 320 448 3228", "phone");
                }}
                data-testid="button-copy-phone"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Copy
                  </>
                )}
              </Button>
            </div>
          </Card>
        </div>

        <Card className="p-8 bg-gradient-to-r from-primary/5 via-chart-2/5 to-primary/5 border-primary/20 text-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <p className="text-muted-foreground mb-6">
            Currently based in <span className="font-semibold text-foreground">Florencia, Caqueta, Colombia</span>
          </p>
          <p className="text-sm text-muted-foreground">
            Available for remote opportunities and open to relocation for the right position.
          </p>
        </Card>
      </div>
    </section>
  );
}
