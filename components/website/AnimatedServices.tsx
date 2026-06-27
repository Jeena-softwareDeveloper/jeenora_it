"use client";

import {
  ChevronRight, Landmark, UtensilsCrossed, Building2, ShoppingBag,
  LayoutGrid, Globe, Smartphone, Apple, Monitor, Palette, Plug, Cloud, HeadphonesIcon
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const allServices = [
  {
    title: "Microfinance (MFI) Software",
    description: "Complete loan management, disbursement tracking, EMI scheduling, and compliance reporting for NBFCs and microfinance institutions.",
    icon: Landmark,
    forWho: "NBFCs & MFIs",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Restaurant Billing & POS",
    description: "Table management, KOT printing, menu customization, GST billing, and real-time sales reports for restaurants of all sizes.",
    icon: UtensilsCrossed,
    forWho: "Restaurants & Cafes",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    title: "B2B Software Solutions",
    description: "Wholesale portals, distributor dashboards, dealer pricing engines, and supply chain automation for B2B businesses.",
    icon: Building2,
    forWho: "Distributors & Wholesalers",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    title: "B2C Software Solutions",
    description: "Customer-facing digital platforms, loyalty programs, online ordering systems, and consumer engagement tools built for scale.",
    icon: ShoppingBag,
    forWho: "Retailers & D2C Brands",
    color: "text-pink-600",
    bg: "bg-pink-50",
  },
  {
    title: "Custom ERP & CRM Development",
    description: "Fully bespoke ERP and CRM systems engineered to your exact workflows — replacing legacy systems with modern, cloud-native architecture.",
    icon: LayoutGrid,
    forWho: "Enterprises & Corporates",
    color: "text-teal-600",
    bg: "bg-teal-50",
  },
  {
    title: "Website Design & Development",
    description: "High-performance, SEO-optimised business websites with modern UI/UX, fast load times, and conversion-focused design.",
    icon: Globe,
    forWho: "All Business Sizes",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    title: "E-Commerce Development",
    description: "Full-featured online stores with payment gateway integration, inventory sync, multi-currency support, and admin dashboards.",
    icon: ShoppingBag,
    forWho: "Retailers & Brands",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    title: "Android App Development",
    description: "Native Android applications with high performance, offline capability, and Google Play deployment — built for real business workflows.",
    icon: Smartphone,
    forWho: "All Industries",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    title: "iOS App Development",
    description: "Premium iPhone and iPad applications with native Swift performance, App Store compliance, and seamless Apple ecosystem integration.",
    icon: Apple,
    forWho: "Consumer & Enterprise",
    color: "text-gray-700",
    bg: "bg-gray-100",
  },
  {
    title: "Cross-Platform Mobile Apps",
    description: "Single codebase Flutter/React Native apps targeting both Android and iOS — faster delivery, lower cost, consistent UX.",
    icon: Monitor,
    forWho: "Startups & Scale-ups",
    color: "text-cyan-600",
    bg: "bg-cyan-50",
  },
  {
    title: "UI/UX Design",
    description: "User-centric design systems, wireframes, interactive prototypes, and Figma designs that convert visitors into loyal customers.",
    icon: Palette,
    forWho: "Product Teams & Startups",
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
  {
    title: "API Development & Integration",
    description: "Secure RESTful and GraphQL APIs, third-party integrations (payment, ERP, CRM, logistics), and microservices architecture.",
    icon: Plug,
    forWho: "Tech & Enterprise Teams",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    title: "Cloud Deployment",
    description: "AWS, Azure, and GCP cloud infrastructure setup, Docker containerisation, CI/CD pipelines, and 99.9% uptime SLA management.",
    icon: Cloud,
    forWho: "All Software Products",
    color: "text-sky-600",
    bg: "bg-sky-50",
  },
  {
    title: "Software Maintenance & Support",
    description: "24/7 technical support, performance monitoring, security patching, feature updates, and dedicated account management.",
    icon: HeadphonesIcon,
    forWho: "Existing Software Clients",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
];

export default function AnimatedServices() {
  const ServiceCard = ({ title, description, icon: Icon, forWho, color, bg, delay = 0 }: any) => (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow h-full min-h-[160px] relative group"
    >
      <div className="flex gap-4 items-start">
        <div className={`w-11 h-11 shrink-0 ${bg} rounded-lg flex items-center justify-center`}>
          <Icon className={`w-5 h-5 ${color}`} />
        </div>
        <div className="flex-1">
          <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">{forWho}</span>
          <h4 className="text-primary font-semibold text-sm mb-1 leading-snug mt-0.5">{title}</h4>
          <p className="text-gray-500 text-xs leading-relaxed pr-2">{description}</p>
        </div>
      </div>
      <div className="absolute bottom-4 right-4 w-6 h-6 bg-gray-100 rounded flex items-center justify-center group-hover:bg-primary transition-colors cursor-pointer">
        <ChevronRight className="w-4 h-4 text-gray-700 group-hover:text-primary-foreground transition-colors" />
      </div>
    </motion.div>
  );

  return (
    <section id="services" className="relative pt-20 md:pt-28 pb-12 overflow-hidden bg-[#f8f9fa]">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-[2.5rem] font-semibold text-gray-900">
            Our Software Services
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            From domain-specific software products to full custom development — we cover every technology need your business has.
          </p>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {allServices.map((service, i) => (
            <ServiceCard 
              key={service.title}
              {...service}
              delay={i * 0.04}
            />
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          className="bg-primary rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h3 className="text-white font-bold text-xl md:text-2xl mb-2">Not sure which solution fits your business?</h3>
            <p className="text-white/70 text-sm">Book a free consultation and our experts will map out the right technology roadmap for you.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link href="/contact" className="h-11 px-7 bg-white text-primary font-bold text-sm rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors whitespace-nowrap">
              Schedule Consultation
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
