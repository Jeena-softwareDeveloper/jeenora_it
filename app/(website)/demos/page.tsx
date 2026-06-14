"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { mockDemos } from "@/lib/mock-data";

const categories = ["All", "Ecommerce", "Real Estate", "Restaurant", "Education", "Healthcare", "Agency"];

export default function DemosPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredDemos = activeCategory === "All" 
    ? mockDemos 
    : mockDemos.filter(demo => demo.category === activeCategory);

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Our <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Portfolio</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Browse our collection of premium, high-converting websites crafted for various industries.
        </p>
      </div>

      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-orange-600 text-white text-foreground shadow-lg shadow-indigo-600/30"
                  : "bg-muted text-muted-foreground hover:bg-accent hover:text-foreground border border-border"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDemos.map(demo => (
            <div key={demo.id} className="group rounded-2xl overflow-hidden border border-border bg-muted hover:border-border transition-all duration-300 flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <Image src={demo.imageUrl} alt={demo.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-background/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold border border-border">
                  {demo.category}
                </div>
                <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={demo.url} target="_blank" rel="noopener noreferrer" className="bg-orange-600 text-white text-foreground p-3 rounded-full hover:bg-indigo-700 hover:scale-110 transition-all">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-3">{demo.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 flex-1">{demo.description}</p>
                <div className="flex gap-3 mt-auto">
                  <a href={demo.url} target="_blank" rel="noopener noreferrer" className="flex-1 bg-muted hover:bg-accent text-foreground text-center py-3 rounded-xl text-sm font-semibold transition-colors">
                    Live Demo
                  </a>
                  <Link href={`/demos/${demo.id}`} className="flex-1 bg-orange-600 hover:bg-orange-700 text-white text-foreground text-center py-3 rounded-xl text-sm font-semibold transition-colors">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {filteredDemos.length === 0 && (
          <div className="text-center py-24 text-muted-foreground">
            <p className="text-xl">No demos found for this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
