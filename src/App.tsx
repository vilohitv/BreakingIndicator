import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLenis, pauseLenis, resumeLenis } from './hooks/useLenis';
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

  useEffect(() => {
    if (activeStudent) {
      // Fully destroy Lenis so it cannot intercept wheel/touch events at all
      pauseLenis();
    } else {
      // Recreate Lenis for the main page
      resumeLenis();
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

      <AnimatePresence>
        {activeStudent && (
          <motion.div
            key={activeStudent}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 50,
              background: '#04030a',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                overflowY: 'auto',
                overflowX: 'hidden',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                style={{
                  position: 'sticky',
                  top: '1.5rem',
                  float: 'right',
                  marginRight: '1.5rem',
                  zIndex: 60,
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: '9999px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(255,255,255,0.12)',
                  border: '1px solid rgba(255,255,255,0.18)',
                  cursor: 'pointer',
                }}
                aria-label="Close"
              >
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M1 1l11 11M12 1L1 12" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>

              <div style={{ clear: 'both' }}>
                {activeStudent === 'vilohit' && <VilohitSection />}
                {activeStudent === 'yan-lin' && <YanLinSection />}
                {activeStudent === 'koen' && <KoenSection />}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
