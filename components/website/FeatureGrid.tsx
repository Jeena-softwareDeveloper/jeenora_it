"use client";

import { Cloud, MapPin, Clock, ScanFace, Radio, FileText, BarChart, FileSpreadsheet, UserCog } from "lucide-react";
import { motion } from "framer-motion";

export default function FeatureGrid() {
  const features = [
    { icon: Cloud, label: "Cloud-Based Architecture" },
    { icon: MapPin, label: "Multi-Branch Tracking" },
    { icon: Clock, label: "Real-Time Sync" },
    { icon: ScanFace, label: "Automated Reconciliation" },
    { icon: Radio, label: "Live Inventory Routing" },
    { icon: FileText, label: "Complex Tax Billing" },
    { icon: BarChart, label: "Centralized Analytics" },
    { icon: FileSpreadsheet, label: "B2B Dealer Management" },
    { icon: UserCog, label: "Granular Access Roles" },
  ];

  return (
    <section className="bg-primary py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* Left: Mobile App Mockups placeholder */}
          <motion.div 
            className="relative h-[400px] lg:h-[450px] w-full flex items-center justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
             <div className="w-full h-full border-2 border-dashed border-white/20 rounded-3xl flex flex-col items-center justify-center space-y-4 bg-white/5">
                <p className="text-white/40 font-medium text-center">Enterprise Dashboard Mockups Illustration<br/><span className="text-xs">Drop your Figma SVG here</span></p>
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
