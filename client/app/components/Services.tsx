"use client";

import React from 'react';
import { motion } from 'framer-motion';

const servicesData = [
  { title: "Web Development & Engineering", items: ["Business Websites", "E-commerce Solutions", "Custom Web Applications", "Responsive Design", "Website Maintenance"] },
  { title: "Web Designing & UI/UX Experience", items: ["Modern Website Design", "High-Converting Landing Pages", "UI/UX Design", "User Experience Optimization"] },
  { title: "Digital Marketing & Growth", items: ["SEO Optimization", "Google Ads / PPC", "Social Media Marketing", "Content Strategy", "Lead Generation Funnels"] },
  { title: "Social Media Management (SMM)", items: ["Platform Management", "Content Creation & Curation", "Creative Post Designing", "Brand Growth Strategy"] },
  { title: "Branding & Identity Solutions", items: ["Logo Design", "Complete Brand Identity", "Marketing Creatives"] },
  { title: "AI & Automation Solutions", items: ["Intelligent AI Chatbots", "Business Process Automation", "AI-Driven Analytics & Insights"] }
];

// Container Variants for staggering children
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

// Individual Card Variants
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Services() {
  return (
    <section id="services" className="py-24 max-w-7xl mx-auto px-6 relative z-10">
      
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Our <span className="text-brand-electric">Core Services</span>
        </h2>
        <p className="text-gray-400 mt-4">
          End-to-end digital solutions tailored to scale your brand and automate business operations.
        </p>
      </motion.div>

      {/* Services Grid with Parent Motion Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {servicesData.map((service, index) => (
          <motion.div 
            key={index}
            variants={cardVariants}
            whileHover={{ y: -8, borderColor: "rgba(0, 255, 255, 0.4)" }}
            className="group border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent p-8 rounded-2xl transition-colors duration-300 flex flex-col justify-between cursor-pointer"
          >
            <div>
              {/* Service Counter */}
              <div className="w-12 h-12 rounded-xl bg-brand-navy flex items-center justify-center text-brand-electric font-bold text-xl mb-6 border border-brand-electric/20 group-hover:bg-brand-electric group-hover:text-black transition-colors duration-300">
                {String(index + 1).padStart(2, '0')}
              </div>
              
              {/* Service Title */}
              <h3 className="text-xl font-bold text-white group-hover:text-brand-electric transition-colors duration-300">
                {service.title}
              </h3>
              
              {/* Service List Items */}
              <ul className="mt-4 space-y-2">
                {service.items.map((item, idx) => (
                  <li key={idx} className="text-sm text-gray-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-electric/60 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}