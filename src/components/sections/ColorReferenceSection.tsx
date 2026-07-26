import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { PH_LEVELS } from '../../utils/data';

function PHCard({ level, index }: { level: typeof PH_LEVELS[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 44, scale: 0.94 }}
      animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.65, delay: index * 0.09, ease: [0.22,1,0.36,1] }}
      className="group relative rounded-3xl overflow-hidden cursor-default"
      style={{ border: `1px solid ${level.color}22` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>

      {/* Background */}
      <div className="absolute inset-0 transition-opacity duration-500"
        style={{
          background: `linear-gradient(160deg, ${level.color}16 0%, rgba(14,11,30,0.75) 60%)`,
          opacity: hovered ? 1 : 0.7,
        }} />

      {/* Glow on hover */}
      <div className="absolute inset-0 pointer-events-none transition-opacity duration-500 rounded-3xl"
        style={{
          boxShadow: `0 0 0 1px ${level.color}15, 0 0 40px ${level.color}${hovered ? '22' : '00'}`,
          opacity: hovered ? 1 : 0,
        }} />

      {/* Top colour band */}
      <div className="relative h-3 w-full"
        style={{ background: level.color, boxShadow: `0 0 20px ${level.color}` }} />
      {/* Band shine */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'rgba(255,255,255,0.4)' }} />

      <div className="relative z-10 p-5">
        {/* Circle */}
        <div className="flex items-start justify-end mb-5">
          <motion.div
            className="w-9 h-9 rounded-full flex-shrink-0"
            style={{
              background: level.color,
              boxShadow: hovered
                ? `0 0 0 4px ${level.color}20, 0 0 24px ${level.color}80`
                : `0 0 16px ${level.color}60`,
            }}
            animate={{ scale: hovered ? 1.12 : 1 }}
            transition={{ duration: 0.3 }} />
        </div>

        <h3 className="font-display font-bold text-lg mb-1" style={{ color: 'rgba(255,255,255,0.92)' }}>
          {level.label}
        </h3>
        <p className="font-mono text-xs mb-4" style={{ color: level.color }}>
          Indicator: {level.indicatorColor}
        </p>

        <div className="h-px mb-4" style={{ background: `linear-gradient(90deg, ${level.color}30, transparent)` }} />

        <p className="font-mono mb-2" style={{ fontSize: '9px', color: 'rgba(255,255,255,0.28)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          Examples
        </p>
        <ul className="space-y-1.5">
          {level.examples.map(ex => (
            <li key={ex} className="flex items-center gap-2 text-xs" style={{ color: 'rgba(255,255,255,0.48)' }}>
              <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: level.color }} />
              {ex}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export function ColorReferenceSection() {
  const { ref, isVisible } = useScrollReveal(0.2);
  return (
    <section id="colors" className="section-padding relative">
      <div className="orb w-96 h-96 left-1/2 -translate-x-1/2 top-10 opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.4), transparent 70%)' }} />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 32 }} animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }} className="mb-20">
          <p className="eyebrow mb-4">Reference</p>
          <h2 className="font-display font-bold leading-none mb-6"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)' }}>
            <span className="text-gradient">Colour</span>
            <br />
            <span style={{ color: 'rgba(255,255,255,0.9)' }}>Chart</span>
          </h2>
          <p className="text-sm leading-relaxed max-w-md" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Match your indicator colour to the chart below to determine the approximate pH of your solution.
          </p>
        </motion.div>

        {/* Spectrum bar */}
        <motion.div initial={{ opacity: 0, scaleX: 0 }} whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }} transition={{ duration: 1.2, ease: [0.22,1,0.36,1] }}
          style={{ transformOrigin: 'left' }} className="mb-16">
          <div className="relative h-20 rounded-3xl overflow-hidden ph-spectrum"
            style={{ boxShadow: '0 0 60px rgba(124,58,237,0.2), 0 8px 40px rgba(0,0,0,0.6)' }}>
            {/* Glass shine */}
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.1) 0%, transparent 50%)' }} />
            {/* Label row */}
            <div className="absolute inset-0 flex items-center justify-between px-6">
              {['Strong Acid','Weak Acid','Neutral','Weak Base','Strong Base'].map(l => (
                <span key={l} className="font-mono font-bold text-white/80 drop-shadow-lg hidden sm:block"
                  style={{ fontSize: '11px', letterSpacing: '0.06em' }}>{l}</span>
              ))}
            </div>
            {/* Border */}
            <div className="absolute inset-0 rounded-3xl" style={{ border: '1px solid rgba(255,255,255,0.15)' }} />
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'rgba(255,255,255,0.25)' }} />
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {PH_LEVELS.map((level, i) => <PHCard key={level.label} level={level} index={i} />)}
        </div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.8 }} className="font-mono text-center mt-8"
          style={{ fontSize: '11px', color: 'rgba(255,255,255,0.2)' }}>
          Colours may vary ± 0.5 pH units based on indicator concentration and temperature.
        </motion.p>
      </div>
    </section>
  );
}
