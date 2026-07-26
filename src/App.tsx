import { useLenis } from './hooks/useLenis';
import { Navbar } from './components/ui/Navbar';
import { CursorGlow } from './components/ui/CursorGlow';
import { HeroSection } from './components/hero/HeroSection';
import { HowItWorksSection } from './components/sections/HowItWorksSection';
import { IngredientsSection } from './components/sections/IngredientsSection';
import { ColorReferenceSection } from './components/sections/ColorReferenceSection';
import { ProcessSection } from './components/sections/ProcessSection';
import { GallerySection } from './components/sections/GallerySection';
import { VilohitSection } from './components/sections/VilohitSection';
import { YanLinSection } from './components/sections/YanLinSection';
import { KoenSection } from './components/sections/KoenSection';

export default function App() {
  useLenis();

  return (
    <>
      <div className="noise-overlay" />
      <div className="hidden md:block">
        <CursorGlow />
      </div>
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <IngredientsSection />
        <ColorReferenceSection />
        <ProcessSection />
        <GallerySection />
        <VilohitSection />
        <YanLinSection />
        <KoenSection />
      </main>
    </>
  );
}
