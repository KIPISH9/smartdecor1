import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import curtainsImg from "@/assets/curtains.jpg";
import sheersImg from "@/assets/sheers.jpg";
import grassImg from "@/assets/grass-carpet.jpg";
import wallCarpetImg from "@/assets/wall-carpet.jpg";
import wallpaperImg from "@/assets/wallpaper.jpg";
import blindsImg from "@/assets/blinds.jpg";
import flooringImg from "@/assets/flooring.jpg";
import flutedImg from "@/assets/fluted-panel.jpg";
import rodsImg from "@/assets/curtain-rods.jpg";
import duvetsImg from "@/assets/duvets.jpg";

const categories = [
  { name: "Curtains", img: curtainsImg },
  { name: "Sheers", img: sheersImg },
  { name: "Grass Carpets", img: grassImg },
  { name: "Wall to Wall Carpets", img: wallCarpetImg },
  { name: "Wallpapers", img: wallpaperImg },
  { name: "Blinds", img: blindsImg },
  { name: "Flooring (LVT/SPC)", img: flooringImg },
  { name: "Fluted Panels", img: flutedImg },
  { name: "Imported Rods", img: rodsImg },
  { name: "Duvets & Pillows", img: duvetsImg },
];

const CategoriesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="categories" className="section-padding gradient-light">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.15em] uppercase text-sm mb-3">Browse</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Product Categories</h2>
        </div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {categories.map((cat, i) => (
            <motion.a
              key={i}
              href="#shop"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="group relative rounded-2xl overflow-hidden aspect-square cursor-pointer"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent transition-all duration-500 group-hover:from-foreground/80" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <h3 className="font-heading text-primary-foreground text-lg md:text-xl font-semibold">
                  {cat.name}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
