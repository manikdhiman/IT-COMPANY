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
    <section className="py-24 border-t border-black/5 bg-gradient-to-b from-brand-lightBg to-neutral-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <motion.span 
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-widest text-brand-darkText uppercase bg-brand-purple/20 px-4 py-2 rounded-full border border-brand-purple/40 inline-block"
          >
            Execution Flow
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight mt-6 text-brand-darkText"
          >
            {"How We Bring Ideas "}
            <br />
            {"To "}
            <span className="text-brand-steel">Digital Reality</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative p-6 border-l border-black/10 md:border-l-0 md:border-t pt-8 group hover:border-brand-purple transition-colors duration-300"
            >
              <div className="text-5xl font-black text-black/[0.03] group-hover:text-brand-purple/10 transition-colors duration-300 absolute top-2 right-4 select-none font-mono">
                {step.phase}
              </div>
              <h3 className="text-lg font-bold text-brand-darkText group-hover:text-brand-purple transition-colors duration-300">
                {step.name}
              </h3>
              <p className="mt-3 text-sm text-neutral-600 font-light leading-relaxed">
                {step.details}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}