import { useLenis } from './hooks/useLenis';
import { Navbar } from './components/ui/Navbar';
import { Footer } from './components/ui/Footer';
import { CursorGlow } from './components/ui/CursorGlow';
import { HeroSection } from './components/hero/HeroSection';
import { HowItWorksSection } from './components/sections/HowItWorksSection';
import { IngredientsSection } from './components/sections/IngredientsSection';
import { ColorReferenceSection } from './components/sections/ColorReferenceSection';
import { ProcessSection } from './components/sections/ProcessSection';
import { GallerySection } from './components/sections/GallerySection';
import { FAQSection } from './components/sections/FAQSection';

export default function App() {
  useLenis();

  return (
    <>
      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      {/* Cursor glow - desktop only */}
      <div className="hidden md:block">
        <CursorGlow />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <HeroSection />
        <HowItWorksSection />
        <IngredientsSection />
        <ColorReferenceSection />
        <ProcessSection />
        <GallerySection />
        <FAQSection />
      </main>

      <Footer />
    </>
  );
}
