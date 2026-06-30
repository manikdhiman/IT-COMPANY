"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-36 max-w-7xl mx-auto px-6 text-center">
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.span 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs font-bold tracking-widest text-brand-darkText uppercase bg-brand-purple/20 px-4 py-2 rounded-full border border-brand-purple/40"
        >
          Next-Gen Digital Agency
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-7xl font-extrabold tracking-tight mt-6 leading-[1.1] text-brand-darkText"
        >
          Transforming Ideas into <br />
          <span className="bg-gradient-to-r from-brand-darkText via-brand-steel to-brand-purple bg-clip-text text-transparent">
            High-Performance
          </span> Digital Experiences.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-6 text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto font-light"
        >
          We build lightning-fast websites, scale brands with data-driven marketing, and automate your business using cutting-edge AI.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <motion.a 
            whileHover={{ scale: 1.03, boxShadow: "0px 10px 25px rgba(197, 173, 197, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            href="#services" 
            className="bg-brand-purple text-brand-darkText font-bold px-8 py-4 rounded-xl shadow-[0_4px_20px_rgba(197,173,197,0.2)] transition-shadow"
          >
            Explore Services
          </motion.a>
          <motion.button 
            whileHover={{ scale: 1.03, backgroundColor: "rgba(0,0,0,0.05)" }}
            whileTap={{ scale: 0.98 }}
            className="bg-black/5 border border-black/10 text-brand-darkText font-semibold px-8 py-4 rounded-xl"
          >
            Our Work
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}