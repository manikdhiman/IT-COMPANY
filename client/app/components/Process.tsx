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
    <section className="py-24 border-t border-[#E2E8F5] bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <motion.span 
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-widest text-[#01257D] uppercase bg-[#01257D]/5 px-4 py-2 rounded-full border border-[#01257D]/10 inline-block"
          >
            Execution Flow
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black tracking-tight mt-6 text-[#09132C]"
          >
            How We Bring Ideas <br />To <span className="text-[#01257D]">Digital Reality</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative p-8 border border-[#E2E8F5] bg-[#FAFCFF] rounded-2xl group hover:border-[#01257D] hover:bg-white transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_10px_30px_rgba(1,37,125,0.05)]"
            >
              {/* Massive subtle tech watermark numbers */}
              <div className="text-6xl font-black text-[#01257D]/[0.03] group-hover:text-[#01257D]/[0.05] transition-colors duration-300 absolute top-2 right-4 select-none font-mono">
                {step.phase}
              </div>
              
              <div className="text-[#01257D] font-mono text-xs font-bold mb-4 tracking-widest">
                PHASE // {step.phase}
              </div>

              <h3 className="text-lg font-bold text-[#09132C] transition-colors duration-200">
                {step.name}
              </h3>
              
              <p className="mt-3 text-sm text-[#4A5568] font-normal leading-relaxed">
                {step.details}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}