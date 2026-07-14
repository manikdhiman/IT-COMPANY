"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const finalServicesStructure = [
  {
    id: "web-dev",
    category: "01 / Web Development & Engineering",
    title: "High-Performance Engineering",
    description: "We architect production-ready digital assets using bleeding-edge backend structures and modern cloud infrastructure.",
    subServices: [
      { name: "Business Websites", details: "Corporate digital hubs engineered for unmatched speed, global accessibility, and lead capture optimization." },
      { name: "E-commerce Ecosystems", details: "High-converting online stores packed with advanced product filters, secure gateways, and fluid single-page checkouts." },
      { name: "Custom Web Applications", details: "Tailor-made complex dynamic portals with strict data architecture built to handle enterprise-level loads." },
      { name: "Responsive & Mobile-First Mechanics", details: "Pixel-perfect visual fluid scaling across smartphones, tablets, and ultra-wide monitor screens." },
      { name: "Website Continuous Maintenance", details: "Around-the-clock live site monitoring, security patch deployment, server health checks, and database backups." }
    ]
  },
  {
    id: "ui-ux",
    category: "02 / Web Designing & UI/UX Experience",
    title: "User Experience & Visual Craft",
    description: "We map intuitive design blueprints, reducing digital friction while maintaining premium brand aesthetics.",
    subServices: [
      { name: "Modern Website Design", details: "Immersive, clean, and futuristic interface assets designed to instantly grab audience attention." },
      { name: "High-Converting Landing Pages", details: "Highly strategic single-page visual layouts structured specifically for aggressive conversion optimization." },
      { name: "Interactive Wireframes & UI/UX", details: "Deep structural information blueprints and mockups mapped out prior to actual production coding." },
      { name: "User Experience Optimization", details: "Analyzing live heatmaps and user journeys to eliminate usability bottlenecks and friction points." }
    ]
  },
  {
    id: "digital-marketing",
    category: "03 / Digital Marketing & Growth",
    title: "Aggressive Digital Scale",
    description: "We configure multi-channel advertising engines that feed your sales pipelines with highly qualified revenue leads.",
    subServices: [
      { name: "Search Engine Optimization (SEO)", details: "Rigid schema implementation, deep keyword profiling, and speed audits to dominate organic Google rankings." },
      { name: "Google Ads / PPC Campaigns", details: "Precision-targeted paid search and display networks optimized for hyper-focused conversion-per-click metrics." },
      { name: "Social Media Optimization", details: "Data-driven organic reach frameworks across active platforms to establish authoritative market presence." },
      { name: "Content Strategy & Copywriting", details: "Crafting compelling text assets and technical write-ups that transform casual readers into brand clients." },
      { name: "High-Yield Lead Generation Funnels", details: "Building structural value pipelines designed to systemically capture B2B or B2C customer information." }
    ]
  },
  {
    id: "smm",
    category: "04 / Social Media Management",
    title: "Brand Authority Management",
    description: "We handle your active corporate digital handles to foster organic audience growth and aesthetic consistency.",
    subServices: [
      { name: "Cross-Platform Handle Management", details: "End-to-end publishing calendar operations on Instagram, LinkedIn, and Facebook ecosystems." },
      { name: "Strategic Content Creation", details: "Trend-driven concept scripting, research hooks, and interactive content planning matching your niche tone." },
      { name: "Premium Post & Media Designing", details: "Stunning technical carousels, infographics, and visual elements customized to your unique color scheme." },
      { name: "Organic Brand Growth Blueprints", details: "Community interaction schemas, authority hashtag modeling, and algorithmic engagement monitoring." }
    ]
  },
  {
    id: "branding",
    category: "05 / Branding & Identity Solutions",
    title: "Iconic Brand Architecture",
    description: "We design raw foundational creative guidelines that establish visual trust and unforgettable market recall.",
    subServices: [
      { name: "Premium Logo Architecture", details: "Timeless, minimal, and scalable vector emblem symbols representing the core values of your company." },
      { name: "Complete Unified Corporate Identity", details: "Comprehensive system color boards, typography styling rulebooks, and communication tone guidelines." },
      { name: "Marketing Creative Assets", details: "High-end brochures, corporate slide layouts, banners, and offline print collateral templates." }
    ]
  },
  {
    id: "ai-solutions",
    category: "06 / AI & Automation (Future-Ready)",
    title: "Intelligent Systems Automation",
    description: "Future-proof engineering modules that deploy specialized workflow automated agents to eliminate standard operational costs.",
    subServices: [
      { name: "Intelligent Natural Language Chatbots", details: "Smart contextual data conversational modules for interactive client support and instant live intake routing." },
      { name: "Business Workflow Automation", details: "Eliminating manual data duplication through autonomous backend scripts and direct webhook structures." },
      { name: "AI-Driven Analytical Engines", details: "Machine learning analytical modules used to parse historical client data to uncover operational scale points." }
    ]
  }
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState(finalServicesStructure[0].id);

  return (
    <section id="services" className="py-32 max-w-7xl mx-auto px-6 relative">
      <div className="mb-20">
        <span className="text-xs font-bold tracking-widest text-brand-electric uppercase bg-brand-electric/10 px-4 py-2 rounded-full border border-brand-electric/20">
          Operational Blueprint
        </span>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight mt-6 text-white">
          Engineered Services. <br />Structured for <span className="text-brand-electric">Scale</span>.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <div className="lg:col-span-4 flex flex-col gap-3">
          {finalServicesStructure.map((service) => {
            const isSelected = activeCategory === service.id;
            return (
              <button
                key={service.id}
                onClick={() => setActiveCategory(service.id)}
                className={`w-full text-left p-6 rounded-xl border transition-all duration-300 relative cursor-pointer ${
                  isSelected 
                    ? 'border-brand-electric/40 bg-brand-navy/30 shadow-[0_0_20px_rgba(0,255,255,0.08)]' 
                    : 'border-white/5 bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.02]'
                }`}
              >
                {isSelected && (
                  <motion.div 
                    layoutId="activeTabGlow"
                    className="absolute inset-0 rounded-xl border border-brand-electric/50 pointer-events-none"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className={`text-xs block font-mono mb-2 ${isSelected ? 'text-brand-electric font-bold' : 'text-gray-500'}`}>
                  {service.category.split(' / ')[0]}
                </span>
                <span className={`text-base font-bold ${isSelected ? 'text-white' : 'text-gray-400'}`}>
                  {service.category.split(' / ')[1]}
                </span>
              </button>
            );
          })}
        </div>

        <div className="lg:col-span-8 p-8 md:p-12 rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent backdrop-blur-sm min-h-[580px]">
          <AnimatePresence mode="wait">
            {finalServicesStructure.map((service) => {
              if (service.id !== activeCategory) return null;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-8"
                >
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="border-t border-white/10 pt-8 space-y-6">
                    {service.subServices.map((sub, idx) => (
                      <div key={idx} className="group flex gap-4 items-start border-b border-white/5 pb-5 last:border-0 last:pb-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-electric mt-2 shadow-[0_0_8px_#00FFFF]" />
                        <div>
                          <h4 className="text-md font-bold text-white group-hover:text-brand-electric transition-colors">
                            {sub.name}
                          </h4>
                          <p className="text-xs md:text-sm text-gray-400 font-light mt-1.5 leading-relaxed">
                            {sub.details}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}