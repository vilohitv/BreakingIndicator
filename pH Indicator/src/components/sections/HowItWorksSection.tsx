import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const CONCEPTS = [
  {
    title: 'Anthocyanins',
    icon: '🔬',
    color: '#7c3aed',
    glowColor: 'rgba(124,58,237,0.3)',
    description:
      'Water-soluble flavonoid pigments responsible for red, purple, and blue hues in plants. Their molecular structure — a flavylium cation — is uniquely sensitive to hydrogen ion concentration, making them ideal natural pH indicators.',
    detail: 'Found in: Red cabbage, red onion, blueberries, hibiscus',
  },
  {
    title: 'Natural Pigments',
    icon: '🌈',
    color: '#ec4899',
    glowColor: 'rgba(236,72,153,0.3)',
    description:
      'Unlike synthetic dyes, natural pigments exist within plant cell vacuoles and are released into aqueous solution when the plant matter is heated. This creates our rich, deep purple indicator solution without any chemical processing.',
    detail: 'Pigment type: Flavonoids + Betalains',
  },
  {
    title: 'Acid–Base Chemistry',
    icon: '⚗️',
    color: '#4ade80',
    glowColor: 'rgba(74,222,128,0.3)',
    description:
      'In acidic environments (high H⁺ concentration), anthocyanins adopt a red oxonium form. As pH rises, they undergo sequential deprotonation — transitioning through purple at neutral pH to blue, green, and finally yellow in strongly alkaline solutions.',
    detail: 'pH range detected: 1 – 14',
  },
  {
    title: 'Color Transitions',
    icon: '🎨',
    color: '#f59e0b',
    glowColor: 'rgba(245,158,11,0.3)',
    description:
      'Each color shift represents a structural change in the anthocyanin molecule. These transitions are fully reversible — add acid to a blue solution and it returns to red. This reversibility makes our indicator reusable for multiple experiments.',
    detail: 'Transitions: Red → Purple → Blue → Green → Yellow',
  },
];

function ConceptCard({ concept, index }: { concept: typeof CONCEPTS[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="relative glass rounded-2xl p-6 group hover:-translate-y-1 transition-transform duration-300 overflow-hidden"
      style={{
        border: `1px solid ${concept.color}25`,
      }}
    >
      {/* Glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{ background: `radial-gradient(ellipse at top left, ${concept.glowColor}, transparent 70%)` }}
      />

      <div className="relative z-10">
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
          style={{ background: `${concept.color}18`, border: `1px solid ${concept.color}30` }}
        >
          {concept.icon}
        </div>

        {/* Title */}
        <h3 className="font-display text-xl font-bold text-white mb-3">
          {concept.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-white/55 leading-relaxed mb-4">
          {concept.description}
        </p>

        {/* Detail tag */}
        <div
          className="inline-block text-xs font-mono px-3 py-1.5 rounded-full"
          style={{
            background: `${concept.color}15`,
            border: `1px solid ${concept.color}25`,
            color: concept.color,
          }}
        >
          {concept.detail}
        </div>
      </div>
    </motion.div>
  );
}

export function HowItWorksSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal(0.2);

  return (
    <section id="how-it-works" className="section-padding relative">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 20% 50%, rgba(124,58,237,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="hero-label mb-3">The Science</p>
          <h2 className="font-display text-4xl md:text-5xl font-black gradient-text-white">
            How It Works
          </h2>
          <p className="text-white/40 mt-4 max-w-xl mx-auto leading-relaxed text-sm">
            Understanding the chemistry behind our natural pH indicator —
            from molecular structure to visible color change.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-violet-500/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-violet-500/50" />
          </div>
        </motion.div>

        {/* Animated pH strip */}
        <div className="mb-16 relative overflow-hidden rounded-2xl" style={{ height: '60px' }}>
          <div className="absolute inset-0 glass rounded-2xl overflow-hidden">
            <div
              className="h-full"
              style={{
                background:
                  'linear-gradient(90deg, #cc0000 0%, #e06600 14%, #ccaa00 28%, #6b21a8 42%, #0066aa 57%, #00884a 71%, #cc0000 85%, #aa0033 100%)',
                opacity: 0.7,
              }}
            />
          </div>
          {/* pH labels */}
          <div className="absolute inset-0 flex items-center justify-between px-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((ph) => (
              <span key={ph} className="text-white/80 text-xs font-mono font-bold drop-shadow-lg">
                {ph}
              </span>
            ))}
          </div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 rounded-2xl" style={{ border: '1px solid rgba(255,255,255,0.1)' }} />
        </div>

        {/* Concept cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {CONCEPTS.map((concept, i) => (
            <ConceptCard key={concept.title} concept={concept} index={i} />
          ))}
        </div>

        {/* Molecular diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 glass rounded-2xl p-8 text-center relative overflow-hidden"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.08) 0%, transparent 70%)',
            }}
          />
          <p className="hero-label mb-3">Reaction Summary</p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {[
              { label: 'Acid (H⁺)', color: '#ef4444', bg: '#ef444415' },
              { label: '+', color: '#ffffff66', bg: 'transparent', border: 'none' },
              { label: 'Anthocyanin', color: '#a78bfa', bg: '#7c3aed15' },
              { label: '→', color: '#ffffff66', bg: 'transparent', border: 'none' },
              { label: 'Red Form', color: '#f87171', bg: '#ef444415' },
            ].map((item, i) => (
              <span
                key={i}
                className="text-sm font-mono font-medium px-4 py-2 rounded-lg"
                style={{
                  color: item.color,
                  background: item.bg,
                  border: item.border !== 'none' ? `1px solid ${item.color}30` : undefined,
                }}
              >
                {item.label}
              </span>
            ))}
          </div>
          <p className="text-white/30 text-xs mt-4 font-mono">
            The reaction is reversible — pH changes are fully detectable in both directions
          </p>
        </motion.div>
      </div>
    </section>
  );
}
