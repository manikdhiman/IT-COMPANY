"use client";

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { phase: "01", name: "Discovery & UI/UX", details: "We map your exact business goals, design high-fidelity UI wireframes in Framer, and freeze user experience flows." },
  { phase: "02", name: "Next.js Production", details: "Our developers transform mockups into high-speed Next.js codebases utilizing rigid TypeScript frameworks." },
  { phase: "03", name: "Python AI Injection", details: "We spin up robust Python environments to wire automation scripts, logic routers, and intelligence models into your ecosystem." },
  { phase: "04", name: "Optimization & Launch", details: "Rigorous testing across lighthouse metrics, speed benchmarks, SEO schema injection, and production servers deployment." }
];

export default function Process() {
  return (
    <section className="py-24 border-t border-white/5 bg-gradient-to-b from-brand-darkBg to-black/30">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-electric uppercase bg-brand-electric/10 px-4 py-2 rounded-full border border-brand-electric/20">
            Execution Flow
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-6">
            How We Bring Ideas <br />To <span className="text-brand-electric">Digital Reality</span>
          </h2>
        </div>

        {/* Process Line Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative p-6 border-l border-white/10 md:border-l-0 md:border-t pt-8 group hover:border-brand-electric transition-colors duration-300"
            >
              <div className="text-5xl font-black text-white/5 group-hover:text-brand-electric/10 transition-colors absolute top-2 right-4 select-none">
                {step.phase}
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-brand-electric transition-colors">
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