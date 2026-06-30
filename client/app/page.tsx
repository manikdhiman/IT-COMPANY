import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-darkBg text-white selection:bg-brand-electric selection:text-black">
      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Main Hero Presentation */}
      <main>
        <Hero />
        
        {/* 3. Specialized Services Offered */}
        <Services />
      </main>
    </div>
  );
}