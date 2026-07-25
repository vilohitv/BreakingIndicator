import { useState, useCallback, Suspense } from 'react';
import { motion } from 'framer-motion';
import { HeroCanvas } from '../three/HeroCanvas';
import { VegetableInfoCard } from './VegetableInfoCard';
import { useMousePosition } from '../../hooks/useMousePosition';
import type { Vegetable } from '../../types';

export function HeroSection() {
  const [selected, setSelected] = useState<Vegetable | null>(null);
  const mouse = useMousePosition();

  const handleSelect = useCallback((v: Vegetable | null) => {
    setSelected(v);
  }, []);

  const handleDeselect = useCallback(() => {
    setSelected(null);
  }, []);

  const scrollToNext = () => {
    const next = document.getElementById('how-it-works');
    if (next) next.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{
        height: '100vh',
        minHeight: '600px',
        background: 'radial-gradient(ellipse 100% 80% at 50% 30%, #1e0a4a 0%, #0d0a1a 70%)',
      }}
    >
      {/* Radial gradient overlays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(124,58,237,0.12) 0%, transparent 70%)',
        }}
      />

      {/* 3D Canvas */}
      <Suspense fallback={<CanvasFallback />}>
        <HeroCanvas
          onSelect={handleSelect}
          selected={selected}
          mouseX={mouse.normalX}
          mouseY={mouse.normalY}
        />
      </Suspense>

      {/* Overlay gradient at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, #0d0a1a)',
        }}
      />

      {/* Hero text overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-32 pointer-events-none z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-center px-4 max-w-3xl"
        >
          {/* Lab tag */}
          <motion.p
            className="hero-label mb-4 flex items-center justify-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span
              className="inline-block w-8 h-px"
              style={{ background: 'rgba(167,139,250,0.5)' }}
            />
            Science Project
            <span
              className="inline-block w-8 h-px"
              style={{ background: 'rgba(167,139,250,0.5)' }}
            />
          </motion.p>

          {/* Main title */}
          <motion.h1
            className="font-display font-black leading-none mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontSize: 'clamp(2.4rem, 6vw, 5rem)' }}
          >
            <span className="gradient-text-white">Natural pH</span>
            <br />
            <span className="gradient-text">Indicator</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-white/50 font-body mt-4 max-w-lg mx-auto leading-relaxed"
            style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            A natural pH indicator crafted from{' '}
            <span className="text-violet-300">Red Cabbage</span>,{' '}
            <span className="text-pink-300">Red Onion</span> &{' '}
            <span className="text-rose-300">Beetroot</span>.
            <br />
            Interact with the scene above to explore each ingredient.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex gap-4 justify-center mt-8 pointer-events-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <button
              onClick={scrollToNext}
              className="relative group px-8 py-3.5 rounded-full font-body font-medium text-sm overflow-hidden transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #7c3aed, #5b21b6)',
                boxShadow: '0 0 30px rgba(124,58,237,0.4)',
              }}
            >
              <span className="relative z-10 text-white">Explore</span>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(135deg, #8b5cf6, #6d28d9)' }}
              />
            </button>
            <a
              href="#how-it-works"
              className="px-8 py-3.5 rounded-full font-body font-medium text-sm transition-all duration-300 text-white/70 hover:text-white"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                backdropFilter: 'blur(10px)',
              }}
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Vegetable info card */}
      <div className="absolute inset-0 pointer-events-none z-20">
        <VegetableInfoCard vegetable={selected} onClose={handleDeselect} />
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <p className="hero-label" style={{ fontSize: '9px' }}>Scroll to explore</p>
        <motion.div
          className="w-px h-8"
          style={{ background: 'linear-gradient(to bottom, rgba(167,139,250,0.6), transparent)' }}
          animate={{ scaleY: [1, 0.5, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {/* Hint to interact */}
      {!selected && (
        <motion.div
          className="absolute top-24 right-6 z-20 hidden md:block"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.8 }}
        >
          <div className="glass rounded-xl px-3 py-2 text-center">
            <p className="hero-label" style={{ fontSize: '9px' }}>Click a vegetable</p>
            <p className="text-white/30 text-xs mt-0.5">to inspect it</p>
          </div>
        </motion.div>
      )}
    </section>
  );
}

function CanvasFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-2 h-2 rounded-full bg-violet-400 animate-ping" />
    </div>
  );
}
