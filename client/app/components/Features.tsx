"use client";

import React from 'react';
import { motion } from 'framer-motion';

const features = [
  { title: "Elegant Performance Stack", desc: "Engineered with Next.js 15 and Tailwind v4 to ensure minimal code footprint and ultra-fast component loads." },
  { title: "Intelligent Automations", desc: "We design modular systems focused on automating business data tasks and enhancing consumer response pipelines." },
  { title: "Adaptive Layout Logic", desc: "Fully optimized cross-device visual rendering layouts maintaining pure typographic hierarchy anywhere." }
];

export default function Features() {
  return (
    <section id="about" className="py-24 border-t border-black/5 bg-brand-lightBg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-24 text-center">
          <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-6">Our Powerhouse Tech Stack</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 font-mono text-sm text-neutral-500 font-bold">
            <span>NEXT.JS 15</span>
            <span>FRAMER MOTION</span>
            <span>TAILWIND V4</span>
            <span>PYTHON APIS</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div>
            <span className="text-xs font-bold tracking-widest text-brand-purple uppercase bg-brand-purple/20 px-4 py-2 rounded-full border border-brand-purple/40">
              Why Work With Us
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-6 text-brand-darkText">
              We engineer digital <span className="text-brand-steel">superiority</span>.
            </h2>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feat, index) => (
              <motion.div
                key={index}
                className="p-8 border border-black/5 bg-black/[0.01] rounded-2xl hover:border-brand-purple/40 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-brand-darkText mb-3">{feat.title}</h3>
                <p className="text-sm text-neutral-600 font-light leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}