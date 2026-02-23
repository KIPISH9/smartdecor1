import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Facebook } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="section-padding gradient-light">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.15em] uppercase text-sm mb-3">Get In Touch</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Contact Us</h2>
        </div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-card rounded-2xl p-8 card-hover border border-border/50">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6">Visit Our Shops</h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Zimmerman Branch</p>
                    <p className="text-muted-foreground text-sm">Canopy Stage, next to Powerstar Supermarket, Gatare Building B5, B6</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Nairobi CBD Branch</p>
                    <p className="text-muted-foreground text-sm">Odeon, along Tsavo Road, Maximum Centre Shop 45, 46, 48</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Thika Town Branch</p>
                    <p className="text-muted-foreground text-sm">Elica Plaza Building, next to Jordan College</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Phone / WhatsApp</p>
                    <a href="tel:+254719765968" className="text-primary text-sm hover:underline">0719 765 968</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a href="mailto:smartdecor027@gmail.com" className="text-primary text-sm hover:underline">smartdecor027@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Working Hours</p>
                    <p className="text-muted-foreground text-sm">Mon - Sat: 8:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-8">
                <a
                  href="https://wa.me/254719765968?text=Hello%20Smart%20Decor!%20I%20have%20a%20question."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-btn flex items-center justify-center gap-2 flex-1"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </a>
                <a
                  href="https://www.facebook.com/share/1Fo4mQEqYY/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[hsl(220,60%,50%)] text-white font-medium hover:opacity-90 transition-opacity"
                >
                  <Facebook size={18} />
                  Facebook
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="rounded-2xl overflow-hidden shadow-lg border border-border/50 h-[220px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.9494!2d36.8706!3d-1.2045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3d5f6c66ae5b%3A0x7a3f74d9c0a6c8b!2sZimmerman%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Zimmerman Location"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-border/50 h-[220px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8194!2d36.8169!3d-1.2833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d263e6e8c7%3A0x87150e4d6db4ee41!2sOdeon%20Cinema!5e0!3m2!1sen!2ske!4v1700000000001!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Odeon CBD Location"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-border/50 h-[220px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0!2d37.0723!3d-1.0396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4e2d!2sThika%20Town!5e0!3m2!1sen!2ske!4v1700000000002!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Thika Town Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
