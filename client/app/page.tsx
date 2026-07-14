import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Process from './components/Process';
import ContactFooter from './components/ContactFooter';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0D13] text-white selection:bg-[#00FFFF] selection:text-[#0B0D13] relative overflow-hidden">
      
      {/* Absolute Master Ambient Lights Underlays */}
      <div className="absolute top-[-5%] left-[-10%] w-[1000px] h-[1000px] tech-glow-matrix pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[-10%] w-[900px] h-[900px] tech-glow-matrix pointer-events-none z-0" />

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