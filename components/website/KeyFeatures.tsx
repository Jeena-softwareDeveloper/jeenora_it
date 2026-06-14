"use client";

import React from 'react';
import { Map, ScanFace, Users, Cloud, FileSignature, Presentation, LayoutDashboard, Headset } from 'lucide-react';
import { motion } from 'framer-motion';

export default function KeyFeatures() {
  const features = [
    {
      title: "Automated Reconciliation",
      description: "Payments flow directly into your ledger. Say goodbye to manual bank reconciliations and complex taxation matching.",
      icon: Map
    },
    {
      title: "Operational Efficiency",
      description: "Automate habitual administrative tasks across all departments, cutting down manual data entry by up to 80%.",
      icon: ScanFace
    },
    {
      title: "Real-Time Inventory Control",
      description: "Maintain accurate stock visibility across unlimited physical locations and prevent costly stockouts automatically.",
      icon: Users
    },
    {
      title: "Revenue Growth",
      description: "Accelerate collections with integrated payment links and uncover new revenue streams through actionable data insights.",
      icon: Cloud
    },
    {
      title: "Multi-Branch Visibility",
      description: "Consolidate operations from hundreds of physical retail stores or warehouses into a single unified dashboard.",
      icon: FileSignature
    },
    {
      title: "Business Analytics",
      description: "Generate deep financial reports and operational metrics instantly, empowering executives to make data-driven decisions.",
      icon: Presentation
    },
    {
      title: "Digital Transformation",
      description: "Migrate seamlessly from legacy ERPs to modern, fast, cloud-based architectures designed specifically for your workflows.",
      icon: LayoutDashboard
    },
    {
      title: "Enterprise-Grade Reliability",
      description: "Built on highly secure, 99.9% uptime infrastructure capable of handling high-volume transaction loads flawlessly.",
      icon: Headset
    }
  ];

  return (
    <section className="bg-primary py-12 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 relative inline-block">
            Key Features and Benefits:
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-white/50 rounded-full"></div>
          </h2>
          <p className="text-white/90 text-sm md:text-base leading-relaxed mt-6">
            Our custom enterprise software offers an array of powerful capabilities that can revolutionize how you manage operations and streamline
            complex administrative processes across all your locations. Core business outcomes include:
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx} 
              className="bg-[#fcfdfd] rounded-2xl p-6 shadow-xl flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (idx % 4) * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="mb-5">
                <feature.icon className="w-10 h-10 text-primary stroke-[1.5]" />
              </div>
              <h3 className="text-gray-900 font-bold text-lg leading-tight mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
