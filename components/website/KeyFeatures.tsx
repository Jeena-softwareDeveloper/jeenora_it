"use client";

import React from 'react';
import { Shield, TrendingUp, Layers, Gauge, Headphones, RefreshCw, GitMerge, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function KeyFeatures() {
  const features = [
    {
      title: "Scalable Architecture",
      description: "Our systems are built to grow with your business — from 100 transactions per day to millions, without re-engineering.",
      icon: TrendingUp
    },
    {
      title: "End-to-End Security",
      description: "Role-based access control, data encryption, audit logs, and VAPT-ready infrastructure protect your most sensitive data.",
      icon: Shield
    },
    {
      title: "Process Automation",
      description: "Eliminate repetitive manual work. From auto-invoicing to EMI reminders, we automate the workflows that slow your team down.",
      icon: RefreshCw
    },
    {
      title: "High Performance",
      description: "Optimised database queries, caching layers, and CDN delivery ensure sub-second response times even under peak load.",
      icon: Gauge
    },
    {
      title: "Seamless Integration",
      description: "Connect payment gateways, ERPs, logistics APIs, and third-party tools — all through secure, well-documented APIs.",
      icon: GitMerge
    },
    {
      title: "Multi-Platform Delivery",
      description: "Web portals, Android apps, iOS apps, and desktop dashboards — all sharing the same backend, built once, deployed everywhere.",
      icon: Layers
    },
    {
      title: "Global Accessibility",
      description: "Multi-currency, multi-language, and multi-timezone support for businesses operating across regions and borders.",
      icon: Globe
    },
    {
      title: "24/7 Technical Support",
      description: "Dedicated support engineers, SLA-backed response times, and proactive monitoring so your operations never stop.",
      icon: Headphones
    }
  ];

  return (
    <section className="bg-primary py-10 md:py-14 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* Header Section */}
        <motion.div 
          className="text-center mb-10 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 relative inline-block">
            Built for Business. Designed for Scale.
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-white/50 rounded-full"></div>
          </h2>
          <p className="text-white/90 text-sm md:text-base leading-relaxed mt-3">
            Every software product we build is engineered around the outcomes your business needs most — speed, reliability, security, and the ability to scale without friction. These are not just features; they are our engineering principles.
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
