"use client";

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary pt-12 md:pt-16 pb-6 rounded-tr-[4rem] md:rounded-tr-[8rem] relative mt-10">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10 mb-12 border-b border-white/10 pb-10">
          
          {/* 1. Logo & About */}
          <motion.div 
            className="lg:col-span-1 flex flex-col space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-start">
               {/* Jeenora Logo */}
               <div className="bg-white p-2 pr-6 rounded-xl mb-4 flex items-center justify-center shadow-md overflow-hidden">
                 <img src="/logo192.png" alt="Jeenora Logo" className="h-[40px] w-auto object-contain scale-[1.3] origin-left ml-2" />
               </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed pr-4">
              Jeenora is an enterprise software company specializing in custom billing architectures, advanced inventory management, and complete operational dashboards.
            </p>
          </motion.div>

          {/* 2. Quick Links */}
          <motion.div 
            className="flex flex-col space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold text-lg border-l-2 border-[#eab308] pl-3 h-6 flex items-center">
              Quick Links
            </h4>
            <ul className="flex flex-col space-y-4 text-white/80 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Products</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">FAQ's</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </motion.div>

          {/* 3. Products */}
          <motion.div 
            className="flex flex-col space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold text-lg border-l-2 border-[#eab308] pl-3 h-6 flex items-center">
              Products
            </h4>
            <ul className="flex flex-col space-y-4 text-white/80 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Billing & Tax</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Inventory Control</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Multi-Branch POS</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Custom Development</Link></li>
            </ul>
          </motion.div>

          {/* 4. Contact Information */}
          <motion.div 
            className="flex flex-col space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-white font-semibold text-lg border-l-2 border-[#eab308] pl-3 h-6 flex items-center">
              Contact Information
            </h4>
            <div className="flex flex-col space-y-6 text-white/80 text-sm">
              <div className="flex items-start space-x-3">
                <div className="bg-white p-1.5 rounded text-primary mt-1 shrink-0">
                  <Phone size={16} fill="currentColor" />
                </div>
                <div className="flex flex-col space-y-2">
                  <span>080-29905860</span>
                  <span>080-29905862</span>
                  <span>080-29905863</span>
                  <span>+91 96067 99418</span>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-white p-1.5 rounded text-primary shrink-0">
                  <Mail size={16} />
                </div>
                <div className="flex flex-col space-y-2">
                  <span>info@logsafe.in</span>
                  <span>support@logsafe.in</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 5. Support & Downloads */}
          <motion.div 
            className="lg:col-span-1 flex flex-col space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="text-white font-semibold text-lg border-l-2 border-[#eab308] pl-3 h-6 flex items-center">
              Support & Downloads
            </h4>
            <p className="text-white/60 text-sm leading-relaxed">
              Our unified systems help operational directors manage multi-branch logistics, automate critical workflows, and access real-time financial reporting effortlessly.
            </p>
            <div className="flex flex-col space-y-3 mt-2">
              <button className="bg-black hover:bg-gray-900 transition-colors rounded-xl flex items-center px-4 py-2 w-[160px] border border-white/10">
                <div className="flex-shrink-0 mr-3">
                  <svg viewBox="0 0 512 512" className="w-6 h-6 text-white"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] text-white/80 font-medium uppercase leading-none mb-1">Get it on</span>
                  <span className="text-sm text-white font-semibold leading-none">Google Play</span>
                </div>
              </button>

              <button className="bg-black hover:bg-gray-900 transition-colors rounded-xl flex items-center px-4 py-2 w-[160px] border border-white/10">
                <div className="flex-shrink-0 mr-3">
                  <svg viewBox="0 0 384 512" className="w-6 h-6 text-white"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] text-white/80 font-medium uppercase leading-none mb-1">Download on the</span>
                  <span className="text-sm text-white font-semibold leading-none">App Store</span>
                </div>
              </button>
            </div>
          </motion.div>
          
        </div>

        {/* Bottom Footer Section */}
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          
          {/* Social Icons */}
          <div className="flex items-center space-x-6 text-white">
            <Link href="#" className="hover:text-yellow-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </Link>
            <Link href="#" className="hover:text-yellow-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </Link>
            <Link href="#" className="hover:text-yellow-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
            </Link>
            <Link href="#" className="hover:text-yellow-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </Link>
            <Link href="#" className="hover:text-yellow-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </Link>
          </div>

          {/* Copyright text */}
          <div className="text-white/80 text-sm text-center md:text-right flex-1">
            Copyright © 2026 Jeenora. All rights reserved. Designed by <span className="text-primary font-semibold bg-white/10 px-1 rounded">Jeenora</span>
          </div>

          {/* Scroll to Top Button */}
          <button 
            onClick={scrollToTop}
            className="bg-[#d97706] hover:bg-[#b45309] transition-colors text-white p-2 rounded-md ml-4 hover:-translate-y-1 transform duration-300"
          >
            <ChevronUp size={20} />
          </button>
          
        </motion.div>

      </div>
    </footer>
  );
}
