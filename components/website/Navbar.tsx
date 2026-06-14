"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-white from-10% via-primary via-50% to-primary">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 max-w-7xl">
        <div className="flex items-center">
          <Link href="/" className="flex items-center group">
            <img src="/logo192.png" alt="Jeenora Logo" className="w-auto h-[70px] object-contain scale-[1.3] origin-left" />
          </Link>
          <span className="hidden md:inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-slate-700 ml-14 mt-1">
            Enterprise Business Software Solutions
          </span>
        </div>
        
        <nav className="hidden md:flex gap-8 items-center ml-auto mr-8">
          <Link href="/" className="text-sm font-medium transition-colors text-white hover:text-white/80">HOME</Link>
          <Link href="/about" className="text-sm font-medium transition-colors text-white/90 hover:text-white">ABOUT US</Link>
          <Link href="/contact" className="text-sm font-medium transition-colors text-white/90 hover:text-white">CONTACT US</Link>
          <Link href="/demo" className="text-sm font-medium transition-colors text-white/90 hover:text-white">DEMO</Link>
        </nav>

        <div className="flex items-center gap-4">
          <button className="md:hidden p-2 transition-colors text-white/90 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
        </div>
      </div>
    </header>
  );
}
