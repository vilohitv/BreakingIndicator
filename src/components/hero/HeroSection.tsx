import { useState, useCallback, Suspense } from 'react';
import { motion } from 'framer-motion';
import { HeroCanvas } from '../three/HeroCanvas';
import { VegetableInfoCard } from './VegetableInfoCard';
import { useMousePosition } from '../../hooks/useMousePosition';
import type { Vegetable } from '../../types';

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  const [selected, setSelected] = useState<Vegetable | null>(null);
  const mouse = useMousePosition();

  const handleSelect   = useCallback((v: Vegetable | null) => setSelected(v), []);
  const handleDeselect = useCallback(() => setSelected(null), []);

  return (
    <section id="hero" className="relative w-full overflow-hidden scanlines"
      style={{ height: '100vh', minHeight: 640, background: 'var(--space)' }}>

      {/* Deep background gradient */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 90% 70% at 50% 35%, #12063a 0%, #04030a 65%)'
      }} />

      {/* Spatial grid */}
      <div className="absolute inset-0 pointer-events-none grid-bg opacity-30" />

      {/* 3D Canvas */}
      <Suspense fallback={
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-ping" />
        </div>
      }>
        <HeroCanvas onSelect={handleSelect} selected={selected} mouseX={mouse.normalX} mouseY={mouse.normalY} />
      </Suspense>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-72 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--space))' }} />

      {/* Side vignettes */}
      <div className="absolute inset-y-0 left-0 w-32 pointer-events-none"
        style={{ background: 'linear-gradient(to right, rgba(4,3,10,0.6), transparent)' }} />
      <div className="absolute inset-y-0 right-0 w-32 pointer-events-none"
        style={{ background: 'linear-gradient(to left, rgba(4,3,10,0.6), transparent)' }} />

      {/* Hero overlay text — pinned to bottom */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-28 pointer-events-none z-10">
        <motion.div
          className="text-center px-6 max-w-2xl"
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease }}
        >
          {/* Eyebrow */}
          <motion.div className="flex items-center justify-center gap-3 mb-5"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}>
            <span className="h-px w-10 block" style={{ background: 'linear-gradient(to right, transparent, rgba(167,139,250,0.5))' }} />
            <p className="eyebrow">Science Project</p>
            <span className="h-px w-10 block" style={{ background: 'linear-gradient(to left, transparent, rgba(167,139,250,0.5))' }} />
          </motion.div>

          {/* Title */}
          <motion.h1
            className="font-display font-bold leading-[1.0] tracking-tight mb-4"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.9, ease }}
          >
            <span className="text-gradient">Natural pH</span>
            <br />
            <span style={{ color: 'rgba(255,255,255,0.9)' }}>Indicator</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-sm leading-relaxed max-w-md mx-auto"
            style={{ color: 'rgba(255,255,255,0.42)', fontSize: 'clamp(0.82rem,1.8vw,1rem)' }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
          >
            A pH-sensitive extract from{' '}
            <span style={{ color: 'rgba(196,130,200,0.85)' }}>Red Cabbage</span>,{' '}
            <span style={{ color: 'rgba(220,120,160,0.85)' }}>Red Onion</span> &{' '}
            <span style={{ color: 'rgba(200,80,110,0.85)' }}>Beetroot</span>.
            <br />Click a vegetable above to explore it.
          </motion.p>

          {/* CTAs */}
          <motion.div className="flex gap-3 justify-center mt-8 pointer-events-auto"
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.05 }}>

            <a href="#how-it-works"
              className="relative group overflow-hidden rounded-full px-7 py-3 text-sm font-semibold text-white"
              style={{
                background: 'linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)',
                boxShadow: '0 0 28px rgba(124,58,237,0.45), 0 4px 12px rgba(0,0,0,0.4)',
              }}>
              <span className="relative z-10">Explore</span>
              {/* Shine sweep */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 60%)' }} />
            </a>

            <a href="#how-it-works"
              className="rounded-full px-7 py-3 text-sm font-medium transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(12px)',
                color: 'rgba(255,255,255,0.65)',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.9)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}>
              Learn More
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Info card */}
      <div className="absolute inset-0 pointer-events-none z-20">
        <VegetableInfoCard vegetable={selected} onClose={handleDeselect} />
      </div>

      {/* Scroll cue */}
      <motion.div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7 }}>
        <p className="eyebrow" style={{ fontSize: '9px', color: 'rgba(255,255,255,0.25)' }}>Scroll</p>
        <motion.div className="w-px h-8"
          style={{ background: 'linear-gradient(to bottom, rgba(167,139,250,0.5), transparent)' }}
          animate={{ scaleY: [1, 0.4, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.4, repeat: Infinity }} />
      </motion.div>

      {/* Hint badge */}
      {!selected && (
        <motion.div className="absolute top-24 right-6 z-20 hidden lg:block"
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 2 }}>
          <div className="rounded-2xl px-3.5 py-2.5"
            style={{ background: 'rgba(14,11,30,0.7)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.07)' }}>
            <p className="eyebrow" style={{ fontSize: '9px' }}>Click a vegetable</p>
            <p className="font-mono text-center mt-0.5" style={{ fontSize: '10px', color: 'rgba(255,255,255,0.28)' }}>to inspect</p>
          </div>
        </motion.div>
      )}
    </section>
  );
}
