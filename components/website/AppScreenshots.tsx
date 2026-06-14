"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function AppScreenshots() {
  return (
    <section className="bg-[#fcfdfd] py-12 relative overflow-hidden">
      {/* Background subtle elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-50/50 rounded-full blur-3xl"></div>
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(var(--primary) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#f59e0b] font-medium text-sm mb-3 tracking-wide">Omnichannel Ecosystem</p>
          <h2 className="text-4xl md:text-[2.75rem] font-bold text-primary relative inline-block pb-4">
            Unified Business Dashboards
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-[3px] bg-primary rounded-full"></div>
          </h2>
        </motion.div>

        {/* Mockups Container */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 lg:gap-8 mt-12">
          
          {/* Left Phone Placeholder (Map) */}
          <motion.div 
            className="w-[240px] h-[460px] bg-gray-100 border-[8px] border-white rounded-[2.5rem] shadow-xl flex flex-col items-center justify-center relative overflow-hidden"
            initial={{ opacity: 0, x: 100, y: 50, rotate: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 32, rotate: -2 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
            whileHover={{ rotate: 0, y: 0, transition: { duration: 0.3 } }}
          >
             {/* Notch */}
             <div className="absolute top-0 w-32 h-6 bg-white rounded-b-3xl"></div>
             <div className="text-gray-500 font-medium text-center px-4 z-10 border-2 border-dashed border-gray-300 p-4 rounded-xl">
                 Left Screen SVG<br/><span className="text-xs font-normal">Inventory / POS</span>
             </div>
          </motion.div>

          {/* Center Phone Placeholder (Main App Dark Teal) */}
          <motion.div 
            className="w-[260px] h-[500px] bg-gray-900 border-[8px] border-black rounded-[2.5rem] shadow-2xl flex flex-col items-center justify-center z-20 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, type: "spring" }}
            whileHover={{ y: -16, transition: { duration: 0.3 } }}
          >
             {/* Notch */}
             <div className="absolute top-0 w-40 h-7 bg-black rounded-b-3xl"></div>
             <div className="text-white/80 font-medium text-center px-4 z-10 border-2 border-dashed border-white/30 p-4 rounded-xl">
                 Center Screen SVG<br/><span className="text-xs font-normal">Financial Analytics</span>
             </div>
          </motion.div>

          {/* Right Phone Placeholder (Log Entries Light Teal) */}
          <motion.div 
            className="w-[240px] h-[460px] bg-gray-100 border-[8px] border-white rounded-[2.5rem] shadow-xl flex flex-col items-center justify-center relative overflow-hidden"
            initial={{ opacity: 0, x: -100, y: 50, rotate: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 32, rotate: 2 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
            whileHover={{ rotate: 0, y: 0, transition: { duration: 0.3 } }}
          >
             {/* Notch */}
             <div className="absolute top-0 w-32 h-6 bg-white rounded-b-3xl"></div>
             <div className="text-gray-500 font-medium text-center px-4 z-10 border-2 border-dashed border-gray-300 p-4 rounded-xl">
                 Right Screen SVG<br/><span className="text-xs font-normal">Multi-Branch Sync</span>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
