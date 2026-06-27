"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ImageIcon } from 'lucide-react';
import { EASE_OUT } from '@/lib/animations';

// To add a client photo: set `photo` to its path (e.g. "/clients/arjun.jpg").
// While empty, a clean initials avatar is shown automatically.
const testimonials = [
  {
    name: "Arjun Mehta",
    role: "Director of Operations",
    company: "National Supermarts",
    photo: "",
    content: "The multi-branch POS and inventory system completely transformed how we operate. We now have real-time stock visibility across all 38 retail locations — something we couldn't achieve in 5 years with our previous vendor.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Chief Financial Officer",
    company: "Grand Hotel Chain",
    photo: "",
    content: "Their custom billing software cut our month-end reconciliation from 3 days to under 2 hours. The GST compliance engine alone saves us ₹4 lakhs a year in accounting fees. The ROI was visible within the first quarter.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    role: "Managing Director",
    company: "Apex Microfinance",
    photo: "",
    content: "The MFI software they built handles our entire loan lifecycle — from application to disbursement to EMI collection. It is stable, secure, and our field agents love the mobile app. Highly recommended.",
    rating: 5,
  },
  {
    name: "Sunita Rao",
    role: "Head of Technology",
    company: "FreshMart Retail",
    photo: "",
    content: "We approached them for a B2B e-commerce portal and they delivered beyond expectations. The dealer login, custom pricing, and inventory sync works flawlessly. Our order processing time dropped by 60%.",
    rating: 5,
  },
  {
    name: "Mohammed Farouk",
    role: "CEO",
    company: "Falcon Logistics",
    photo: "",
    content: "The custom ERP and mobile app they built for our logistics team is outstanding. Tracking deliveries, managing dispatch, and generating client invoices — all in one system. Support is fast and proactive.",
    rating: 5,
  },
  {
    name: "Deepa Nair",
    role: "Restaurant Owner",
    company: "Spice Garden Chain",
    photo: "",
    content: "Running 8 restaurant branches used to be a nightmare. Now with their POS and centralised dashboard, I can see daily sales, stock levels, and staff performance from my phone. Game changer.",
    rating: 5,
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

// To add a real logo: set `logo` to its path (e.g. "/clients/supermarts.png").
// While empty, a clean logo-ready slot with the company name is shown.
const clients = [
  { name: "National Supermarts", logo: "" },
  { name: "Grand Hotel Chain", logo: "" },
  { name: "Apex Microfinance", logo: "" },
  { name: "FreshMart Retail", logo: "" },
  { name: "Falcon Logistics", logo: "" },
  { name: "Spice Garden Chain", logo: "" },
  { name: "CityDine Foods", logo: "" },
  { name: "PrimeBuild Corp", logo: "" },
];

export default function OurClientele() {
  const repeatedClients = [...clients, ...clients, ...clients];

  return (
    <>
      {/* Testimonials Section */}
      <section className="bg-white py-10 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 relative inline-block">
              What Our Clients Say
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-primary rounded-full"></div>
            </h2>
            <p className="text-gray-500 mt-7 max-w-xl mx-auto text-sm md:text-base">
              Real results from real businesses — see how our software solutions are transforming operations across industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="bg-gray-50 rounded-2xl p-6 sm:p-7 border border-gray-100 flex flex-col hover:shadow-lg hover:border-primary/20 transition-[box-shadow,border-color] duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1, ease: EASE_OUT }}
                whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              >
                <Quote className="w-6 h-6 text-primary/30 mb-4 transition-all duration-300 group-hover:text-primary/60 group-hover:scale-110" />
                <div className="flex mb-3 gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">"{t.content}"</p>
                <div className="border-t border-gray-200 pt-4 flex items-center gap-3">
                  <div className="relative w-11 h-11 shrink-0 rounded-full overflow-hidden flex items-center justify-center bg-primary/10 text-primary font-bold text-sm ring-2 ring-white shadow-sm">
                    {t.photo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={t.photo} alt={t.name} className="absolute inset-0 w-full h-full object-cover" />
                    ) : (
                      <span>{getInitials(t.name)}</span>
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="text-gray-900 font-bold text-sm truncate">{t.name}</p>
                    <p className="text-gray-500 text-xs mt-0.5 truncate">{t.role} · {t.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Marquee */}
      <section className="bg-[#f2f7f6] py-12 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0f3f3b] relative inline-block">
              Trusted by Industry Leaders
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-[#0B7A6A] rounded-full"></div>
            </h2>
          </div>
        </div>

        {/* Infinite Scroll Carousel */}
        <div className="relative w-full overflow-hidden flex">
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
                className="h-16 sm:h-20 w-[160px] sm:w-[200px] shrink-0 bg-white rounded-lg border border-gray-200 shadow-sm flex items-center justify-center gap-2 p-4 hover:shadow-md hover:scale-105 hover:border-primary/30 transition-all duration-300 cursor-pointer"
              >
                {client.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={client.logo} alt={client.name} className="max-h-10 w-auto object-contain" />
                ) : (
                  <>
                    <ImageIcon className="w-4 h-4 text-primary/40 shrink-0" />
                    <span className="text-gray-600 font-bold text-center text-xs sm:text-sm">{client.name}</span>
                  </>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
