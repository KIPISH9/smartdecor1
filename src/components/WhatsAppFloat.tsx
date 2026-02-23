import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppFloat = () => {
  return (
    <motion.a
      href="https://wa.me/254719765968?text=Hello%20Smart%20Decor!%20I%27d%20like%20to%20inquire%20about%20your%20products."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full whatsapp-btn flex items-center justify-center shadow-xl"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} />
    </motion.a>
  );
};

export default WhatsAppFloat;
