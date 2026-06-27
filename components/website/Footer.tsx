"use client";

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, ChevronUp } from 'lucide-react';
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
                 <img src="/logo192.png" alt="Jeenora IT Solutions Logo" className="h-[40px] w-auto object-contain scale-[1.3] origin-left ml-2" />
               </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed pr-4">
              Jeenora IT Solutions — your trusted software development partner for MFI platforms, POS systems, custom ERP, mobile apps, and enterprise digital transformation.
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
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </motion.div>

          {/* 3. Services */}
          <motion.div 
            className="flex flex-col space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold text-lg border-l-2 border-[#eab308] pl-3 h-6 flex items-center">
              Our Services
            </h4>
            <ul className="flex flex-col space-y-4 text-white/80 text-sm">
              <li><Link href="#services" className="hover:text-white transition-colors">MFI Software</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Restaurant POS</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">ERP & CRM Development</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Mobile App Development</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">E-Commerce Solutions</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Cloud Deployment</Link></li>
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
              Contact Us
            </h4>
            <div className="flex flex-col space-y-5 text-white/80 text-sm">
              <div className="flex items-start space-x-3">
                <div className="bg-white p-1.5 rounded text-primary mt-0.5 shrink-0">
                  <MapPin size={14} />
                </div>
                <span className="leading-relaxed">Cottage No.4 Bangalore Palace,<br/>Vasanth Nagar, Bangalore – 560052</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-white p-1.5 rounded text-primary mt-1 shrink-0">
                  <Phone size={16} fill="currentColor" />
                </div>
                <div className="flex flex-col space-y-1">
                  <span>080-29905860</span>
                  <span>+91 96067 99418</span>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-white p-1.5 rounded text-primary shrink-0">
                  <Mail size={16} />
                </div>
                <div className="flex flex-col space-y-1">
                  <span>info@jeenora.com</span>
                  <span>support@jeenora.com</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 5. App Downloads & Hours */}
          <motion.div 
            className="lg:col-span-1 flex flex-col space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="text-white font-semibold text-lg border-l-2 border-[#eab308] pl-3 h-6 flex items-center">
              Business Hours
            </h4>
            <p className="text-white/60 text-sm leading-relaxed">
              We are available Monday through Saturday. Our support team responds within 4 business hours for all critical requests.
            </p>
            <div className="bg-white/10 rounded-xl p-4 border border-white/10 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white/70">Mon – Fri</span>
                <span className="text-white font-medium">9:00 AM – 7:00 PM</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/70">Saturday</span>
                <span className="text-white font-medium">9:00 AM – 5:00 PM</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/70">Emergency</span>
                <span className="text-green-400 font-medium">24/7 Support</span>
              </div>
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
            Copyright © 2025 Jeenora IT Solutions. All rights reserved. Designed & Developed by <span className="text-primary font-semibold bg-white/10 px-1 rounded">Jeenora</span>
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
