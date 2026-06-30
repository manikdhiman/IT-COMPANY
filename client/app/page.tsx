import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import Process from './components/Process';
import ContactFooter from './components/ContactFooter';

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-darkBg text-white selection:bg-brand-electric selection:text-black">
      {/* Global Floating Header */}
      <Navbar />

      <main>
        {/* 1. Hero Block Showcase */}
        <Hero />

        {/* 2. Tech Stack & Value Features */}
        <Features />
        
        {/* 3. Dynamic Interactive Services */}
        <Services />

        {/* 4. Architectural Step Flow Pipeline */}
        <Process />

        {/* 5. Lead Generation Mechanics & Legal Footer */}
        <ContactFooter />
      </main>
    </div>
  );
}