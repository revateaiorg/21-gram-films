import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import ServicesSection from './components/ServicesSection';
import SystemSection from './components/SystemSection';
import PortfolioSection from './components/PortfolioSection';
import MetricsSection from './components/MetricsSection';
import PhilosophySection from './components/PhilosophySection';
import FAQSection from './components/FAQSection';
import ProposalCTA from './components/ProposalCTA';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

export function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {/* Loading screen — preloads videos and shows percentage */}
      {!isLoaded && <LoadingScreen onLoadComplete={() => setIsLoaded(true)} />}

      {/* Main site — always mounted so videos start buffering, but hidden until loaded */}
      <div
        className="min-h-screen bg-[#050403] text-zinc-100 selection:bg-[#39D98A] selection:text-black font-body overflow-x-hidden transition-opacity duration-500"
        style={{
          opacity: isLoaded ? 1 : 0,
          pointerEvents: isLoaded ? 'auto' : 'none',
        }}
      >
      
        {/* 01 Navigation */}
        <Navigation />

        <main>
          {/* 02 Hero with React Bits WebGL GradientBlinds & 3D Perspective Carousel */}
          <Hero />

          {/* 03 Problem Section */}
          <ProblemSection />

          {/* 04 Services Section */}
          <ServicesSection />

          {/* 05 21GRAM System Section */}
          <SystemSection />

          {/* 06 Featured Work / Portfolio Section */}
          <PortfolioSection />

          {/* 07 Featured Project Spotlight (iBel Infra) */}
          {/* <FeaturedProject /> */}

          {/* 08 Social & Media Content Reel */}
          {/* <ContentShowcase /> */}

          {/* No - 09 Bento Section */}
          {/* <BentoSection /> */}

          {/* 10 Metrics / Proof Section */}
          <MetricsSection />

          {/* No - 11 Process Section */}
          {/* <ProcessSection /> */}

          {/* 12 Philosophy Section */}
          <PhilosophySection />

          {/* 13 FAQ Section */}
          <FAQSection />

          {/* 14 Proposal Call-to-Action */}
          <ProposalCTA />

          {/* 15 Contact Form & Studio Details */}
          <ContactSection />
        </main>

        {/* 16 Footer */}
        <Footer />

      </div>
    </>
  );
}

export default App;

