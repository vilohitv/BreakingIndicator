import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const PREP_STEPS = [
  { n: '01', title: 'Prepare the leaves', body: 'Leaves of red cabbage were placed into a bag or bowl.' },
  { n: '02', title: 'Add warm water and crush', body: 'Warm water was added to the bowl and the leaves were crushed until the water turned dark blue, indicating the anthocyanin pigments had been released.' },
  { n: '03', title: 'Strain the liquid', body: 'The liquid was strained into another bowl to remove the solid leaf material.' },
  { n: '04', title: 'Indicator is ready', body: 'The dark blue liquid collected in the bowl is ready to be used as a pH indicator.' },
];

const TEST_STEPS = [
  { n: '01', title: 'Separate into equal amounts', body: 'The red cabbage extract was divided into 3 equal portions.' },
  { n: '02', title: 'Add test solutions', body: 'An acidic liquid (e.g. lemon juice) was poured into one portion, a neutral liquid (water) into another, and an alkaline liquid (dissolved baking soda) into the last.' },
  { n: '03', title: 'Record observations', body: 'The colour of each portion was observed and recorded after adding the test solution.' },
  { n: '04', title: 'Observations', body: 'The red cabbage indicator turned from dark purple to pink upon contact with vinegar. It remained dark purple upon contact with water. It turned from dark purple to dark blue upon contact with dissolved baking soda. As such, vinegar is a weak acid, water is neutral, and dissolved baking soda is a weak alkaline.' },
];

const accent = '#16a34a';
const accentLight = '#86efac';
const accentGlow = 'rgba(22,163,74,0.4)';

function StepList({ steps }: { steps: typeof PREP_STEPS }) {
  return (
    <div className="relative">
      <div className="absolute left-5 top-0 bottom-0 w-px hidden md:block"
        style={{ background: `linear-gradient(to bottom, ${accentGlow}, rgba(22,163,74,0.05))` }} />
      <div className="space-y-8">
        {steps.map((step, i) => (
          <motion.div key={step.n}
            initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="flex gap-8 items-start">
            <div className="relative flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center z-10"
              style={{ background: 'rgba(22,163,74,0.15)', border: '1px solid rgba(22,163,74,0.35)' }}>
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
      style={{ background: 'rgba(22,163,74,0.07)', border: '1px solid rgba(22,163,74,0.2)' }}>
      <p className="eyebrow mb-3" style={{ color: accentLight }}>{label}</p>
      <h3 className="font-display font-bold text-xl mb-3" style={{ color: 'rgba(255,255,255,0.9)' }}>{title}</h3>
      <div className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{children}</div>
    </motion.div>
  );
}

export function KoenSection() {
  const { ref, isVisible } = useScrollReveal(0.2);
  return (
    <section id="koen" className="section-padding relative">
      <div className="orb w-80 h-80 -left-20 top-40 opacity-20 pointer-events-none"
        style={{ background: `radial-gradient(circle, ${accentGlow}, transparent 70%)` }} />
      <div className="max-w-6xl mx-auto px-6">

        <motion.div ref={ref} initial={{ opacity: 0, y: 32 }} animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }} className="mb-20">
          <p className="eyebrow mb-4">Koen</p>
          <h2 className="font-display font-bold leading-none mb-6" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)' }}>
            <span style={{ color: 'rgba(255,255,255,0.9)' }}>Red Cabbage </span>
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

          <InfoCard label="Reason" title="Why red cabbage changes colour">
            <p>Red cabbage contains anthocyanin (C15H11O+), a natural pigment that changes colour based on pH. At a lower pH range (1–3), the anthocyanin molecule changes structure and gains hydrogen ions, forming a positively charged flavylium cation. This cation absorbs blue-green light, which makes it appear red to the human eye.</p>
            <p className="mt-3">As the pH increases toward neutral and alkaline conditions, the anthocyanin progressively loses hydrogen ions and its molecular structure changes again, shifting the colour through purple, blue, and eventually green-yellow at strongly alkaline pH levels.</p>
          </InfoCard>

          <InfoCard label="Colour Reference" title="What the colours mean">
            <div className="space-y-2 mt-1">
              {[
                { colour: 'Red / Pink', meaning: 'Acid', dot: '#ef4444' },
                { colour: 'Blue / Purple', meaning: 'Neutral', dot: '#a78bfa' },
                { colour: 'Green / Yellow', meaning: 'Base', dot: '#86efac' },
              ].map(r => (
                <div key={r.meaning} className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: r.dot }} />
                  <span style={{ color: 'rgba(255,255,255,0.7)' }}>{r.colour}</span>
                  <span style={{ color: 'rgba(255,255,255,0.3)' }}>—</span>
                  <span style={{ color: 'rgba(255,255,255,0.5)' }}>{r.meaning}</span>
                </div>
              ))}
            </div>
          </InfoCard>

          <InfoCard label="Conclusion" title="Red cabbage is a reliable pH indicator">
            <p>Red cabbage extract produces clear, distinct, and reversible colour changes across the full pH range. The shift from pink in acidic conditions to dark purple in neutral and dark blue in alkaline conditions is easy to observe with the naked eye, making it a highly effective natural pH indicator.</p>
          </InfoCard>
        </div>
      </div>
    </section>
  );
}
