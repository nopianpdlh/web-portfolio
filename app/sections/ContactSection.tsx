"use client";
import ScrollReveal from "@/app/components/animations/ScrollReveal";
import { socialLinks, anosa } from "@/app/data/siteData";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 px-4 md:px-8 max-w-2xl mx-auto text-center"
    >
      <ScrollReveal>Hubungi Saya</ScrollReveal>
      <ScrollReveal
        containerClassName="mt-4"
        textClassName="font-normal text-lg md:text-xl text-neutral-300"
      >
        Saya selalu terbuka untuk diskusi, kolaborasi, atau sekadar menyapa.
        Jangan ragu untuk menghubungi saya melalui email atau media sosial.
      </ScrollReveal>

      <div className="mt-8">
        <a
          href={`mailto:${anosa.email}`}
          className="text-2xl font-mono p-4 inline-block bg-purple-600/20 text-purple-300 rounded-md hover:bg-purple-600/40 transition-colors duration-300"
        >
          {anosa.email}
        </a>
      </div>

      <div className="mt-12 flex items-center justify-center gap-6">
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="text-neutral-400 hover:text-white"
          >
            <link.icon size={32} />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
