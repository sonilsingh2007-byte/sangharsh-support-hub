import { Link } from "react-router-dom";
import { Lock, Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Heart className="h-6 w-6 text-accent fill-accent" />
          <span className="font-display text-lg font-bold">Sangharsh Mahila Mandal</span>
        </div>
        <p className="text-background/70 text-sm leading-relaxed">
          Sangharsh Mahila Mandal works toward community welfare, women empowerment, and social awareness initiatives aimed at creating a stronger and inclusive society.
        </p>
      </div>
      <div>
        <h4 className="font-display text-base font-semibold mb-4">Quick Links</h4>
        <div className="space-y-2 text-sm">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About Us" },
            { to: "/activities", label: "Activities" },
            { to: "/certificate", label: "Certificate" },
            { to: "/contact", label: "Contact" },
          ].map((link) => (
            <Link key={link.to} to={link.to} className="block text-background/70 hover:text-accent transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-display text-base font-semibold mb-4">Contact Info</h4>
        <div className="space-y-3 text-sm text-background/70">
          <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> Mumbai, Maharashtra</div>
          <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> +91 9876543210</div>
          <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> contact@sangharshngo.org</div>
        </div>
      </div>
    </div>
    <div className="border-t border-background/10 py-4 text-xs text-background/50 flex items-center justify-center gap-4">
      <span>© Sangharsh Mahila Mandal. All Rights Reserved.</span>
      <Link to="/admin/login" className="inline-flex items-center gap-1 text-background/30 hover:text-background/50 transition-colors">
        <Lock className="h-3 w-3" />
      </Link>
    </div>
  </footer>
);

export default Footer;
