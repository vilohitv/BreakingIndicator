import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLenis, getLenis } from './hooks/useLenis';
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

export type StudentModal = 'vilohit' | 'yan-lin' | 'koen' | null;

export default function App() {
  useLenis();
  const [activeStudent, setActiveStudent] = useState<StudentModal>(null);

  // Pause Lenis smooth scroll while a modal is open so the modal's
  // native overflow-y-auto scroll works correctly.
  useEffect(() => {
    const lenis = getLenis();
    if (!lenis) return;
    if (activeStudent) {
      lenis.stop();
    } else {
      lenis.start();
    }
  }, [activeStudent]);

  const closeModal = () => setActiveStudent(null);

  return (
    <>
      <div className="noise-overlay" />
      <div className="hidden md:block">
        <CursorGlow />
      </div>
      <Navbar onStudentClick={setActiveStudent} />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <IngredientsSection />
        <ColorReferenceSection />
        <ProcessSection />
        <GallerySection />
      </main>

      {/* Student section modals */}
      <AnimatePresence>
        {activeStudent && (
          <motion.div
            key={activeStudent}
            className="fixed inset-0 z-50 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0"
              style={{ background: 'rgba(4,3,10,0.96)', backdropFilter: 'blur(40px)' }}
              onClick={closeModal}
            />

            {/* Scrollable content wrapper */}
            <motion.div
              className="relative min-h-full"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Close button — fixed so it stays visible while scrolling */}
              <button
                onClick={closeModal}
                className="fixed top-6 right-6 z-50 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}
                aria-label="Close"
              >
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M1 1l11 11M12 1L1 12" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>

              {/* Section content */}
              {activeStudent === 'vilohit' && <VilohitSection />}
              {activeStudent === 'yan-lin' && <YanLinSection />}
              {activeStudent === 'koen' && <KoenSection />}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
