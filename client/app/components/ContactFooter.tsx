"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function ContactFooter() {
  return (
    <section className="border-t border-black/5 bg-brand-lightBg pt-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 pb-16">
        <div>
          <span className="text-xs font-bold tracking-widest text-brand-darkText uppercase bg-brand-purple/20 px-4 py-2 rounded-full border border-brand-purple/40" />
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-6 text-brand-darkText">
            Let's build something <br /><span className="text-brand-purple">legendary</span> together.
          </h2>
          <p className="mt-4 text-neutral-600 font-light max-w-md leading-relaxed">
            Have an upcoming custom app blueprint, corporate revamping project, or automation challenge? Drop a brief description.
          </p>
        </div>

        <motion.div className="p-8 rounded-2xl border border-black/5 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.01)]">
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">Your Name</label>
              <input type="text" className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-sm text-brand-darkText focus:outline-none focus:border-brand-purple transition-all" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">Corporate Email</label>
              <input type="email" className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-sm text-brand-darkText focus:outline-none focus:border-brand-purple transition-all" placeholder="john@company.com" />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">Project Brief</label>
              <textarea rows={4} className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-sm text-brand-darkText focus:outline-none focus:border-brand-purple transition-all resize-none" placeholder="Tell us what you are building..." />
            </div>
            <button className="w-full bg-brand-darkText text-white font-bold py-4 rounded-xl cursor-pointer hover:bg-brand-purple hover:text-brand-darkText transition-colors duration-300 shadow-md">
              Send Discovery Message
            </button>
          </div>
        </motion.div>
      </div>

      <div className="border-t border-black/5 py-8 text-center text-xs text-neutral-400">
        <p>&copy; {new Date().getFullYear()} IT.COMPANY. All engineering rights reserved.</p>
      </div>
    </section>
  );
}