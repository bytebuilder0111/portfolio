import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Julian Arleby Munoz Mendez. All rights reserved.
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
