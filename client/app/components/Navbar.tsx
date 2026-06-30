import React from 'react';

export default function Navbar() {
  return (
    <nav className="border-b border-white/5 bg-brand-darkBg/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-2xl font-black tracking-wider text-white">
          IT<span className="text-brand-electric">.COMPANY</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#services" className="hover:text-brand-electric transition-colors">Services</a>
          <a href="#about" className="hover:text-brand-electric transition-colors">About</a>
          <button className="bg-brand-navy border border-brand-electric/30 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-brand-electric hover:text-brand-darkBg transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.15)] cursor-pointer">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}