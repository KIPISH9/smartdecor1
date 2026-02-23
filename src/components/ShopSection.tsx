import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone } from "lucide-react";
import curtainsImg from "@/assets/curtains.jpg";
import sheersImg from "@/assets/sheers.jpg";
import grassImg from "@/assets/grass-carpet.jpg";
import grass10mmImg from "@/assets/grass-10mm.jpg";
import grass25mmImg from "@/assets/grass-25mm.jpg";
import grass40mmImg from "@/assets/grass-40mm.jpg";
import grass50mmImg from "@/assets/grass-50mm.jpg";
import artificialFenceImg from "@/assets/artificial-fence.jpg";
import blindsImg from "@/assets/blinds.jpg";
import flooringImg from "@/assets/flooring.jpg";
import lvtImg from "@/assets/lvt-flooring.jpg";
import spcImg from "@/assets/spc-install.jpg";
import rodsImg from "@/assets/curtain-rods.jpg";
import juaKaliRodsImg from "@/assets/jua-kali-rods.jpg";
import rodAccessoriesImg from "@/assets/rod-accessories.jpg";
import endFlowersImg from "@/assets/end-flowers.jpg";
import endCapsImg from "@/assets/end-caps.jpg";
import duvetsImg from "@/assets/duvets.jpg";
import flutedImg from "@/assets/fluted-panel.jpg";
import wallpaperImg from "@/assets/wallpaper.jpg";
import flowersImg from "@/assets/flowers.jpg";

interface Product {
  name: string;
  category: string;
  price: string;
  image: string;
  details: string;
}

const products: Product[] = [
  { name: "Sheer Curtains", category: "Curtains & Sheers", price: "KSh 400 - 800/m", image: sheersImg, details: "Quality sheers in various colors and patterns" },
  { name: "Velvet Curtains", category: "Curtains & Sheers", price: "KSh 1,200/m", image: curtainsImg, details: "Luxurious velvet fabric, rich colors" },
  { name: "Blackout Curtains", category: "Curtains & Sheers", price: "KSh 1,200/m", image: curtainsImg, details: "100% light blocking for bedrooms" },
  { name: "Silky Curtains", category: "Curtains & Sheers", price: "KSh 1,500/m", image: curtainsImg, details: "Premium silky finish, elegant drape" },
  { name: "Poly Cotton Curtains", category: "Curtains & Sheers", price: "KSh 900/m", image: curtainsImg, details: "Durable poly cotton blend" },
  { name: "Gunia Curtains", category: "Curtains & Sheers", price: "KSh 1,000/m", image: curtainsImg, details: "Natural textured fabric" },
  { name: "Grass Carpet 10mm", category: "Grass Carpet", price: "KSh 900/m²", image: grass10mmImg, details: "Standard quality, ideal for balconies" },
  { name: "Grass Carpet 25mm", category: "Grass Carpet", price: "KSh 1,600/m²", image: grass25mmImg, details: "Medium pile, soft and realistic" },
  { name: "Grass Carpet 40mm", category: "Grass Carpet", price: "KSh 2,000/m²", image: grass40mmImg, details: "Lush pile, great for gardens" },
  { name: "Grass Carpet 50mm Premium", category: "Grass Carpet", price: "KSh 2,800/m²", image: grass50mmImg, details: "High premium, lasts 8-15 years" },
  { name: "Roller Blinds", category: "Blinds", price: "KSh 3,500/m²", image: blindsImg, details: "Modern roller blinds, various fabrics" },
  { name: "Vertical Blinds", category: "Blinds", price: "KSh 2,000/m²", image: blindsImg, details: "Classic vertical blinds for offices" },
  { name: "Mkeka wa Mbao", category: "Flooring", price: "KSh 1,700/m²", image: flooringImg, details: "Wood-look vinyl, installation inclusive" },
  { name: "LVT Flooring", category: "Flooring", price: "KSh 1,700/m²", image: lvtImg, details: "Luxury vinyl tile, installation inclusive" },
  { name: "SPC Flooring", category: "Flooring", price: "KSh 2,500/m²", image: spcImg, details: "Stone polymer composite, premium durability" },
  { name: "Import Double Rod 1m", category: "Rods & Accessories", price: "KSh 800", image: rodsImg, details: "With all accessories included" },
  { name: "Import Double Rod 2m", category: "Rods & Accessories", price: "KSh 1,100", image: rodsImg, details: "With all accessories included" },
  { name: "Import Double Rod 3m", category: "Rods & Accessories", price: "KSh 1,600", image: rodsImg, details: "With all accessories included" },
  { name: "Jua Kali Rod", category: "Rods & Accessories", price: "KSh 280 - 330/m", image: juaKaliRodsImg, details: "Bracket KSh 200, End flower KSh 200" },
  { name: "Rod Brackets & Holders", category: "Rods & Accessories", price: "KSh 200/pc", image: rodAccessoriesImg, details: "Various styles and finishes available" },
  { name: "End Flowers", category: "Rods & Accessories", price: "KSh 200/pc", image: endFlowersImg, details: "Decorative rod end finials" },
  { name: "End Caps", category: "Rods & Accessories", price: "KSh 100/pc", image: endCapsImg, details: "Clean rod end finish caps" },
  { name: "Curtain Holder Flowers", category: "Rods & Accessories", price: "Contact for Price", image: flowersImg, details: "Decorative curtain hold-backs" },
  { name: "Pillow", category: "Bedding", price: "KSh 350", image: duvetsImg, details: "Comfortable quality pillow" },
  { name: "Pillow Case", category: "Bedding", price: "KSh 350", image: duvetsImg, details: "Matching pillow case" },
  { name: "Fluted Panel", category: "Panels", price: "Contact for Price", image: flutedImg, details: "Modern wall paneling solution" },
  { name: "Wallpaper", category: "Wallpaper", price: "Contact for Price", image: wallpaperImg, details: "Wide range of designs available" },
  { name: "Artificial Fence", category: "Grass Carpet", price: "KSh 2,500 - 3,500/roll", image: artificialFenceImg, details: "3m × 1m roll, tie bags KSh 250" },
];

const allCategories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

const ShopSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory);

  const orderOnWhatsApp = (product: Product) => {
    const msg = encodeURIComponent(`Hello Smart Decor! I'm interested in: ${product.name} (${product.price}). Please share more details.`);
    window.open(`https://wa.me/254719765968?text=${msg}`, "_blank");
  };

  return (
    <section id="shop" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-[0.15em] uppercase text-sm mb-3">Our Products</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Shop & Order</h2>
          <p className="text-muted-foreground mt-3">Click any product to order via WhatsApp</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-secondary-foreground hover:bg-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: Math.min(i * 0.05, 0.4), duration: 0.4 }}
              className="group bg-card rounded-2xl overflow-hidden card-hover border border-border/50 hover:border-primary/30"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {product.category}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-3">{product.details}</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold text-lg">{product.price}</span>
                  <button
                    onClick={() => orderOnWhatsApp(product)}
                    className="whatsapp-btn flex items-center gap-1.5 text-xs px-4 py-2"
                  >
                    <Phone size={14} />
                    Order
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://heyzine.com/flip-book/1444897d39.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            View Full Catalogue →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
