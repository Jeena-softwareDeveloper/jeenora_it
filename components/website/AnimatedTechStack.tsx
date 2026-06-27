"use client";

import { motion } from "framer-motion";

const technologies = [
  { name: "Next.js", icon: "🌐", color: "from-zinc-800 to-zinc-900" },
  { name: "React Native", icon: "📱", color: "from-blue-500/20 to-cyan-500/10" },
  { name: "Flutter", icon: "🦋", color: "from-blue-400/20 to-sky-500/10" },
  { name: "Node.js", icon: "⚡", color: "from-green-500/20 to-emerald-500/10" },
  { name: "PostgreSQL", icon: "🗄️", color: "from-blue-600/20 to-indigo-600/10" },
  { name: "AWS Cloud", icon: "☁️", color: "from-orange-500/20 to-yellow-500/10" },
  { name: "Kotlin", icon: "🤖", color: "from-purple-500/20 to-orange-500/10" },
  { name: "Swift / iOS", icon: "🍎", color: "from-gray-400/20 to-gray-500/10" },
  { name: "Tailwind CSS", icon: "🎨", color: "from-cyan-500/20 to-teal-500/10" },
  { name: "Figma", icon: "✏️", color: "from-pink-500/20 to-rose-500/10" },
  { name: "Docker", icon: "🐳", color: "from-blue-500/20 to-cyan-600/10" },
  { name: "MongoDB", icon: "🍃", color: "from-green-600/20 to-emerald-700/10" },
];

export default function AnimatedTechStack() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#f8f9fa]">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold border border-primary/20 mb-4 tracking-widest uppercase text-xs">
            Technology Stack
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">Technologies We Use</h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            We work with industry-leading frameworks and platforms to build secure, scalable, and performant software — from mobile apps to enterprise cloud infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="relative group cursor-pointer"
            >
              {/* Animated Glow Behind Card */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${tech.color} rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500`} />
              
              <div className="relative p-6 rounded-2xl bg-background border border-border flex flex-col items-center justify-center gap-3 h-full z-10">
                <span className="text-4xl drop-shadow-xl group-hover:scale-110 transition-transform duration-300">{tech.icon}</span>
                <span className="font-bold text-foreground text-sm text-center leading-tight">{tech.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
