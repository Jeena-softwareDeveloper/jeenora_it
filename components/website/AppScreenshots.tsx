"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const industries = [
  { label: "Microfinance & NBFC", color: "bg-blue-600" },
  { label: "Restaurant & F&B", color: "bg-orange-500" },
  { label: "Retail & Supermarkets", color: "bg-emerald-600" },
  { label: "Healthcare & Clinics", color: "bg-rose-500" },
  { label: "Logistics & Warehousing", color: "bg-violet-600" },
  { label: "Real Estate", color: "bg-amber-500" },
  { label: "Education & EdTech", color: "bg-sky-600" },
  { label: "Manufacturing & ERP", color: "bg-teal-600" },
  { label: "E-Commerce & D2C", color: "bg-pink-600" },
];

const developmentSteps = [
  { step: "01", title: "Discovery & Planning", desc: "We analyse your business requirements, map workflows, define scope, and deliver a detailed project plan." },
  { step: "02", title: "UI/UX Design", desc: "Wireframes, prototypes, and pixel-perfect designs reviewed and approved before any code is written." },
  { step: "03", title: "Agile Development", desc: "Sprint-based development with regular demos, code reviews, and transparent progress tracking." },
  { step: "04", title: "QA & Testing", desc: "Comprehensive functional, performance, and security testing across all devices and environments." },
  { step: "05", title: "Deployment & Launch", desc: "Seamless cloud deployment, go-live support, and post-launch monitoring for a smooth rollout." },
  { step: "06", title: "Support & Growth", desc: "Ongoing maintenance, feature enhancements, and 24/7 technical support to grow with your business." },
];

export default function AppScreenshots() {
  return (
    <>
      {/* Industries We Serve */}
      <section className="bg-[#fcfdfd] py-10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-50/50 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(var(--primary) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-[2.2rem] font-bold text-primary relative inline-block pb-3">
              Industries We Transform
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-[3px] bg-primary rounded-full"></div>
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm md:text-base">
              We have delivered production software across a wide range of industries — each solution tailored to the unique regulatory, operational, and scale requirements of the sector.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {industries.map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className={`${industry.color} text-white font-semibold text-sm px-6 py-3 rounded-full shadow-sm hover:scale-105 transition-transform cursor-default`}
              >
                {industry.label}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="bg-white py-10 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-[2.2rem] font-bold text-gray-900 relative inline-block pb-3">
              Our Development Process
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-[3px] bg-primary rounded-full"></div>
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm md:text-base">
              A structured, transparent process from kickoff to go-live — so you always know what's happening, what's next, and when you'll see results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {developmentSteps.map((step, i) => (
              <motion.div
                key={i}
                className="relative bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:shadow-md transition-shadow group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <span className="text-6xl font-extrabold text-primary/8 absolute top-4 right-5 select-none leading-none">{step.step}</span>
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-primary font-extrabold text-base">{step.step}</span>
                </div>
                <h3 className="text-gray-900 font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/contact" className="inline-flex items-center justify-center h-12 px-10 bg-primary text-primary-foreground font-bold text-sm rounded-full hover:bg-primary/90 transition-colors shadow-md">
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
