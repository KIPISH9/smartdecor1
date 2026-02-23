import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Paintbrush, Layers, Grid3X3, Blinds, Home, Wrench } from "lucide-react";

const services = [
  { icon: Paintbrush, title: "Curtains & Sheers", desc: "Premium quality fabrics in velvet, silky, blackout, poly cotton and more. Professional fitting included." },
  { icon: Layers, title: "Wall to Wall Carpets", desc: "Delta, VIP, USA, Atlas, Executive carpet tiles and more. Full installation service." },
  { icon: Grid3X3, title: "Flooring Solutions", desc: "Mkeka wa mbao, LVT, SPC flooring — all with professional installation included." },
  { icon: Blinds, title: "Blinds & Wallpapers", desc: "Roller blinds, vertical blinds, and stylish wallpapers to transform any room." },
  { icon: Home, title: "Fluted Panels & Partitions", desc: "Modern fluted panels and aluminum partitions for elegant room dividers." },
  { icon: Wrench, title: "Gypsum Installation", desc: "Expert gypsum ceiling installation for a polished, modern finish." },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-primary font-medium tracking-[0.15em] uppercase text-sm mb-3"
          >
            What We Offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="font-heading text-3xl md:text-4xl font-bold text-foreground"
          >
            Our Services
          </motion.h2>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-card rounded-2xl p-8 card-hover border border-border/50 hover:border-primary/30"
            >
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                <s.icon size={26} className="text-accent-foreground group-hover:text-primary-foreground transition-colors duration-500" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
