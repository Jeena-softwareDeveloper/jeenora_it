"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { EASE_OUT, hoverLift } from "@/lib/animations";

export default function AnimatedHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
  };

  return (
    <section className="relative pt-0 pb-12 bg-primary z-0 overflow-hidden rounded-br-[2.5rem] sm:rounded-br-[5rem] lg:rounded-br-[10rem]">
      
      {/* Top merge gradient */}
      <div 
        className="absolute top-0 left-0 w-full h-64 bg-gradient-to-r from-white from-10% via-primary via-50% to-primary pointer-events-none -z-10 hidden md:block" 
        style={{ maskImage: 'linear-gradient(to bottom, black, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)' }} 
      />

      {/* Subtle Background Pattern */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-20 right-20 w-64 h-64 border-[30px] border-black/5 rounded-full" />
        <div className="absolute bottom-40 right-1/4 w-96 h-96 border-[40px] border-black/5 rounded-full" />
        <div className="absolute top-1/4 left-[45%] w-32 h-32" style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.1) 2px, transparent 2px)', backgroundSize: '16px 16px' }} />
      </div>

      {/* Dark blue bottom-left overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#0044CC] via-[#0044CC]/40 to-transparent pointer-events-none -z-10 rounded-br-[5rem] lg:rounded-br-[10rem]" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10 pt-10 md:pt-0 md:-mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center mb-0">
          
          <motion.div 
            className="space-y-4 relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={itemVariants} className="text-[1.7rem] sm:text-3xl md:text-[2.2rem] font-medium tracking-tight text-white leading-[1.25] sm:leading-[1.3] max-w-xl">
              Build Faster. Scale Smarter. <br className="hidden md:block"/>
              Deliver More with <br className="hidden md:block"/>
              <span className="font-bold">Enterprise-Grade Software Solutions.</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-white/80 text-sm md:text-base leading-relaxed max-w-md">
              From MFI & POS Software to Custom ERP, Mobile Apps, and Cloud Deployment — we engineer solutions that automate operations, drive revenue, and eliminate inefficiency.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
                <Link href="/contact" className="h-11 sm:h-10 px-8 bg-gray-900 text-white font-bold text-xs tracking-wider flex items-center justify-center hover:bg-gray-800 transition-colors shadow-sm w-full">
                  SCHEDULE CONSULTATION
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
                <Link href="#services" className="h-11 sm:h-10 px-8 bg-white text-gray-900 font-bold text-xs tracking-wider flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm w-full">
                  EXPLORE SERVICES
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative w-full h-[260px] sm:h-[300px] md:h-[400px] lg:h-[550px] overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE_OUT }}
          >
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <Image 
                src="/mockup-final.png" 
                alt="Jeenora Software Platform" 
                fill 
                className="object-contain scale-100 sm:scale-[1.08] md:scale-[1.15]" 
                priority 
                unoptimized
              />
            </motion.div>
          </motion.div>
        
        </div>
      </div>

      <div className="w-full z-20 px-4 md:absolute md:-bottom-48 left-0 relative mt-4 pb-12 md:mt-0 md:pb-0">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <motion.div 
              className="bg-white rounded-[1.75rem] sm:rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between min-h-[220px] sm:min-h-[260px] shadow-sm border-l-[6px] border-b-[6px] border-[#22c55e]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: EASE_OUT }}
              whileHover={hoverLift}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-[#22c55e]/10 rounded-xl flex items-center justify-center border border-[#22c55e]/20 overflow-hidden relative">
                  <div className="w-6 h-8 bg-white shadow-sm rounded-sm flex flex-col p-1.5 gap-1 translate-y-1">
                    <div className="w-full h-1 bg-gray-200 rounded-full"></div>
                    <div className="w-3/4 h-1 bg-gray-200 rounded-full"></div>
                    <div className="mt-auto w-full flex justify-between items-center">
                      <div className="w-2 h-2 bg-[#22c55e] rounded-full"></div>
                      <div className="w-3 h-1 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">Restaurant POS & MFI <br/>Software Built to Scale</h3>
              <p className="text-xs text-gray-500 mb-5">Automate billing, manage tables, and handle loan disbursements with precision — purpose-built for your industry vertical.</p>
              
              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2 sm:gap-3">
                <Link href="/contact" className="h-9 px-4 sm:px-5 bg-primary text-primary-foreground font-bold text-[10px] sm:text-[11px] tracking-wider rounded-full flex items-center justify-center hover:opacity-90 transition-opacity whitespace-nowrap">
                  REQUEST DEMO
                </Link>
                <Link href="#services" className="h-9 px-4 sm:px-5 bg-transparent text-primary border border-primary font-bold text-[10px] sm:text-[11px] tracking-wider rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors whitespace-nowrap">
                  LEARN MORE
                </Link>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-[1.75rem] sm:rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between min-h-[220px] sm:min-h-[260px] shadow-sm border-l-[6px] border-b-[6px] border-[#ff6b00]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6, ease: EASE_OUT }} 
              whileHover={hoverLift}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-[#ff6b00]/10 rounded-xl flex items-center justify-center border border-[#ff6b00]/20 overflow-hidden relative">
                  <div className="flex items-end gap-1 w-6 h-6">
                    <div className="w-1.5 h-3 bg-[#ff6b00]/40 rounded-t-sm"></div>
                    <div className="w-1.5 h-4 bg-[#ff6b00]/60 rounded-t-sm"></div>
                    <div className="w-1.5 h-6 bg-[#ff6b00] rounded-t-sm"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">Custom ERP, CRM & <br/> Mobile App Development</h3>
              <p className="text-xs text-gray-500 mb-5">End-to-end development of Android, iOS, and cross-platform apps with cloud deployment and API integration for maximum business agility.</p>

              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2 sm:gap-3">
                <Link href="/contact" className="h-9 px-4 sm:px-5 bg-primary text-primary-foreground font-bold text-[10px] sm:text-[11px] tracking-wider rounded-full flex items-center justify-center hover:opacity-90 transition-opacity whitespace-nowrap">
                  GET STARTED
                </Link>
                <Link href="#services" className="h-9 px-4 sm:px-5 bg-transparent text-primary border border-primary font-bold text-[10px] sm:text-[11px] tracking-wider rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors whitespace-nowrap">
                  VIEW SERVICES
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
