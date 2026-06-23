"use client";

import React from 'react';
import { AlertCircle, ClipboardCheck, Users, TrendingUp, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HrmsIntro() {
  return (
    <section className="relative bg-primary text-primary-foreground pt-12 pb-24 md:pb-32 mt-16 md:mt-[16rem] px-4 z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            className="space-y-8 relative z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-[2.75rem] font-bold leading-[1.2]">
              Architecting the future of
              <br />
              Enterprise Operations.
            </h2>
            
            <p className="text-white/90 text-sm md:text-base leading-[1.8] max-w-[500px]">
              We are not just a software agency; we are your digital transformation partners. Our custom enterprise solutions—ranging from complex billing software to multi-branch inventory management systems—enable growing businesses to automate their habitual operations. We eliminate data silos and deliver absolute visibility over your physical stores, restaurants, and wholesale networks on a single, secure dashboard.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <div className="bg-white rounded-lg px-6 py-3 flex items-center justify-center min-w-[160px] shadow-sm border-l-4 border-primary">
                <span className="text-slate-800 font-extrabold text-lg tracking-tight uppercase">
                  Inventory
                </span>
              </div>
              
              <div className="bg-white rounded-lg px-6 py-3 flex items-center justify-center min-w-[160px] shadow-sm border-l-4 border-[#ff6b00]">
                <span className="text-slate-800 font-extrabold text-lg tracking-tight uppercase">
                  E-Commerce
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Video Embed */}
          <motion.div 
            className="relative w-full aspect-[4/3] bg-[#232323] rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-start items-start p-6 text-white font-sans"
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-white mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-lg leading-none mb-2">Video unavailable</h3>
                <p className="text-sm text-gray-300 leading-snug">
                  This video is no longer available because the YouTube account
                  <br />
                  associated with this video has been closed.
                </p>
              </div>
            </div>
            
            {/* YouTube watermark mock */}
            <div className="absolute bottom-4 right-4 opacity-50">
              <div className="w-10 h-7 bg-white/20 rounded flex items-center justify-center">
                <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-white border-b-[5px] border-b-transparent ml-1" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* 3 Floating Cards */}
      <div className="w-full z-20 px-4 md:absolute md:left-0 md:translate-y-1/2 md:bottom-0 relative mt-12 pb-8 md:mt-0 md:pb-0">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <motion.div 
              className="bg-white rounded-[2rem] p-8 shadow-xl shadow-black/5 border border-gray-100 flex flex-col items-start text-left relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[100px] -z-10" />
              <div className="w-full flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
                  {/* Micro-UI: Dashboard / POS */}
                  <div className="w-6 h-6 border-2 border-primary rounded-md grid grid-cols-2 gap-0.5 p-0.5">
                    <div className="bg-primary/50 rounded-sm"></div>
                    <div className="bg-primary/50 rounded-sm"></div>
                    <div className="bg-primary rounded-sm col-span-2"></div>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-primary tracking-widest uppercase bg-primary/10 px-2 py-1 rounded-full">Architecture</span>
              </div>
              <h4 className="text-xl font-extrabold text-gray-900 mb-2">POS Systems</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                We deploy robust POS architectures capable of seamlessly managing unlimited retail and restaurant locations.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-[2rem] p-8 shadow-xl shadow-black/5 border border-gray-100 flex flex-col items-start text-left relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#ff6b00]/5 rounded-bl-[100px] -z-10" />
              <div className="w-full flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-[#ff6b00]/10 rounded-2xl flex items-center justify-center border border-[#ff6b00]/20">
                  {/* Micro-UI: Inventory Tracking Line */}
                  <div className="relative w-6 h-6">
                    <div className="absolute bottom-1 left-0 w-1.5 h-1.5 bg-[#ff6b00] rounded-full"></div>
                    <div className="absolute bottom-3 left-2 w-1.5 h-1.5 bg-[#ff6b00] rounded-full"></div>
                    <div className="absolute top-1 right-0 w-2 h-2 bg-[#ff6b00] rounded-full ring-2 ring-[#ff6b00]/30"></div>
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 24 24">
                      <path d="M3 18L10 12L15 15L21 6" fill="none" stroke="#ff6b00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-[#ff6b00] tracking-widest uppercase bg-[#ff6b00]/10 px-2 py-1 rounded-full">Logistics</span>
              </div>
              <h4 className="text-xl font-extrabold text-gray-900 mb-2">Smart Inventory</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Our dynamic inventory systems automatically trigger procurement and completely prevent costly stockouts.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-[2rem] p-8 shadow-xl shadow-black/5 border border-gray-100 flex flex-col items-start text-left relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#22c55e]/5 rounded-bl-[100px] -z-10" />
              <div className="w-full flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-[#22c55e]/10 rounded-2xl flex items-center justify-center border border-[#22c55e]/20">
                  {/* Micro-UI: Integration Nodes */}
                  <div className="relative w-6 h-6 flex items-center justify-center">
                    <div className="absolute top-0 left-1 w-2 h-2 bg-[#22c55e] rounded-full"></div>
                    <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#22c55e] rounded-full"></div>
                    <div className="absolute top-2 right-0 w-2.5 h-2.5 bg-[#22c55e] rounded-sm rotate-45"></div>
                    <div className="absolute top-1.5 left-2.5 w-3 h-0.5 bg-[#22c55e]/50 rotate-45"></div>
                    <div className="absolute bottom-1.5 left-1.5 w-3 h-0.5 bg-[#22c55e]/50 -rotate-45"></div>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-[#22c55e] tracking-widest uppercase bg-[#22c55e]/10 px-2 py-1 rounded-full">Integration</span>
              </div>
              <h4 className="text-xl font-extrabold text-gray-900 mb-2">Unified Operations</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                We unify all core operations including B2B e-commerce, complex tax billing, logistics, and analytics.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
