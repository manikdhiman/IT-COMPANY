"use client";

import React from 'react';
import { motion } from 'framer-motion';

const features = [
  { title: "Cutting-Edge Tech Stack", desc: "Built with Next.js 15, Tailwind v4, and Python for unmatched speed, scalability, and modern clean aesthetics." },
  { title: "AI-Powered Automation", desc: "We don't just build websites; we integrate smart Python automation workflows and LLM chatbots to cut operational costs." },
  { title: "SEO & Performance First", desc: "Server-side rendering (SSR) ensures ultra-fast page load speeds, automatic image optimization, and top Google rankings." }
];

export default function Features() {
  return (
    <section id="about" className="py-24 border-t border-white/5 bg-brand-darkBg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Tech Stack Subtle Slider Row */}
        <div className="mb-24 text-center">
          <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-6">Our Powerhouse Tech Stack</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 hover:opacity-80 transition-all duration-300">
            <span className="text-xl font-bold tracking-tight text-white">NEXT.JS 15</span>
            <span className="text-xl font-bold tracking-tight text-white">FRAMER MOTION</span>
            <span className="text-xl font-bold tracking-tight text-white">TAILWIND V4</span>
            <span className="text-xl font-bold tracking-tight text-white">PYTHON (FASTAPI)</span>
          </div>
        </div>

        {/* Why Choose Us Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-1">
            <span className="text-xs font-bold tracking-widest text-brand-electric uppercase bg-brand-electric/10 px-4 py-2 rounded-full border border-brand-electric/20">
              Why Work With Us
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-6 leading-tight">
              We engineer digital <span className="text-brand-electric">superiority</span>.
            </h2>
            <p className="mt-4 text-gray-400 font-light">
              We bridge the gap between heavy engineering performance and mind-blowing premium design aesthetics.
            </p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 border border-white/5 bg-white/[0.01] rounded-2xl hover:border-white/10 transition-colors"
              >
                <h3 className="text-lg font-bold text-white mb-3">{feat.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed font-light">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}