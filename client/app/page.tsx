import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Process from './components/Process';
import ContactFooter from './components/ContactFooter';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F9F8FA] text-[#1A191D] selection:bg-[#C5ADC5] selection:text-[#18171C] relative overflow-hidden">
      
      {/* 🔮 Smooth Pastel Soft Ambient Backgrounds */}
      <div className="absolute top-[-10%] left-[-10%] w-[1000px] h-[1000px] pastel-aurora-light pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[-10%] w-[800px] h-[800px] pastel-aurora-light pointer-events-none z-0" />

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