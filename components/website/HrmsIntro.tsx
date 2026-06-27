"use client";

import React from 'react';
import { Code2, Smartphone, Globe, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { EASE_OUT, hoverLift } from '@/lib/animations';

export default function HrmsIntro() {
  return (
    <section className="relative bg-primary text-primary-foreground pt-10 pb-10 sm:pt-12 sm:pb-12 md:pb-0 mt-24 sm:mt-32 md:mt-[16rem] px-4 sm:px-6 z-10 overflow-hidden">
      <div className="container mx-auto max-w-6xl w-full min-w-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-16 items-center min-w-0">
          
          {/* Left Content */}
          <motion.div 
            className="space-y-6 sm:space-y-8 relative z-10 min-w-0 w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-[2.75rem] font-bold leading-[1.2]">
              Your Technology Partner
              <br />
              for Every Business Challenge.
            </h2>
            
            <p className="text-white/90 text-sm md:text-base leading-[1.8] max-w-[500px]">
              We are not just a software company — we are your long-term digital transformation partner. From Microfinance (MFI) platforms and Restaurant POS systems to Custom ERP, B2B portals, and cross-platform mobile apps, we engineer solutions that eliminate inefficiency, reduce costs, and power sustainable growth. Every line of code we write is built to solve a real business problem.
            </p>

            <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-2 pb-2 md:pb-0 w-full">
              <div className="bg-white rounded-lg px-2 sm:px-5 py-2.5 sm:py-3 flex items-center justify-center shadow-sm border-l-4 border-primary min-w-0">
                <span className="text-slate-800 font-extrabold text-[10px] sm:text-sm md:text-lg tracking-tight uppercase text-center leading-tight">
                  Enterprise
                </span>
              </div>
              
              <div className="bg-white rounded-lg px-2 sm:px-5 py-2.5 sm:py-3 flex items-center justify-center shadow-sm border-l-4 border-[#ff6b00] min-w-0">
                <span className="text-slate-800 font-extrabold text-[10px] sm:text-sm md:text-lg tracking-tight uppercase text-center leading-tight">
                  Scalable
                </span>
              </div>

              <div className="bg-white rounded-lg px-2 sm:px-5 py-2.5 sm:py-3 flex items-center justify-center shadow-sm border-l-4 border-[#22c55e] min-w-0">
                <span className="text-slate-800 font-extrabold text-[10px] sm:text-sm md:text-lg tracking-tight uppercase text-center leading-tight">
                  Secure
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Company Highlights */}
          <motion.div 
            className="relative w-full min-w-0 bg-[#0a2244] rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-center items-start p-5 sm:p-8 text-white font-sans border border-white/10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE_OUT }}
          >
            <div className="w-full space-y-5">
              <h3 className="font-bold text-lg sm:text-xl text-white mb-4 sm:mb-6 border-b border-white/10 pb-4">Why Businesses Choose Jeenora</h3>
              {[
                { icon: Code2, title: "Full-Stack Development", desc: "Web, mobile, API & cloud under one roof" },
                { icon: Smartphone, title: "Android · iOS · Cross-Platform", desc: "Native performance, single codebase" },
                { icon: Globe, title: "E-Commerce & B2B Portals", desc: "Revenue-driving digital storefronts" },
                { icon: ShieldCheck, title: "99.9% Uptime SLA", desc: "Enterprise-grade reliability & support" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{item.title}</p>
                    <p className="text-white/60 text-xs mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* 3 feature cards — normal flow so they never overlap Enterprise/Scalable/Secure badges */}
        <div className="w-full min-w-0 z-20 relative mt-8 sm:mt-12 md:mt-16 lg:mt-20 md:-mb-28 lg:-mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <motion.div 
              className="bg-white rounded-[1.75rem] sm:rounded-[2rem] p-6 sm:p-8 shadow-xl shadow-black/5 border border-gray-100 flex flex-col items-start text-left relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: EASE_OUT }}
              whileHover={hoverLift}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[100px] -z-10" />
              <div className="w-full flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
                  <div className="w-6 h-6 border-2 border-primary rounded-md grid grid-cols-2 gap-0.5 p-0.5">
                    <div className="bg-primary/50 rounded-sm"></div>
                    <div className="bg-primary/50 rounded-sm"></div>
                    <div className="bg-primary rounded-sm col-span-2"></div>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-primary tracking-widest uppercase bg-primary/10 px-2 py-1 rounded-full">Software</span>
              </div>
              <h4 className="text-xl font-extrabold text-gray-900 mb-2">MFI & POS Systems</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Purpose-built Microfinance and Point-of-Sale software for restaurants, retail chains, and NBFCs — handling high transaction volumes with zero downtime.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-[1.75rem] sm:rounded-[2rem] p-6 sm:p-8 shadow-xl shadow-black/5 border border-gray-100 flex flex-col items-start text-left relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4, ease: EASE_OUT }}
              whileHover={hoverLift}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#ff6b00]/5 rounded-bl-[100px] -z-10" />
              <div className="w-full flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-[#ff6b00]/10 rounded-2xl flex items-center justify-center border border-[#ff6b00]/20">
                  <div className="relative w-6 h-6">
                    <div className="absolute bottom-1 left-0 w-1.5 h-1.5 bg-[#ff6b00] rounded-full"></div>
                    <div className="absolute bottom-3 left-2 w-1.5 h-1.5 bg-[#ff6b00] rounded-full"></div>
                    <div className="absolute top-1 right-0 w-2 h-2 bg-[#ff6b00] rounded-full ring-2 ring-[#ff6b00]/30"></div>
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 24 24">
                      <path d="M3 18L10 12L15 15L21 6" fill="none" stroke="#ff6b00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-[#ff6b00] tracking-widest uppercase bg-[#ff6b00]/10 px-2 py-1 rounded-full">Mobile</span>
              </div>
              <h4 className="text-xl font-extrabold text-gray-900 mb-2">App Development</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Android, iOS, and cross-platform mobile applications built with modern frameworks for exceptional user experience and performance at scale.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-[1.75rem] sm:rounded-[2rem] p-6 sm:p-8 shadow-xl shadow-black/5 border border-gray-100 flex flex-col items-start text-left relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.5, ease: EASE_OUT }}
              whileHover={hoverLift}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#22c55e]/5 rounded-bl-[100px] -z-10" />
              <div className="w-full flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-[#22c55e]/10 rounded-2xl flex items-center justify-center border border-[#22c55e]/20">
                  <div className="relative w-6 h-6 flex items-center justify-center">
                    <div className="absolute top-0 left-1 w-2 h-2 bg-[#22c55e] rounded-full"></div>
                    <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#22c55e] rounded-full"></div>
                    <div className="absolute top-2 right-0 w-2.5 h-2.5 bg-[#22c55e] rounded-sm rotate-45"></div>
                    <div className="absolute top-1.5 left-2.5 w-3 h-0.5 bg-[#22c55e]/50 rotate-45"></div>
                    <div className="absolute bottom-1.5 left-1.5 w-3 h-0.5 bg-[#22c55e]/50 -rotate-45"></div>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-[#22c55e] tracking-widest uppercase bg-[#22c55e]/10 px-2 py-1 rounded-full">Cloud</span>
              </div>
              <h4 className="text-xl font-extrabold text-gray-900 mb-2">Cloud & API Integration</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Secure cloud deployment, robust API development, and third-party integrations that connect your entire digital ecosystem into one unified platform.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
