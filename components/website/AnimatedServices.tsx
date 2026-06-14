"use client";

import { ChevronRight, FileText, CalendarDays, ClipboardList, Bell, Receipt, Smartphone, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function AnimatedServices() {
  const ServiceCard = ({ title, description, icon: Icon, delay = 0 }: any) => (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow h-full min-h-[140px] relative group"
    >
      <div className="flex gap-4 items-start">
        <div className="w-12 h-12 shrink-0 bg-primary rounded-lg flex items-center justify-center">
          <Icon className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h4 className="text-primary font-semibold text-sm mb-1 leading-snug">{title}</h4>
          <p className="text-gray-500 text-xs leading-relaxed pr-2">{description}</p>
        </div>
      </div>
      <div className="absolute bottom-4 right-4 w-6 h-6 bg-gray-100 rounded flex items-center justify-center group-hover:bg-primary transition-colors cursor-pointer">
        <ChevronRight className="w-4 h-4 text-gray-700 group-hover:text-primary-foreground transition-colors" />
      </div>
    </motion.div>
  );

  return (
    <section id="services" className="relative pt-32 md:pt-40 pb-16 overflow-hidden bg-[#f8f9fa]">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-[2.5rem] font-semibold text-gray-900">
            Enterprise Software Solutions
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* First Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left: 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ServiceCard 
              title="Custom Billing Software" 
              description="Process complex tax calculations and automate recurring invoices."
              icon={Receipt}
              delay={0.1}
            />
            <ServiceCard 
              title="Inventory Control" 
              description="Real-time tracking of multi-warehouse stock levels."
              icon={ClipboardList}
              delay={0.2}
            />
            <ServiceCard 
              title="B2B Dashboards" 
              description="Wholesale portals with specific distributor pricing logic."
              icon={Users}
              delay={0.3}
            />
            <ServiceCard 
              title="E-commerce Sync" 
              description="Seamlessly push physical store inventory to online channels."
              icon={Smartphone}
              delay={0.4}
            />
          </div>

          {/* Right: Illustration 1 */}
          <div className="relative h-[400px] w-full flex flex-col items-center justify-center bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
            <div className="w-full h-full border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center space-y-4">
              <Smartphone className="w-16 h-16 text-gray-300" />
              <p className="text-gray-400 font-medium text-center px-4">Mobile App Illustration<br/><span className="text-xs font-normal">Drop your Figma SVG here</span></p>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Illustration 2 */}
          <div className="relative h-[400px] w-full flex flex-col items-center justify-center bg-white rounded-3xl shadow-sm border border-gray-100 p-8 order-2 lg:order-1">
             <div className="w-full h-full border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center space-y-4">
              <CalendarDays className="w-16 h-16 text-gray-300" />
              <p className="text-gray-400 font-medium text-center px-4">Desktop Dashboard Illustration<br/><span className="text-xs font-normal">Drop your Figma SVG here</span></p>
            </div>
          </div>

          {/* Right: 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 order-1 lg:order-2">
            <ServiceCard 
              title="Hotel Management POS" 
              description="Reservations, housekeeping, and restaurant integration."
              icon={CalendarDays}
              delay={0.1}
            />
            <ServiceCard 
              title="Restaurant Automation" 
              description="Kitchen display systems, table management, and instant KOT."
              icon={ClipboardList}
              delay={0.2}
            />
            <ServiceCard 
              title="Custom Mobile Apps" 
              description="Native applications for your field staff and warehouse teams."
              icon={Smartphone}
              delay={0.3}
            />
            <ServiceCard 
              title="Business Analytics" 
              description="Centralized financial reporting across unlimited branches."
              icon={FileText}
              delay={0.4}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
