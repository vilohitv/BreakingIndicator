import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const CONCEPTS = [
  {
    n: '01', title: 'Anthocyanins',
    color: '#7c3aed', glow: 'rgba(124,58,237,0.2)',
    body: 'Water-soluble flavonoid pigments found inside plant cell vacuoles. Their core structure — a flavylium cation — is uniquely sensitive to hydrogen ion concentration, triggering dramatic colour shifts across the entire pH spectrum.',
    tag: 'Flavonoids · Flavylium cation',
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
        <circle cx="16" cy="16" r="7" stroke="#c4b5fd" strokeWidth="1.5"/>
        <circle cx="16" cy="16" r="3" fill="#7c3aed"/>
        <path d="M16 4v4M16 24v4M4 16h4M24 16h4" stroke="#c4b5fd" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="8.5" cy="8.5" r="1.5" fill="rgba(196,181,253,0.5)"/>
        <circle cx="23.5" cy="8.5" r="1.5" fill="rgba(196,181,253,0.5)"/>
        <circle cx="8.5" cy="23.5" r="1.5" fill="rgba(196,181,253,0.5)"/>
        <circle cx="23.5" cy="23.5" r="1.5" fill="rgba(196,181,253,0.5)"/>
      </svg>
    ),
  },
  {
    n: '02', title: 'Natural Pigments',
    color: '#ec4899', glow: 'rgba(236,72,153,0.2)',
    body: 'Unlike synthetic indicators, plant pigments are extracted by gentle simmering — no chemical synthesis. The vacuolar anthocyanins dissolve directly into water, producing a richly coloured stock solution that is entirely food-safe.',
    tag: 'Betalains · Flavonoids',
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
        <path d="M16 6c0 0-8 5-8 12a8 8 0 0016 0c0-7-8-12-8-12z" stroke="#f9a8d4" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M16 14c0 0-3 2-3 4a3 3 0 006 0c0-2-3-4-3-4z" fill="rgba(249,168,212,0.3)" stroke="#f9a8d4" strokeWidth="1"/>
      </svg>
    ),
  },
  {
    n: '03', title: 'Acid–Base Reaction',
    color: '#34d399', glow: 'rgba(52,211,153,0.2)',
    body: 'In acid (high H⁺), anthocyanins are fully protonated — the flavylium cation absorbs green light and appears red. As pH rises, sequential deprotonation blue-shifts absorption through purple, blue, green, and finally yellow-green in strong base.',
    tag: 'pH range 1 – 14',
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
        <path d="M6 24L13 8l6 10 4-6 3 12" stroke="#6ee7b7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="6" cy="24" r="1.5" fill="#34d399"/>
        <circle cx="26" cy="24" r="1.5" fill="#34d399"/>
      </svg>
    ),
  },
  {
    n: '04', title: 'Reversibility',
    color: '#fbbf24', glow: 'rgba(251,191,36,0.2)',
    body: 'Every colour change is fully reversible. Add acid to a blue solution and it snaps back to red instantly. This makes our indicator reusable across many experiments and ideal for demonstrating equilibrium chemistry in real time.',
    tag: 'Reversible · Equilibrium',
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
        <path d="M8 12a8 8 0 0116 0" stroke="#fde68a" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M24 20a8 8 0 01-16 0" stroke="#fde68a" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M22 9l2 3-3 1" stroke="#fde68a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 23l-2-3 3-1" stroke="#fde68a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

function ConceptCard({ c, i }: { c: typeof CONCEPTS[0]; i: number }) {
  const { ref, isVisible } = useScrollReveal(0.08);
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 44 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: i * 0.11, ease: [0.22,1,0.36,1] }}
      className="group relative rounded-3xl overflow-hidden hover-float"
      style={{
        background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.015) 100%)',
        border: '1px solid rgba(255,255,255,0.07)',
        boxShadow: '0 1px 0 0 rgba(255,255,255,0.07) inset, 0 24px 64px rgba(0,0,0,0.5)',
      }}>

      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"
        style={{ background: `radial-gradient(ellipse at top left, ${c.glow}, transparent 65%)` }} />

      {/* Accent bar */}
      <div className="absolute top-0 left-6 right-6 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${c.color}60, transparent)` }} />

      <div className="p-7 relative z-10">
        {/* Number + icon row */}
        <div className="flex items-start justify-between mb-5">
          <span className="font-mono font-bold" style={{ fontSize: '11px', color: c.color, letterSpacing: '0.08em' }}>{c.n}</span>
          <div className="w-11 h-11 rounded-2xl flex items-center justify-center"
            style={{ background: `${c.color}14`, border: `1px solid ${c.color}22` }}>
            {c.icon}
          </div>
        </div>

        <h3 className="font-display font-bold text-xl mb-3" style={{ color: 'rgba(255,255,255,0.92)' }}>
          {c.title}
        </h3>
        <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.45)' }}>
          {c.body}
        </p>

      </div>
    </motion.div>
  );
}

