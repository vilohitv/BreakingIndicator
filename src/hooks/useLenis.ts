import { useEffect } from 'react';
import Lenis from 'lenis';

let lenisInstance: Lenis | null = null;
let rafId: number | null = null;

function startLenis() {
  if (lenisInstance) return;

  const lenis = new Lenis({
    duration: 1.4,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    smoothWheel: true,
  });

  lenisInstance = lenis;

  function raf(time: number) {
    lenis.raf(time);
    rafId = requestAnimationFrame(raf);
  }

  rafId = requestAnimationFrame(raf);
}

function stopLenis() {
  if (rafId !== null) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
  }
}

export function getLenis() {
  return lenisInstance;
}

export function pauseLenis() {
  stopLenis();
}

export function resumeLenis() {
  startLenis();
}

export function useLenis() {
  useEffect(() => {
    startLenis();
    return () => stopLenis();
  }, []);
}
