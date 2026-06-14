"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Users, MonitorSmartphone } from "lucide-react";

export default function AnimatedHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative pt-0 pb-12 bg-primary z-0 rounded-br-[5rem] lg:rounded-br-[10rem]">
      
      {/* Top merge gradient: Perfectly matches the Navbar horizontally, but fades out vertically into the solid blue hero */}
      <div 
        className="absolute top-0 left-0 w-full h-64 bg-gradient-to-r from-white from-10% via-primary via-50% to-primary pointer-events-none -z-10 hidden md:block" 
        style={{ maskImage: 'linear-gradient(to bottom, black, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)' }} 
      />

      {/* Subtle Background Pattern (Overlapping Circles) */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-20 right-20 w-64 h-64 border-[30px] border-black/5 rounded-full" />
        <div className="absolute bottom-40 right-1/4 w-96 h-96 border-[40px] border-black/5 rounded-full" />
        {/* Dot pattern matrix */}
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
            <motion.h1 variants={itemVariants} className="text-3xl md:text-[2.2rem] font-medium tracking-tight text-white leading-[1.3] max-w-xl">
              Automate Operations. <br className="hidden md:block"/>
              Scale Your Enterprise with <br className="hidden md:block"/>
              intelligent software solutions for <br className="hidden md:block"/>
              <span className="font-bold">Total Business Management.</span>
            </motion.h1>
            
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="h-10 px-8 bg-gray-900 text-white font-bold text-xs tracking-wider flex items-center justify-center hover:bg-gray-800 transition-colors shadow-sm">
                CONSULT EXPERT
              </Link>
              <Link href="#services" className="h-10 px-8 bg-white text-gray-900 font-bold text-xs tracking-wider flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm">
                EXPLORE SOLUTIONS
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative w-full h-[300px] md:h-[400px] lg:h-[550px] lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <Image 
                src="/mockup-final.png" 
                alt="Logsafe App Display" 
                fill 
                className="object-contain scale-[1.15]" 
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
              className="bg-white rounded-[2rem] p-8 flex flex-col justify-between min-h-[260px] shadow-sm border-l-[6px] border-b-[6px] border-[#22c55e]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 bg-[#22c55e] rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <span className="text-3xl font-extrabold text-[#22c55e]">01.</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">Advanced Billing Software and <br/> Tax Compliance</h3>
              <p className="text-xs text-gray-500 mb-5">Automate complex invoicing workflows, eliminate manual reconciliation, and drive revenue growth effortlessly.</p>
              
              <div className="flex items-center gap-3">
                <Link href="/contact" className="h-9 px-5 bg-primary text-primary-foreground font-bold text-[11px] tracking-wider rounded-full flex items-center justify-center hover:opacity-90 transition-opacity">
                  GET IN TOUCH
                </Link>
                <Link href="/read-more" className="h-9 px-5 bg-transparent text-primary border border-primary font-bold text-[11px] tracking-wider rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  READ MORE
                </Link>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-[2rem] p-8 flex flex-col justify-between min-h-[260px] shadow-sm border-l-[6px] border-b-[6px] border-[#ff6b00]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }} 
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 bg-[#ff6b00] rounded-xl flex items-center justify-center">
                  <MonitorSmartphone className="w-5 h-5 text-white" />
                </div>
                <span className="text-3xl font-extrabold text-[#ff6b00]">02.</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">Multi-Branch Inventory Sync & <br/> Real-Time Analytics</h3>
              <p className="text-xs text-gray-500 mb-5">Centralize operations to prevent stockouts and gain absolute visibility over unlimited physical locations.</p>

              <div className="flex items-center gap-3">
                <Link href="/contact" className="h-9 px-5 bg-primary text-primary-foreground font-bold text-[11px] tracking-wider rounded-full flex items-center justify-center hover:opacity-90 transition-opacity">
                  GET IN TOUCH
                </Link>
                <Link href="/read-more" className="h-9 px-5 bg-transparent text-primary border border-primary font-bold text-[11px] tracking-wider rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  READ MORE
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
