import { Suspense } from 'react';
import { HeroCanvas } from '../three/HeroCanvas';

export function HeroSection() {
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
        <HeroCanvas onSelect={() => {}} selected={null} mouseX={0} mouseY={0} />
      </Suspense>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-72 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--space))' }} />

      {/* Side vignettes */}
      <div className="absolute inset-y-0 left-0 w-32 pointer-events-none"
        style={{ background: 'linear-gradient(to right, rgba(4,3,10,0.6), transparent)' }} />
      <div className="absolute inset-y-0 right-0 w-32 pointer-events-none"
        style={{ background: 'linear-gradient(to left, rgba(4,3,10,0.6), transparent)' }} />
    </section>
  );
}
