"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function OurClientele() {
  const clients = [
    { name: "RetailMax" },
    { name: "GrandHotels" },
    { name: "PrimeLogistics" },
    { name: "FreshMart" },
    { name: "ApexManufacturing" },
    { name: "CityDine" },
  ];

  // Repeat the array so the marquee loops seamlessly
  const repeatedClients = [...clients, ...clients, ...clients];

  return (
    <section className="bg-[#f2f7f6] py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0f3f3b] relative inline-block">
            Trusted by Industry Leaders
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-[#0B7A6A] rounded-full"></div>
          </h2>
        </div>
      </div>

      {/* Infinite Scroll Carousel */}
      <div className="relative w-full overflow-hidden flex">
        {/* Fade gradients on edges for smoother look */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#f2f7f6] to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#f2f7f6] to-transparent z-10"></div>

        <motion.div 
          className="flex items-center gap-8 md:gap-16 w-max px-8"
          animate={{ x: ["0%", "-33.333333%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
          {repeatedClients.map((client, idx) => (
            <div 
              key={idx} 
              className="h-20 w-[180px] shrink-0 bg-white rounded-lg border border-gray-200 shadow-sm flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 hover:shadow-md cursor-pointer"
            >
               <span className="text-gray-500 font-bold text-center text-sm">{client.name}<br/><span className="text-[10px] font-normal">Logo SVG</span></span>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
