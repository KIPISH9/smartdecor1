import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import heroImg from "@/assets/hero-interior.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Beautiful interior design" className="w-full h-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
      </div>

      <div className="section-container relative z-10 py-32">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4"
          >
            Transform Your Space
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
          >
            Elegant Interiors,{" "}
            <span className="text-gradient">Exceptional Quality</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground text-lg mb-8 leading-relaxed"
          >
            Premium curtains, carpets, blinds, wallpapers & more. We bring your interior design dreams to life with quality products and professional installation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="https://wa.me/254719765968?text=Hello%20Smart%20Decor!%20I%27d%20like%20to%20inquire%20about%20your%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn flex items-center gap-2"
            >
              <Phone size={18} />
              Order on WhatsApp
            </a>
            <a
              href="#shop"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-foreground/20 text-foreground font-medium hover:bg-secondary transition-all duration-300"
            >
              View Products
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
