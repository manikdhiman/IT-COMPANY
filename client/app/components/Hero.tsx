"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-36 max-w-7xl mx-auto px-6 text-center">
      {/* Background Glow Ball Animation */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-navy/30 blur-[120px] rounded-full pointer-events-none" 
      />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Tech Badge - Fade Down */}
        <motion.span 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-bold tracking-widest text-brand-electric uppercase bg-brand-electric/10 px-4 py-2 rounded-full border border-brand-electric/20"
        >
          Next-Gen Digital Agency
        </motion.span>
        
        {/* Headline - Fade Up with Stagger delay */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-4xl md:text-7xl font-extrabold tracking-tight mt-6 leading-[1.1]"
        >
          Transforming Ideas into <br />
          <span className="bg-gradient-to-r from-white via-blue-200 to-brand-electric bg-clip-text text-transparent">
            High-Performance
          </span> Digital Experiences.
        </motion.h1>
        
        {/* Sub-headline */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed"
        >
          We build lightning-fast websites, scale brands with data-driven marketing, and automate your business using cutting-edge AI.
        </motion.p>
        
        {/* CTA Buttons with Hover Scale Effects */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <motion.a 
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(0, 255, 255, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            href="#services" 
            className="bg-brand-electric text-black font-bold px-8 py-4 rounded-xl shadow-[0_0_25px_rgba(0,255,255,0.3)] transition-shadow"
          >
            Explore Services
          </motion.a>
          
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/5 border border-white/10 text-white font-semibold px-8 py-4 rounded-xl"
          >
            Our Work
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}