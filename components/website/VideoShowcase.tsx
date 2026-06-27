"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { EASE_OUT } from "@/lib/animations";
import MediaPlaceholder from "./MediaPlaceholder";

// To go live: set videoSrc to your file (e.g. "/videos/demo.mp4") and optionally
// posterSrc to a thumbnail image. Until then a styled video slot is shown.
const videoSrc = ""; // e.g. "/videos/company-intro.mp4"
const posterSrc = ""; // e.g. "/videos/demo-poster.jpg"

const highlights = [
  "See real product walkthroughs, not stock footage",
  "Understand our process from kickoff to go-live",
  "Watch how we solve real business problems",
];

export default function VideoShowcase() {
  return (
    <section className="bg-[#f8f9fa] py-12 md:py-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: copy */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: EASE_OUT }}
          >
            <span className="inline-block bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              Watch the Demo
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
              See Jeenora in Action
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6">
              A short walkthrough is worth a thousand brochures. Watch how our software streamlines billing, automates workflows, and gives you real-time visibility across your entire business.
            </p>
            <ul className="space-y-3">
              {highlights.map((point, i) => (
                <motion.li
                  key={point}
                  className="flex items-start gap-3 text-sm text-gray-700"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.1, ease: EASE_OUT }}
                >
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right: video slot */}
          <div className="order-1 lg:order-2">
            <MediaPlaceholder
              type="video"
              src={videoSrc}
              poster={posterSrc}
              label="Product Demo Video"
              hint="Recommended 1920 × 1080 · MP4"
              className="aspect-video w-full"
              rounded="rounded-2xl md:rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
