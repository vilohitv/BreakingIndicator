import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const PREP_STEPS = [
  { n: '01', title: 'Gather the beetroots', body: '5 fresh beetroots were selected as the base material for the indicator solution.' },
  { n: '02', title: 'Cut into pieces', body: 'Each beetroot was cut into 8 equal pieces, giving 40 pieces in total. Smaller pieces increase the surface area, helping the pigments release more easily during blending.' },
  { n: '03', title: 'Add water', body: '50ml of water was added to the beetroot pieces before blending. This gives the blender enough liquid to work with and dilutes the pigment into a workable solution.' },
  { n: '04', title: 'Blend', body: 'All the pieces were blended together until smooth. The blending breaks down the cell walls of the beetroot, releasing the betalain pigments into the water.' },
  { n: '05', title: 'Filter the liquid', body: 'The blended mixture was filtered to separate the solid pulp from the liquid. The deep red liquid that passed through is the beetroot indicator.' },
];

const TEST_STEPS = [
  { n: '01', title: 'Separate into equal amounts', body: 'The beetroot extract was divided into 3 equal portions, one for each test solution.' },
  { n: '02', title: 'Add test solutions', body: 'An acidic liquid (lemon juice) was added to one portion, distilled water to another, and dissolved baking soda to the last.' },
  { n: '03', title: 'Record observations', body: 'The colour of each portion was observed and recorded after adding the test solution.' },
  { n: '04', title: 'Observations', body: 'The beetroot indicator showed very little colour change across all three solutions. The colour remained a similar deep red-pink regardless of whether the solution was acidic, neutral, or alkaline, making the differences very difficult to distinguish.' },
];

const accent = '#be185d';
const accentLight = '#f472b6';
const accentGlow = 'rgba(190,24,93,0.4)';

function StepList({ steps }: { steps: typeof PREP_STEPS }) {
  return (
    <div className="relative">
      <div className="absolute left-5 top-0 bottom-0 w-px hidden md:block"
        style={{ background: `linear-gradient(to bottom, ${accentGlow}, rgba(190,24,93,0.05))` }} />
      <div className="space-y-8">
        {steps.map((step, i) => (
          <motion.div key={step.n}
            initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="flex gap-8 items-start">
            <div className="relative flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center z-10"
              style={{ background: 'rgba(190,24,93,0.15)', border: `1px solid rgba(190,24,93,0.35)` }}>
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
      style={{ background: `rgba(190,24,93,0.07)`, border: `1px solid rgba(190,24,93,0.2)` }}>
      <p className="eyebrow mb-3" style={{ color: accentLight }}>{label}</p>
      <h3 className="font-display font-bold text-xl mb-3" style={{ color: 'rgba(255,255,255,0.9)' }}>{title}</h3>
      <div className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{children}</div>
    </motion.div>
  );
}

export function VilohitSection() {
  const { ref, isVisible } = useScrollReveal(0.2);
  return (
    <section id="vilohit" className="section-padding relative">
      <div className="orb w-80 h-80 -left-20 top-40 opacity-20 pointer-events-none"
        style={{ background: `radial-gradient(circle, ${accentGlow}, transparent 70%)` }} />
      <div className="max-w-6xl mx-auto px-6">

        <motion.div ref={ref} initial={{ opacity: 0, y: 32 }} animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }} className="mb-20">
          <p className="eyebrow mb-4">Vilohit</p>
          <h2 className="font-display font-bold leading-none mb-6" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)' }}>
            <span style={{ color: 'rgba(255,255,255,0.9)' }}>Beetroot </span>
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

          <InfoCard label="Reason" title="Why beetroot changes colour">
            <p>Beetroot contains betalain pigments, which give it its deep red colour. Unlike anthocyanins found in red cabbage and red onion, betalains do not shift colour significantly across the pH scale. The molecular structure of betalains is not sensitive enough to hydrogen ion concentration to produce clear, distinct colour changes between acidic, neutral, and alkaline conditions.</p>
          </InfoCard>

          <InfoCard label="Conclusion" title="Beetroot is not a reliable pH indicator">
            <p>Because the colour stays a similar deep red-pink regardless of the pH level, it is very difficult to use beetroot extract as a reliable indicator in practice. The difference between an acidic, neutral, and basic solution is not obvious to the naked eye, which means results can easily be misread or missed entirely.</p>
          </InfoCard>
        </div>
      </div>
    </section>
  );
}
