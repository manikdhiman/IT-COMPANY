"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function ContactFooter() {
  return (
    // Solid Obsidian Charcoal base background to guarantee it is NEVER white
    <section className="border-t border-white/5 bg-[#0B0D13] pt-24 pb-12 relative overflow-hidden text-white">
      
      {/* Dynamic Background Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 pb-16 relative z-10">
        
        {/* LEFT BRAND TEXT COLUMN */}
        <div className="flex flex-col justify-center">
          <motion.span 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-widest text-[#00FFFF] uppercase bg-[#00FFFF]/10 px-4 py-2 rounded-full border border-[#00FFFF]/20 inline-block w-fit mb-6"
          >
            Connect With Us
          </motion.span>
          
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Let's build something <br />
            <span className="bg-gradient-to-r from-white via-blue-400 to-[#00FFFF] bg-clip-text text-transparent">
              legendary
            </span> together.
          </h2>
          
          <p className="mt-4 text-gray-400 font-light max-w-md leading-relaxed">
            Have an upcoming custom app blueprint, corporate revamping project, or automation challenge? Drop a brief description below and our core engineering team will connect.
          </p>
        </div>

        {/* RIGHT HIGH-CONTRAST FORM LAYER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md shadow-2xl"
        >
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Your Name</label>
              <input 
                type="text" 
                className="w-full bg-[#131722] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00FFFF] focus:ring-1 focus:ring-[#00FFFF] transition-all" 
                placeholder="John Doe" 
              />
            </div>
            
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Corporate Email</label>
              <input 
                type="email" 
                className="w-full bg-[#131722] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00FFFF] focus:ring-1 focus:ring-[#00FFFF] transition-all" 
                placeholder="john@company.com" 
              />
            </div>
            
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Project Brief</label>
              <textarea 
                rows={4} 
                className="w-full bg-[#131722] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00FFFF] focus:ring-1 focus:ring-[#00FFFF] transition-all resize-none" 
                placeholder="Tell us what you are building..." 
              />
            </div>
            
            <button className="w-full bg-[#00FFFF] text-[#0B0D13] font-bold py-4 rounded-xl cursor-pointer hover:bg-white hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all duration-300">
              Send Discovery Message
            </button>
          </div>
        </motion.div>
      </div>

      {/* FOOTER STRIP */}
      <div className="border-t border-white/5 mt-12 pt-8 text-center text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} IT.COMPANY. All engineering rights reserved.</p>
      </div>
    </section>
  );
}