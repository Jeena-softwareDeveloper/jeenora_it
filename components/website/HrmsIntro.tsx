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
              className="bg-white rounded-[2rem] p-8 shadow-xl shadow-black/5 border border-gray-100 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <p className="text-gray-500 text-sm leading-relaxed px-2">
                We deploy robust POS architectures capable of seamlessly managing unlimited retail and restaurant locations.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-[2rem] p-8 shadow-xl shadow-black/5 border border-gray-100 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-primary-foreground" />
              </div>
              <p className="text-gray-500 text-sm leading-relaxed px-2">
                Our dynamic inventory systems automatically trigger procurement and completely prevent costly stockouts.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-[2rem] p-8 shadow-xl shadow-black/5 border border-gray-100 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                <Layers className="w-8 h-8 text-primary-foreground" />
              </div>
              <p className="text-gray-500 text-sm leading-relaxed px-2">
                We unify all core operations including B2B e-commerce, complex tax billing, logistics, and analytics.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
