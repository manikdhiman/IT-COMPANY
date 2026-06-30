import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Process from './components/Process';
import ContactFooter from './components/ContactFooter';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-white selection:bg-[#00FFFF] selection:text-[#0B0F19] relative overflow-hidden">
      
      {/* 🔮 High-Tech Cyber Ambient Lighting Layers */}
      <div className="absolute top-[-10%] left-[-15%] w-[1000px] h-[1000px] cyber-glow pointer-events-none z-0" />
      <div className="absolute bottom-[15%] right-[-15%] w-[800px] h-[800px] cyber-glow pointer-events-none z-0" />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Services />
          <Process />
          <ContactFooter />
        </main>
      </div>
    </div>
  );
}