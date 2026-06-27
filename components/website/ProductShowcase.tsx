"use client";

import { motion } from "framer-motion";
import { EASE_OUT } from "@/lib/animations";
import MediaPlaceholder from "./MediaPlaceholder";

// To go live: drop your screenshots in /public and set `src` on each item below
// (e.g. src: "/showcase/dashboard.png"). Until then, styled slots are shown.
const featured = {
  label: "Product Dashboard",
  hint: "Recommended 1600 × 700",
  src: "", // e.g. "/showcase/dashboard.png"
};

const gallery = [
  { label: "Mobile App Screen", hint: "1080 × 1350", src: "" },
  { label: "POS / Billing View", hint: "1280 × 720", src: "" },
  { label: "Analytics & Reports", hint: "1280 × 720", src: "" },
];

export default function ProductShowcase() {
  return (
    <section className="bg-white py-12 md:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          className="text-center mb-8 md:mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
        >
          <span className="inline-block bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Product Showcase
          </span>
          <h2 className="text-3xl md:text-[2.2rem] font-bold text-gray-900 relative inline-block pb-3">
            Software That Speaks for Itself
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-[3px] bg-primary rounded-full" />
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm md:text-base">
            A closer look at the platforms we build — clean interfaces, powerful dashboards, and tools your team will actually enjoy using every day.
          </p>
        </motion.div>

        {/* Featured screenshot */}
        <MediaPlaceholder
          type="image"
          src={featured.src}
          label={featured.label}
          hint={featured.hint}
          alt="Jeenora product dashboard"
          className="aspect-[16/9] sm:aspect-[16/8] md:aspect-[16/7] w-full"
          rounded="rounded-2xl md:rounded-3xl"
        />

        {/* Supporting gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-6">
          {gallery.map((item) => (
            <MediaPlaceholder
              key={item.label}
              type="image"
              src={item.src}
              label={item.label}
              hint={item.hint}
              className="aspect-[4/3]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
