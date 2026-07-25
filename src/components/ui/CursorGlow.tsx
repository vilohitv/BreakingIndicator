import { useEffect, useRef } from 'react';

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const dot     = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0, my = 0, cx = 0, cy = 0;
    let ddx = 0, ddy = 0;
    let raf: number;

    const move = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      cx  = lerp(cx,  mx, 0.05);
      cy  = lerp(cy,  my, 0.05);
      ddx = lerp(ddx, mx, 0.22);
      ddy = lerp(ddy, my, 0.22);

      if (glowRef.current) {
        glowRef.current.style.left = `${cx}px`;
        glowRef.current.style.top  = `${cy}px`;
      }
      if (dot.current) {
        dot.current.style.left = `${ddx}px`;
        dot.current.style.top  = `${ddy}px`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', move);
    raf = requestAnimationFrame(tick);
    return () => { window.removeEventListener('mousemove', move); cancelAnimationFrame(raf); };
  }, []);

  return (
    <>
      {/* Large ambient glow */}
      <div ref={glowRef} className="cursor-glow" />
      {/* Small precise dot */}
      <div ref={dot} className="fixed pointer-events-none z-50 w-1.5 h-1.5 rounded-full"
        style={{
          background: 'rgba(196,181,253,0.8)',
          transform: 'translate(-50%,-50%)',
          boxShadow: '0 0 8px rgba(167,139,250,0.8)',
          mixBlendMode: 'screen',
        }} />
    </>
  );
}
