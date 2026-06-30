import React from 'react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-36 max-w-7xl mx-auto px-6 text-center">
      {/* Background Glow Ball */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-navy/30 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Tech Badge */}
        <span className="text-xs font-bold tracking-widest text-brand-electric uppercase bg-brand-electric/10 px-4 py-2 rounded-full border border-brand-electric/20">
          Next-Gen Digital Agency
        </span>
        
        {/* Headline */}
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mt-6 leading-[1.1]">
          Transforming Ideas into <br />
          <span className="bg-gradient-to-r from-white via-blue-200 to-brand-electric bg-clip-text text-transparent">
            High-Performance
          </span> Digital Experiences.
        </h1>
        
        {/* Sub-headline */}
        <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
          We build lightning-fast websites, scale brands with data-driven marketing, and automate your business using cutting-edge AI.
        </p>
        
        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="#services" className="bg-brand-electric text-black font-bold px-8 py-4 rounded-xl hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_25px_rgba(0,255,255,0.3)]">
            Explore Services
          </a>
          <button className="bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200">
            Our Work
          </button>
        </div>
      </div>
    </section>
  );
}