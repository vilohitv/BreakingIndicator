import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { PH_LEVELS } from '../../utils/data';

function PHCard({ level, index }: { level: typeof PH_LEVELS[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative glass rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300"
      style={{ border: `1px solid ${level.color}30` }}
    >
      {/* Color swatch top */}
      <div
        className="h-2 w-full"
        style={{ background: level.color }}
      />

      {/* Glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{
          background: `radial-gradient(ellipse at top, ${level.color}15, transparent 60%)`,
          pointerEvents: 'none',
        }}
      />

      <div className="p-5 relative z-10">
        {/* pH range badge */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <span
              className="text-xs font-mono font-bold px-2.5 py-1 rounded-full"
              style={{
                background: `${level.color}20`,
                color: level.color,
                border: `1px solid ${level.color}30`,
              }}
            >
              pH {level.range}
            </span>
          </div>
          <div
            className="w-8 h-8 rounded-full shadow-lg flex-shrink-0"
            style={{
              background: level.color,
              boxShadow: `0 0 20px ${level.color}60`,
            }}
          />
        </div>

        {/* Label */}
        <h3 className="font-display text-lg font-bold text-white mb-1">
          {level.label}
        </h3>

        {/* Indicator color */}
        <p className="text-xs font-mono mb-3" style={{ color: level.color }}>
          Indicator: {level.indicatorColor}
        </p>

        {/* Divider */}
        <div className="h-px mb-3" style={{ background: `${level.color}20` }} />

        {/* Examples */}
        <div>
          <p className="text-xs text-white/35 mb-2 font-mono uppercase tracking-wider">
            Example Substances
          </p>
          <ul className="space-y-1">
            {level.examples.map((ex) => (
              <li key={ex} className="flex items-center gap-2 text-xs text-white/55">
                <span
                  className="w-1 h-1 rounded-full flex-shrink-0"
                  style={{ background: level.color }}
                />
                {ex}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export function ColorReferenceSection() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section id="colors" className="section-padding relative">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(124,58,237,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="hero-label mb-3">Reference</p>
          <h2 className="font-display text-4xl md:text-5xl font-black gradient-text-white">
            Color Chart
          </h2>
          <p className="text-white/40 mt-4 max-w-md mx-auto text-sm leading-relaxed">
            Compare your indicator color against this reference chart to determine the approximate pH of your test solution.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-violet-500/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-violet-500/50" />
          </div>
        </motion.div>

        {/* Full spectrum bar */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 relative rounded-2xl overflow-hidden h-16"
          style={{ transformOrigin: 'left' }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, #cc2200 0%, #e05500 20%, #7c3aed 40%, #059669 65%, #16a34a 100%)',
            }}
          />
          <div
            className="absolute inset-0 flex items-center justify-between px-6"
            style={{ background: 'rgba(0,0,0,0.2)' }}
          >
            {['Strong Acid', 'Weak Acid', 'Neutral', 'Weak Base', 'Strong Base'].map((l) => (
              <span key={l} className="text-white/90 text-xs font-mono font-bold drop-shadow-md hidden sm:block">
                {l}
              </span>
            ))}
          </div>
          <div className="absolute inset-0 rounded-2xl" style={{ border: '1px solid rgba(255,255,255,0.08)' }} />
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {PH_LEVELS.map((level, i) => (
            <PHCard key={level.label} level={level} index={i} />
          ))}
        </div>

        {/* Legend note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center text-xs text-white/25 font-mono mt-8"
        >
          Colors shown are approximate and may vary based on indicator concentration and temperature.
        </motion.p>
      </div>
    </section>
  );
}
