import React from 'react';

export default function Navbar() {
  return (
    <nav className="border-b border-black/5 bg-brand-lightBg/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-2xl font-black tracking-wider text-brand-darkText">
          IT<span className="text-brand-purple">.COMPANY</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
          <a href="#services" className="hover:text-brand-purple transition-colors">Services</a>
          <a href="#about" className="hover:text-brand-purple transition-colors">About</a>
          <button className="bg-brand-darkText text-white px-5 py-2.5 rounded-full font-semibold hover:bg-brand-purple hover:text-brand-darkText transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.05)] cursor-pointer">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}