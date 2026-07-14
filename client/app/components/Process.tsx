"use client";

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { phase: "01", name: "Discovery & UI/UX Design", details: "We map your exact business goals, design high-fidelity UI wireframes in Framer, and freeze user experience flows before writing a single line of code." },
  { phase: "02", name: "Next.js Production Coding", details: "Our developers transform mockups into high-speed Next.js codebases, utilizing strict TypeScript structures for rapid client-side rendering." },
  { phase: "03", name: "Python Intelligence Injection", details: "We spin up clean Python environments to wire automation scripts, logic routers, and modern LLM agents seamlessly into your custom ecosystem." },
  { phase: "04", name: "Optimization & Deployment", details: "Rigorous testing across lighthouse metrics, speed benchmarks, SEO schema injection, and final production server optimization for a flawless launch." }
];

export default function Process() {
  return (
    // Yahan humne explicit dark base hexa `#0B0D13` inject kar diya hai taaki white layout ka chance hi na rahe
    <section className="py-24 border-t border-white/5 bg-[#0B0D13] relative overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <motion.span 
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            // `#00FFFF` cyan badge high contrast border block
            className="text-xs font-bold tracking-widest text-[#00FFFF] uppercase bg-[#00FFFF]/10 px-4 py-2 rounded-full border border-[#00FFFF]/20 inline-block"
          >
            Execution Flow
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight mt-6 text-white"
          >
            How We Bring Ideas <br />To <span className="bg-gradient-to-r from-[#01257D] via-blue-400 to-[#00FFFF] bg-clip-text text-transparent">Digital Reality</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              // Solid dark glass panel background override blocks
              className="relative p-6 border border-white/5 bg-white/[0.02] backdrop-blur-sm rounded-2xl pt-8 group hover:border-[#00FFFF]/30 transition-all duration-300 shadow-2xl"
            >
              {/* Massive Floating Watermark Numbers */}
              <div className="text-5xl font-black text-white/[0.02] group-hover:text-[#00FFFF]/5 transition-colors duration-300 absolute top-2 right-4 select-none font-mono">
                {step.phase}
              </div>
              
              <div className="text-[#00FFFF] font-mono text-xs font-bold mb-3 tracking-widest">
                PHASE // {step.phase}
              </div>

              <h3 className="text-lg font-bold text-white group-hover:text-[#00FFFF] transition-colors duration-300">
                {step.name}
              </h3>
              
              <p className="mt-3 text-sm text-gray-400 font-light leading-relaxed">
                {step.details}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}