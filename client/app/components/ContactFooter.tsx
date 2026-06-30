"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function ContactFooter() {
  return (
    <section className="border-t border-white/5 bg-brand-darkBg pt-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 pb-16">
        <div>
          <span className="text-xs font-bold tracking-widest text-brand-electric uppercase bg-brand-electric/10 px-4 py-2 rounded-full border border-brand-electric/20 inline-block" />
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-6 text-white">
            Let's build something <br /><span className="text-brand-electric">legendary</span> together.
          </h2>
          <p className="mt-4 text-gray-400 font-light max-w-md leading-relaxed">
            Have an upcoming custom app blueprint, corporate revamping project, or automation challenge? Drop a brief description.
          </p>
        </div>

        <motion.div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm shadow-xl">
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Your Name</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-electric transition-all" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Corporate Email</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-electric transition-all" placeholder="john@company.com" />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Project Brief</label>
              <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-electric transition-all resize-none" placeholder="Tell us what you are building..." />
            </div>
            <button className="w-full bg-brand-electric text-brand-darkBg font-bold py-4 rounded-xl cursor-pointer hover:bg-white transition-colors duration-300 shadow-md">
              Send Discovery Message
            </button>
          </div>
        </motion.div>
      </div>

      <div className="border-t border-white/5 py-8 text-center text-xs text-gray-600">
        <p>&copy; {new Date().getFullYear()} IT.COMPANY. All engineering rights reserved.</p>
      </div>
    </section>
  );
}