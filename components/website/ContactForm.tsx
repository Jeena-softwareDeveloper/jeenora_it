"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactForm() {
  return (
    <section className="py-10 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#f59e0b] font-medium text-sm mb-3 tracking-wide uppercase">SCHEDULE A CONSULTATION</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative inline-block pb-4">
            Discuss Your Architecture
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-[3px] bg-primary rounded-full"></div>
          </h2>
          <p className="text-gray-500 mt-4 text-sm md:text-base">
            We will respond to your message as soon as possible.
          </p>
        </motion.div>

        {/* Content Container */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Left Form Area */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full px-4 py-3 rounded-md border border-gray-200 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm placeholder:text-gray-400"
                />
                <input 
                  type="email" 
                  placeholder="Email Id" 
                  className="w-full px-4 py-3 rounded-md border border-gray-200 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm placeholder:text-gray-400"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full px-4 py-3 rounded-md border border-gray-200 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm placeholder:text-gray-400"
                />
                <div className="relative">
                  <select 
                    className="w-full px-4 py-3 rounded-md border border-gray-200 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm text-gray-500 appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled>Enterprise Solutions</option>
                    <option value="billing">Billing & Tax Software</option>
                    <option value="inventory">Multi-Branch Inventory</option>
                    <option value="custom">Custom ERP Development</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>
              <div>
                <textarea 
                  placeholder="Comments" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-gray-200 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm placeholder:text-gray-400 resize-none"
                ></textarea>
              </div>
              <div className="flex justify-center md:justify-end pt-2">
                <button 
                  type="submit" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 rounded-md transition-colors w-full md:w-auto shadow-sm"
                >
                  Submit
                </button>
              </div>
            </form>
          </motion.div>

          {/* Right Contact Info Area */}
          <motion.div 
            className="lg:w-[380px] flex flex-col pt-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-8 border-b border-gray-100 pb-4">NexCore Systems</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <div className="text-sm text-gray-500 leading-relaxed pt-1">
                  Cottage No.4 Bangalore Palace, Vasanth Nagar,<br />
                  Bangalore – 560052
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                  <Phone className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <div className="text-sm text-gray-500 leading-relaxed pt-1 flex flex-col space-y-1">
                  <span>080-29905860</span>
                  <span>+91 96067 99418</span>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                  <Mail className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <div className="text-sm text-gray-500 leading-relaxed pt-3">
                  enterprise@nexcoresystems.com
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
