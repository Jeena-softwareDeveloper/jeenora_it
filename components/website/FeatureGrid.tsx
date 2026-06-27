"use client";

import { Cloud, ShieldCheck, Clock, Zap, Code2, GitBranch, BarChart2, Users, Lock } from "lucide-react";
import { motion } from "framer-motion";

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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  { stat: "200+", label: "Projects Delivered" },
                  { stat: "150+", label: "Happy Clients" },
                  { stat: "8+", label: "Years of Experience" },
                  { stat: "12+", label: "Industries Served" },
                ].map((item, i) => (
                  <div key={i} className="bg-white/10 rounded-xl px-5 py-4 border border-white/10">
                    <p className="text-white font-extrabold text-2xl">{item.stat}</p>
                    <p className="text-white/70 text-xs mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Feature Grid 3x3 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-8 gap-x-8">
            {features.map((feature, i) => (
              <motion.div 
                key={i} 
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-lg hover:scale-105 transition-transform cursor-pointer">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <p className="text-white/80 text-sm font-medium leading-relaxed max-w-[140px]">
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
