"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { X, Menu } from 'lucide-react';

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT US" },
  { href: "/#services", label: "SERVICES" },
  { href: "/contact", label: "CONTACT" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }
      window.scrollTo(0, 0);
    }
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-white from-10% via-primary via-50% to-primary">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 max-w-7xl">

          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center group" onClick={close}>
              <img src="/logo192.png" alt="Jeenora IT Solutions Logo" className="w-auto h-[70px] object-contain scale-[1.3] origin-left" />
            </Link>
            <span className="hidden md:inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-slate-700 ml-14 mt-1">
              Software Development Company
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center ml-auto mr-8">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className="text-sm font-medium transition-colors text-white/90 hover:text-white">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:flex h-9 px-5 bg-white text-primary font-bold text-xs tracking-wider items-center justify-center rounded-full hover:bg-gray-100 transition-colors shadow-sm"
            >
              Get Started
            </Link>

            <button
              className="md:hidden p-2 transition-colors text-white hover:text-white/80"
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label="Toggle menu"
            >
              {menuOpen
                ? <X size={24} />
                : <Menu size={24} />
              }
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={close}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-primary">
          <img src="/logo192.png" alt="Jeenora" className="h-10 w-auto object-contain brightness-0 invert" />
          <button onClick={close} className="text-white hover:text-white/80 transition-colors p-1">
            <X size={22} />
          </button>
        </div>

        {/* Drawer Links */}
        <nav className="flex flex-col px-5 py-6 gap-1">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={close}
              className="text-gray-700 font-semibold text-sm tracking-wider uppercase py-3 px-4 rounded-xl hover:bg-primary/8 hover:text-primary transition-colors border-b border-gray-50 last:border-0"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Drawer CTA */}
        <div className="px-5 pt-2">
          <Link
            href="/contact"
            onClick={close}
            className="flex h-12 w-full items-center justify-center bg-primary text-white font-bold text-sm rounded-full hover:bg-primary/90 transition-colors shadow-md"
          >
            Get Started →
          </Link>
        </div>

        {/* Contact Info */}
        <div className="px-5 mt-8 space-y-2">
          <p className="text-xs text-gray-400 uppercase font-semibold tracking-widest mb-3">Contact</p>
          <a href="tel:08029905860" className="block text-sm text-gray-600 hover:text-primary transition-colors">📞 080-29905860</a>
          <a href="mailto:info@jeenora.com" className="block text-sm text-gray-600 hover:text-primary transition-colors">✉️ info@jeenora.com</a>
        </div>
      </div>
    </>
  );
}
