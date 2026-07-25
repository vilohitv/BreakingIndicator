import { useEffect, useRef } from 'react';

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    let x = 0, y = 0;
    let raf: number;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    let curX = 0, curY = 0;

    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };

    const animate = () => {
      curX = lerp(curX, x, 0.06);
      curY = lerp(curY, y, 0.06);
      if (el) {
        el.style.left = `${curX}px`;
        el.style.top = `${curY}px`;
      }
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', move);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="cursor-glow"
      style={{ pointerEvents: 'none' }}
    />
  );
}
