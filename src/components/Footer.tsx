import { Link } from "react-router-dom";
import { Lock } from "lucide-react";
import { Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Heart className="h-6 w-6 text-primary fill-primary" />
          <span className="font-display text-lg font-bold">Sangharsh Mahila Mitra Mandal</span>
        </div>
        <p className="text-background/70 text-sm leading-relaxed">
          Empowering women and communities through education, health, and sustainable development since 2010.
        </p>
      </div>
      <div>
        <h4 className="font-display text-base font-semibold mb-4">Quick Links</h4>
        <div className="space-y-2 text-sm">
          {["/about", "/programs", "/gallery", "/contact", "/donate"].map((p) => (
            <Link key={p} to={p} className="block text-background/70 hover:text-primary transition-colors capitalize">
              {p.replace("/", "")}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-display text-base font-semibold mb-4">Contact Info</h4>
        <div className="space-y-3 text-sm text-background/70">
          <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> 123 Gandhi Road, Pune, Maharashtra</div>
          <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +91 98765 43210</div>
          <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> info@sangharsh-mmm.org</div>
        </div>
      </div>
    </div>
    <div className="border-t border-background/10 text-center py-4 text-xs text-background/50">
      © 2024 Sangharsh Mahila Mitra Mandal. All rights reserved. | College Demo Project
    </div>
  </footer>
);

export default Footer;
