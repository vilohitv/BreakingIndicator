import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const RESULTS = [
  { id: 'A', colour: 'Violet',          category: 'Neutral',      dot: '#7c3aed', glow: 'rgba(124,58,237,0.35)', bg: 'rgba(124,58,237,0.08)', border: 'rgba(124,58,237,0.22)' },
  { id: 'B', colour: 'Bright Pinkish Red', category: 'Weak Acid', dot: '#f97316', glow: 'rgba(249,115,22,0.35)', bg: 'rgba(249,115,22,0.08)', border: 'rgba(249,115,22,0.22)' },
  { id: 'C', colour: 'Deep Dark Blue',  category: 'Weak Alkali',  dot: '#3b82f6', glow: 'rgba(59,130,246,0.35)', bg: 'rgba(59,130,246,0.08)', border: 'rgba(59,130,246,0.22)' },
  { id: 'D', colour: 'Violet',          category: 'Neutral',      dot: '#7c3aed', glow: 'rgba(124,58,237,0.35)', bg: 'rgba(124,58,237,0.08)', border: 'rgba(124,58,237,0.22)' },
  { id: 'E', colour: 'Bright Red',      category: 'Strong Acid',  dot: '#dc2626', glow: 'rgba(220,38,38,0.35)',  bg: 'rgba(220,38,38,0.08)',  border: 'rgba(220,38,38,0.22)'  },
  { id: 'F', colour: 'Yellow-Green',    category: 'Strong Alkali', dot: '#16a34a', glow: 'rgba(22,163,74,0.35)', bg: 'rgba(22,163,74,0.08)', border: 'rgba(22,163,74,0.22)'  },
];

export function GallerySection() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section id="gallery" className="section-padding relative">
      <div
        className="orb w-64 h-64 left-0 top-1/3 opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.4), transparent 70%)' }}
      />

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <p className="eyebrow mb-4">Visual Results</p>
          <h2
            className="font-display font-bold leading-none mb-6"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)' }}
          >
            <span style={{ color: 'rgba(30,15,60,0.90)' }}>pH </span>
            <span className="text-gradient">Test Results</span>
          </h2>
          <p className="text-sm leading-relaxed max-w-md" style={{ color: 'rgba(30,15,60,0.45)' }}>
            We tested our combined indicator on six unknown substances and identified each one based on the colour it produced. The photo below shows the actual beakers from the experiment.
          </p>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative rounded-3xl overflow-hidden mb-14"
          style={{ border: '1px solid rgba(124,58,237,0.10)' }}
        >
          <img
            src="/ph_test.jpg"
            alt="pH test results showing beakers with colour changes"
            className="w-full h-auto object-cover block"
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
            style={{ background: 'linear-gradient(to top, rgba(4,3,10,0.4), transparent)' }}
          />
        </motion.div>

        {/* Results heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <p className="eyebrow mb-3">Unknown Substances</p>
        </motion.div>

        {/* Result cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {RESULTS.map((r, i) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl p-5 overflow-hidden"
              style={{
                background: r.bg,
                border: `1px solid ${r.border}`,
              }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-6 right-6 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${r.dot}80, transparent)` }} />

              <div className="flex items-start justify-between mb-4">
                {/* Letter badge */}
                <div className="w-10 h-10 rounded-xl flex items-center justify-center font-display font-bold text-lg"
                  style={{
                    background: `${r.dot}20`,
                    border: `1px solid ${r.dot}40`,
                    color: r.dot,
                    boxShadow: `0 0 16px ${r.glow}`,
                  }}>
                  {r.id}
                </div>

                {/* Colour dot */}
                <div className="w-4 h-4 rounded-full mt-1 flex-shrink-0"
                  style={{ background: r.dot, boxShadow: `0 0 10px ${r.glow}` }} />
              </div>

              <p className="font-display font-bold text-base mb-1" style={{ color: 'rgba(30,15,60,0.90)' }}>
                {r.category}
              </p>
              <p className="font-mono text-xs" style={{ color: r.dot }}>
                {r.colour}
              </p>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