export function HowItWorksSection() {
  const { ref, isVisible } = useScrollReveal(0.2);
  return (
    <section id="how-it-works" className="section-padding relative">
      {/* Orb */}
      <div className="orb w-96 h-96 -left-32 top-20 opacity-40 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.25), transparent 70%)' }} />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 32 }} animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }} className="mb-20">
          <p className="eyebrow mb-4">The Chemistry</p>
          <h2 className="font-display font-bold leading-none mb-6"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)' }}>
            <span className="text-gradient">How It</span>
            <br />
            <span style={{ color: 'rgba(255,255,255,0.9)' }}>Works</span>
          </h2>
          <p className="text-sm leading-relaxed max-w-lg" style={{ color: 'rgba(255,255,255,0.4)' }}>
            From molecular structure to visible colour change — the science behind our natural pH indicator.
          </p>
        </motion.div>

        {/* pH spectrum strip */}
        <motion.div initial={{ opacity: 0, scaleX: 0 }} whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }} transition={{ duration: 1.1, ease: [0.22,1,0.36,1] }}
          style={{ transformOrigin: 'left' }}
          className="mb-20 relative">
          <div className="relative h-14 rounded-2xl overflow-hidden ph-spectrum"
            style={{ boxShadow: '0 0 40px rgba(124,58,237,0.2), 0 8px 32px rgba(0,0,0,0.5)' }}>
            {/* Glass overlay */}
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.08), transparent 60%)',
            }} />
            {/* Labels */}
            <div className="absolute inset-0 flex items-center justify-between px-5">
              {['1','2','3','4','5','6','7','8','9','10','11','12','13','14'].map(n => (
                <span key={n} className="font-mono font-bold text-white/75 drop-shadow-lg" style={{ fontSize: '11px' }}>{n}</span>
              ))}
            </div>
            {/* Border */}
            <div className="absolute inset-0 rounded-2xl" style={{ border: '1px solid rgba(255,255,255,0.12)' }} />
            {/* Top highlight */}
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'rgba(255,255,255,0.2)' }} />
          </div>
          <div className="flex justify-between mt-2 px-1">
            {['Strong Acid', 'Weak Acid', 'Neutral', 'Weak Base', 'Strong Base'].map(l => (
              <span key={l} className="font-mono text-center hidden sm:block"
                style={{ fontSize: '9px', color: 'rgba(255,255,255,0.28)', letterSpacing: '0.06em' }}>{l}</span>
            ))}
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CONCEPTS.map((c, i) => <ConceptCard key={c.n} c={c} i={i} />)}
        </div>

        {/* Reaction equation */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.3 }}
          className="mt-8 rounded-3xl p-7 relative overflow-hidden"
          style={{
            background: 'rgba(124,58,237,0.06)',
            border: '1px solid rgba(124,58,237,0.15)',
            boxShadow: '0 0 60px rgba(124,58,237,0.06)',
          }}>
          <div className="absolute top-0 left-1/4 right-1/4 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(167,139,250,0.5), transparent)' }} />
          <p className="eyebrow text-center mb-5">Reaction Summary</p>
          <p className="font-mono text-sm text-center" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Anthocyanin + H⁺ (acid) → Red Form · Low pH
          </p>
          <p className="font-mono text-center mt-5" style={{ fontSize: '11px', color: 'rgba(255,255,255,0.22)' }}>
            Fully reversible — the equilibrium shifts with every pH change
          </p>
        </motion.div>
      </div>
    </section>
  );
}
