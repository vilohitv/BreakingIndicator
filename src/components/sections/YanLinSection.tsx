import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const PREP_STEPS = [
  { n: '01', title: 'Peel and chop', body: 'The outer red-purple layers of a red onion were peeled and chopped into small pieces.' },
  { n: '02', title: 'Place in bowl', body: 'The chopped pieces were placed into a bowl or zip-lock bag.' },
  { n: '03', title: 'Add warm water and crush', body: 'Warm water was added and the onion pieces were crushed or mashed until the water turned purple.' },
  { n: '04', title: 'Strain the mixture', body: 'The mixture was strained through a sieve or filter paper into another container to separate the solids from the liquid.' },
  { n: '05', title: 'Extract is ready', body: 'The purple liquid extract is now ready to be used as a pH indicator.' },
];

const TEST_STEPS = [
  { n: '01', title: 'Divide into equal amounts', body: 'The red onion extract was separated into 3 equal portions.' },
  { n: '02', title: 'Add test solutions', body: 'Lemon juice was added to one portion, distilled water to another, and dissolved baking soda to the last.' },
  { n: '03', title: 'Observe and record', body: 'The colour change of each portion was observed and written down.' },
  { n: '04', title: 'What we saw', body: 'With lemon juice it turned bright pink. With water it stayed purple. With baking soda it went a yellowish green.' },
];

const accent = '#7c3aed';
const accentLight = '#c4b5fd';
const accentGlow = 'rgba(124,58,237,0.4)';

function StepList({ steps }: { steps: typeof PREP_STEPS }) {
  return (
    <div className="relative">
      <div className="absolute left-5 top-0 bottom-0 w-px hidden md:block"
        style={{ background: `linear-gradient(to bottom, ${accentGlow}, rgba(124,58,237,0.05))` }} />
      <div className="space-y-8">
        {steps.map((step, i) => (
          <motion.div key={step.n}
            initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="flex gap-8 items-start">
            <div className="relative flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center z-10"
              style={{ background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.35)' }}>
              <span className="font-mono font-bold text-xs" style={{ color: accentLight }}>{step.n}</span>
            </div>
            <div className="flex-1 pb-2">
              <h3 className="font-display font-bold text-lg mb-2" style={{ color: 'rgba(255,255,255,0.9)' }}>{step.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{step.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function InfoCard({ label, title, children }: { label: string; title: string; children: React.ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7 }}
      className="p-7 rounded-3xl"
      style={{ background: 'rgba(124,58,237,0.07)', border: '1px solid rgba(124,58,237,0.2)' }}>
      <p className="eyebrow mb-3" style={{ color: accentLight }}>{label}</p>
      <h3 className="font-display font-bold text-xl mb-3" style={{ color: 'rgba(255,255,255,0.9)' }}>{title}</h3>
      <div className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{children}</div>
    </motion.div>
  );
}

export function YanLinSection() {
  const { ref, isVisible } = useScrollReveal(0.2);
  return (
    <section id="yan-lin" className="section-padding relative">
      <div className="orb w-80 h-80 -right-20 top-40 opacity-20 pointer-events-none"
        style={{ background: `radial-gradient(circle, ${accentGlow}, transparent 70%)` }} />
      <div className="max-w-6xl mx-auto px-6">

        <motion.div ref={ref} initial={{ opacity: 0, y: 32 }} animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }} className="mb-20">
          <p className="eyebrow mb-4">Yan Lin</p>
          <h2 className="font-display font-bold leading-none mb-6" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)' }}>
            <span style={{ color: 'rgba(255,255,255,0.9)' }}>Red Onion </span>
            <span style={{ backgroundImage: `linear-gradient(135deg, ${accent}, ${accentLight})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Indicator</span>
          </h2>
        </motion.div>

        <div className="space-y-16">
          <div>
            <p className="eyebrow mb-8" style={{ color: accentLight }}>Obtaining the Pigment</p>
            <StepList steps={PREP_STEPS} />
          </div>

          <div>
            <p className="eyebrow mb-8" style={{ color: accentLight }}>Testing Whether It Is a Good Indicator</p>
            <StepList steps={TEST_STEPS} />
          </div>

          <InfoCard label="Reason" title="Why red onion changes colour">
            <p>Red onion contains anthocyanins, which are one of the most common natural pigments used as pH indicators. You find them in a lot of red, purple and blue fruits and vegetables like red cabbage, purple sweet potatoes and berries. These pigments change their molecular structure depending on the pH of the solution around them, which is what causes the different colours.</p>
            <p className="mt-3">In acidic solutions, anthocyanins pick up hydrogen ions and form a positively charged flavylium cation, which gives the extract a bright pink or red colour. In neutral solutions the pigment stays purple. In alkaline solutions the anthocyanins lose hydrogen ions and rearrange into different molecular structures, which shifts the colour to a yellowish green.</p>
          </InfoCard>

          <InfoCard label="Conclusion" title="Red onion works as a pH indicator">
            <p>Because anthocyanins produce distinct and reversible colour changes at different pH levels, red onion extract can be used as a natural pH indicator. The shift from bright pink in acid, to purple in neutral, to yellowish green in alkaline conditions is clear enough to identify the nature of a solution fairly reliably.</p>
          </InfoCard>
        </div>
      </div>
    </section>
  );
}
