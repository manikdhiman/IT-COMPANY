import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Process from './components/Process';
import ContactFooter from './components/ContactFooter';

export default function Home() {
  return (
    <div className="min-h-screen tech-clean-bg text-[#09132C] selection:bg-[#01257D] selection:text-white relative overflow-hidden">
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