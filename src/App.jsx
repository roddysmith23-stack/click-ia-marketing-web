import React from 'react';
import HeroSection from './components/HeroSection';
import PricingSection from './components/PricingSection';
import { HowItWorks, NanoStudioSection, PerformanceSection } from './components/Sections';

function App() {
  return (
    <div className="bg-deepVoid min-h-screen text-white selection:bg-neonMint selection:text-deepVoid font-sans">

      {/* Fixed Nav */}
      <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-center mix-blend-difference pointer-events-none">
        <div className="text-2xl font-black tracking-tighter pointer-events-auto cursor-pointer">
          CLICK.<span className="text-neonMint">IA</span>
        </div>
        <button className="px-6 py-2 bg-white text-deepVoid font-bold rounded-full text-xs uppercase tracking-widest pointer-events-auto hover:bg-neonMint transition-colors">
          Login
        </button>
      </nav>

      <main>
        <HeroSection />
        <HowItWorks />
        <NanoStudioSection />
        <PerformanceSection />
        <PricingSection />
      </main>

      <footer className="py-20 border-t border-white/10 text-center relative z-10 bg-deepVoid">
        <div className="text-white/20 font-mono text-sm uppercase tracking-widest">
          2025 Google AntiGravity x CLICK.IA
        </div>
      </footer>
    </div>
  );
}

export default App;
