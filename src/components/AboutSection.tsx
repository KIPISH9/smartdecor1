import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";
import aboutImg from "@/assets/about-team.jpg";

const features = [
  "Quality curtains, sheers & blinds",
  "Professional installation services",
  "Wide range of flooring solutions",
  "Competitive prices & honest advice",
  "Three convenient locations in Nairobi & Thika",
  "Free consultation available",
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding gradient-light">
      <div className="section-container">
        <div ref={ref} className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={aboutImg} alt="Smart Decor showroom" className="w-full h-[400px] object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-lg hidden sm:block">
              <p className="font-heading text-3xl font-bold">10+</p>
              <p className="text-sm opacity-90">Years Experience</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-primary font-medium tracking-[0.15em] uppercase text-sm mb-3">About Us</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Your Trusted Interior Design Partner
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Smart Decor – GMK Smart Decor Ltd is Nairobi's go-to destination for quality interior solutions. From premium curtains and sheers to wall-to-wall carpets, artificial grass, blinds, wallpapers, and fluted panels — we supply and install it all at affordable prices.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="flex items-center gap-2 text-sm text-foreground"
                >
                  <CheckCircle size={16} className="text-primary flex-shrink-0" />
                  {f}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
