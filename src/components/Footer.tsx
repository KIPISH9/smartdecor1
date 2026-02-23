import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import logoImg from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img src={logoImg} alt="Smart Decor Logo" className="h-12 w-auto rounded" />
              <div>
                <h3 className="font-heading text-xl font-bold">SMART DECOR</h3>
                <p className="text-xs tracking-[0.15em] opacity-70">GMK SMART DECOR LTD</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed mb-3">
              Your trusted partner for premium interior design solutions in Nairobi.
            </p>
            <a
              href="https://www.facebook.com/share/1Fo4mQEqYY/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity"
            >
              <Facebook size={18} /> Follow us on Facebook
            </a>
          </div>
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "About", "Services", "Categories", "Shop", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm opacity-80">
                <Phone size={14} /> 0719 765 968
              </div>
              <div className="flex items-center gap-2 text-sm opacity-80">
                <Mail size={14} /> smartdecor027@gmail.com
              </div>
              <div className="flex items-start gap-2 text-sm opacity-80">
                <MapPin size={14} className="flex-shrink-0 mt-0.5" /> Zimmerman | Odeon CBD | Thika Town
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-6 text-center text-sm opacity-60">
          © {new Date().getFullYear()} Smart Decor – GMK Smart Decor Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
