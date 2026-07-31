import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const CONCEPTS = [
  {
    n: '01', title: 'Anthocyanins',
    color: '#7c3aed', glow: 'rgba(124,58,237,0.2)',
    body: 'Basically just pigments that live inside plant cells and dissolve in water. The bit that makes them useful is a charged ring structure called the flavylium cation, which reacts really easily with hydrogen ions, which is what triggers the colour changes.',
    tag: 'Flavonoids · Flavylium cation',
  },
  {
    n: '02', title: 'Natural Pigments',
    color: '#ec4899', glow: 'rgba(236,72,153,0.2)',
    body: 'You do not need a lab to get these out. Just simmer the vegetable in water and the pigments dissolve straight in. No synthesis, nothing complicated. And the end result is completely safe to handle.',
    tag: 'Betalains · Flavonoids',
  },
  {
    n: '03', title: 'Acid-Base Reaction',
    color: '#34d399', glow: 'rgba(52,211,153,0.2)',
    body: 'Drop the indicator into an acid and it turns red because the anthocyanins are fully protonated and absorb green light. Keep raising the pH and the colour walks through purple, then blue, then yellow-green by the time you hit strong base.',
    tag: 'pH range 1 to 14',
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
        background: 'linear-gradient(145deg, rgba(124,58,237,0.06) 0%, rgba(255,255,255,0.015) 100%)',
        border: '1px solid rgba(124,58,237,0.09)',
        boxShadow: '0 1px 0 0 rgba(124,58,237,0.09) inset, 0 24px 64px rgba(0,0,0,0.5)',
      }}>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"
        style={{ background: `radial-gradient(ellipse at top left, ${c.glow}, transparent 65%)` }} />



      <div className="p-7 relative z-10">
        <div className="mb-5">
          <span className="font-mono font-bold" style={{ fontSize: '11px', color: c.color, letterSpacing: '0.08em' }}>{c.n}</span>
        </div>

        <h3 className="font-display font-bold text-xl mb-3" style={{ color: 'rgba(30,15,60,0.92)' }}>
          {c.title}
        </h3>
        <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(30,15,60,0.50)' }}>
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
      <div className="orb w-96 h-96 -left-32 top-20 opacity-40 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.25), transparent 70%)' }} />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 32 }} animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }} className="mb-20">
          <p className="eyebrow mb-4">The Chemistry</p>
          <h2 className="font-display font-bold leading-none mb-6"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)' }}>
            <span className="text-gradient">How It</span>
            <br />
            <span style={{ color: 'rgba(30,15,60,0.90)' }}>Works</span>
          </h2>
          <p className="text-sm leading-relaxed max-w-lg" style={{ color: 'rgba(30,15,60,0.45)' }}>
A quick rundown of the chemistry and what is actually going on inside the solution when the colour changes.
          </p>
        </motion.div>



        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CONCEPTS.map((c, i) => <ConceptCard key={c.n} c={c} i={i} />)}
        </div>

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
          <p className="font-mono text-sm text-center" style={{ color: 'rgba(30,15,60,0.55)' }}>
            Anthocyanin + H⁺ (acid) → Red Form · Low pH
          </p>
          <p className="font-mono text-center mt-5" style={{ fontSize: '11px', color: 'rgba(30,15,60,0.25)' }}>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
