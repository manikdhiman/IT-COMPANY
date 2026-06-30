import React from 'react';

// Data structure structured in an array for scalability
const servicesData = [
  {
    title: "Web Development & Engineering",
    items: ["Business Websites", "E-commerce Solutions", "Custom Web Applications", "Responsive Design", "Website Maintenance"]
  },
  {
    title: "Web Designing & UI/UX Experience",
    items: ["Modern Website Design", "High-Converting Landing Pages", "UI/UX Design", "User Experience Optimization"]
  },
  {
    title: "Digital Marketing & Growth",
    items: ["SEO Optimization", "Google Ads / PPC", "Social Media Marketing", "Content Strategy", "Lead Generation Funnels"]
  },
  {
    title: "Social Media Management (SMM)",
    items: ["Platform Management", "Content Creation & Curation", "Creative Post Designing", "Brand Growth Strategy"]
  },
  {
    title: "Branding & Identity Solutions",
    items: ["Logo Design", "Complete Brand Identity", "Marketing Creatives"]
  },
  {
    title: "AI & Automation Solutions",
    items: ["Intelligent AI Chatbots", "Business Process Automation", "AI-Driven Analytics & Insights"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 max-w-7xl mx-auto px-6 relative z-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Our <span className="text-brand-electric">Core Services</span>
        </h2>
        <p className="text-gray-400 mt-4">
          End-to-end digital solutions tailored to scale your brand and automate business operations.
        </p>
      </div>

      {/* Services Grid Map */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <div 
            key={index} 
            className="group border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent p-8 rounded-2xl hover:border-brand-electric/30 hover:shadow-[0_0_30px_rgba(1,37,125,0.2)] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Service Counter */}
              <div className="w-12 h-12 rounded-xl bg-brand-navy flex items-center justify-center text-brand-electric font-bold text-xl mb-6 group-hover:scale-110 transition-all duration-300 border border-brand-electric/20">
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
          </div>
        ))}
      </div>
    </section>
  );
}