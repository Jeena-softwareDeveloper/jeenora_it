"use client";

import { Cloud, ShieldCheck, Clock, Zap, Code2, GitBranch, BarChart2, Users, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { EASE_OUT } from "@/lib/animations";
import CountUp from "./CountUp";

export default function FeatureGrid() {
  const features = [
    { icon: Cloud, label: "Cloud-Native Architecture" },
    { icon: ShieldCheck, label: "Enterprise Security" },
    { icon: Clock, label: "Real-Time Data Sync" },
    { icon: Zap, label: "High-Performance APIs" },
    { icon: Code2, label: "Clean Code Standards" },
    { icon: GitBranch, label: "Agile Delivery" },
    { icon: BarChart2, label: "Analytics & Reporting" },
    { icon: Users, label: "Multi-Role Access Control" },
    { icon: Lock, label: "Data Privacy Compliant" },
  ];

  return (
    <section className="bg-primary py-10 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* Left: Why Choose Us */}
          <motion.div 
            className="relative w-full flex items-center justify-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6 max-w-lg">
              <span className="inline-block bg-white/10 border border-white/20 text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Built for Reliability.<br/>Engineered for Growth.
              </h2>
              <p className="text-white/80 text-sm md:text-base leading-relaxed">
                Every solution we deliver is architected for scalability, security, and long-term performance. We combine deep domain expertise with modern engineering practices to ensure your software investment pays dividends for years to come.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  { end: 200, suffix: "+", label: "Projects Delivered" },
                  { end: 150, suffix: "+", label: "Happy Clients" },
                  { end: 8, suffix: "+", label: "Years of Experience" },
                  { end: 12, suffix: "+", label: "Industries Served" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="bg-white/10 rounded-xl px-5 py-4 border border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease: EASE_OUT }}
                    whileHover={{ scale: 1.04, backgroundColor: "rgba(255,255,255,0.16)" }}
                  >
                    <p className="text-white font-extrabold text-2xl">
                      <CountUp end={item.end} suffix={item.suffix} />
                    </p>
                    <p className="text-white/70 text-xs mt-1">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Feature Grid 3x3 */}
          <div className="grid grid-cols-3 gap-y-6 gap-x-4 sm:gap-y-8 sm:gap-x-8">
            {features.map((feature, i) => (
              <motion.div 
                key={i} 
                className="flex flex-col items-center text-center group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.06, ease: EASE_OUT }}
              >
                <motion.div
                  className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-2xl flex items-center justify-center mb-3 sm:mb-4 shadow-lg cursor-pointer"
                  whileHover={{ scale: 1.1, rotate: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                </motion.div>
                <p className="text-white/80 text-xs sm:text-sm font-medium leading-relaxed max-w-[120px] sm:max-w-[140px]">
                  {feature.label}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
