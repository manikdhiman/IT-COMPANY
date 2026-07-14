import React from 'react';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="border-b border-[#E2E8F5] bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-[0_2px_15px_rgba(0,0,0,0.02)]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Full-scale bright logo anchor point */}
        <a href="#" className="flex items-center h-full py-2 group cursor-pointer">
          <div className="relative h-full aspect-[4/1] w-auto min-w-[150px] md:min-w-[180px]">
            <Image 
              src="/logoit.png" 
              alt="IT.COMPANY Logo" 
              fill
              className="object-contain group-hover:scale-[1.01] transition-transform duration-200"
              priority
            />
          </div>
        </a>

        {/* High-Contrast Navigation items */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#4A5568]">
          <a href="#services" className="hover:text-brand-navy transition-colors">Services</a>
          <a href="#about" className="hover:text-brand-navy transition-colors">About</a>
          <button className="bg-[#01257D] text-white px-6 py-2.5 rounded-full font-bold hover:bg-[#0055D4] transition-all duration-300 shadow-[0_4px_14px_rgba(1,37,125,0.2)] cursor-pointer">
            Get Started
          </button>
        </div>

      </div>
    </nav>
  );
}