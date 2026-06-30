"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactFooter() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Awesome ${formData.name}! Your message is intercepted. We'll wire up the Python API next!`);
  };

  return (
    <section className="border-t border-white/5 bg-brand-darkBg pt-24 relative overflow-hidden">
      
      {/* Glow Ambient behind contact */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-navy/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 pb-16">
        
        {/* Left Informative Column */}
        <div>
          <span className="text-xs font-bold tracking-widest text-brand-electric uppercase bg-brand-electric/10 px-4 py-2 rounded-full border border-brand-electric/20">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-6">
            Let's build something <br /><span className="text-brand-electric">legendary</span> together.
          </h2>
          <p className="mt-4 text-gray-400 font-light max-w-md leading-relaxed">
            Have an upcoming custom app blueprint, corporate revamping project, or automation challenge? Drop a brief description.
          </p>
          <div className="mt-8 space-y-3 text-sm text-gray-400">
            <p>📧 contact@itcompany.io</p>
            <p>📍 Tech Hub, Suite 404, Silicon Valley</p>
          </div>
        </div>

        {/* Right Form Column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl border border-white/10 bg-white/[0.02]"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Your Name</label>
              <input 
                type="text" required 
                value={formData.name} onChange={(e)=>setFormData({...formData, name: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-electric focus:bg-white/[0.08] transition-all" 
                placeholder="John Doe" 
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Corporate Email</label>
              <input 
                type="email" required 
                value={formData.email} onChange={(e)=>setFormData({...formData, email: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-electric focus:bg-white/[0.08] transition-all" 
                placeholder="john@company.com" 
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Project Brief</label>
              <textarea 
                rows={4} required 
                value={formData.message} onChange={(e)=>setFormData({...formData, message: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-electric focus:bg-white/[0.08] transition-all resize-none" 
                placeholder="Tell us what you are building..." 
              />
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              type="submit" 
              className="w-full bg-brand-electric text-black font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(0,255,255,0.2)] cursor-pointer"
            >
              Send Discovery Message
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* 🏁 Minimal Footer Row */}
      <div className="border-t border-white/5 py-8 text-center text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} IT.COMPANY. All engineering rights reserved.</p>
      </div>

    </section>
  );
}