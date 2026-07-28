import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const PREP_STEPS = [
  { n: '01', title: 'Prepare the leaves', body: 'Leaves of red cabbage were placed into a bag or bowl.' },
  { n: '02', title: 'Add warm water and crush', body: 'Warm water was added and the leaves were crushed until the water turned a dark blue colour, which means the anthocyanin pigments had been released.' },
  { n: '03', title: 'Strain the liquid', body: 'The liquid was strained into another bowl to remove the solid leaf material.' },
  { n: '04', title: 'Indicator is ready', body: 'The dark blue liquid in the bowl is now ready to use as a pH indicator.' },
];

const TEST_STEPS = [
  { n: '01', title: 'Separate into equal amounts', body: 'The red cabbage extract was divided into 3 equal portions.' },
  { n: '02', title: 'Add test solutions', body: 'Lemon juice was poured into one portion, water into another, and dissolved baking soda into the last.' },
  { n: '03', title: 'Record observations', body: 'The colour of each portion was observed and recorded after adding the test solution.' },
  { n: '04', title: 'What we saw', body: 'With vinegar it turned from dark purple to pink. With water it stayed dark purple. With baking soda it shifted from dark purple to dark blue. So vinegar is a weak acid, water is neutral and baking soda is a weak alkaline.' },
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

          <div className="space-y-6">
            <p className="eyebrow mb-2" style={{ color: accentLight }}>Literature Review</p>

            <InfoCard label="Background Chemistry" title="Red cabbage and its pigments">
              <p>Red cabbage contains one of the highest concentrations of anthocyanins found in any common vegetable. The main compound responsible for its colour is cyanidin-3-diglucoside-5-glucoside, though several other related anthocyanin compounds are also present. Together they make up a pigment mixture that is highly responsive to changes in pH, which is why red cabbage has become the most widely used vegetable for natural indicator experiments.</p>
              <p className="mt-3">The anthocyanins in red cabbage are stored inside the vacuoles of the leaf cells. When the leaves are crushed or heated in water, the cell walls break open and the pigments dissolve into the liquid. This produces the characteristic dark blue-purple extract that forms the basis of the indicator.</p>
            </InfoCard>

            <InfoCard label="Previous Research" title="What researchers have found about red cabbage">
              <p>Red cabbage anthocyanins have been extensively studied in both food science and educational chemistry. Bridle and Timberlake (1997) reviewed the colour behaviour of anthocyanins across a wide pH range and found that red cabbage extracts show some of the most distinct and predictable colour transitions of any natural pigment source. At pH 1 to 2 the extract is bright red, at pH 4 to 5 it shifts to purple, at pH 7 it appears violet-blue, and above pH 10 it becomes green and eventually yellow.</p>
              <p className="mt-3">Experiments comparing red cabbage to other natural indicators, including red onion, grape juice and blackberries, consistently rank it as the most effective for classroom use. Its colour changes are vivid, the transitions are clearly separated across the pH scale, and the extract is easy to prepare without any special equipment.</p>
            </InfoCard>

            <InfoCard label="Scientific Explanation" title="Why the colour changes so dramatically">
              <p>The reason red cabbage is such a good indicator comes down to the stability and reactivity of its flavylium cation. At low pH the cation is fully protonated and absorbs green light strongly, so the solution looks red or pink. As pH increases, the molecule undergoes sequential deprotonation and structural changes. First it converts to a neutral quinoidal base, which appears purple. Then it shifts to a blue ionised form. At very high pH the ring structure opens up into a chalcone, which absorbs in a different part of the spectrum and gives the extract a yellow-green colour.</p>
              <p className="mt-3">Each of these transitions is chemically reversible. If you add acid to the green extract it shifts back through blue and purple all the way to red. This reversibility is a direct result of the equilibrium between the different molecular forms, and it is what makes anthocyanins so useful as indicators.</p>
            </InfoCard>

            <InfoCard label="Relevant Variables" title="Factors that can affect the results">
              <p>The pH of the water used to prepare the extract can influence the starting colour of the indicator. Tap water with slightly alkaline minerals might give a slightly more blue-toned extract compared to distilled water. The temperature during preparation also matters. Simmering at around 70 to 80 degrees Celsius is enough to release the pigments without significantly degrading them, while boiling for too long starts to break down the anthocyanin structure.</p>
              <p className="mt-3">How much of the indicator is added relative to the test solution affects how clearly the colour shows up. Too little and the colour might be too faint to read accurately. Too much and you risk the indicator dominating the pH of the solution and changing the result. Keeping a consistent ratio across all test portions is important for making the results comparable.</p>
            </InfoCard>

            <InfoCard label="Connection to Our Experiment" title="How this connects to our investigation">
              <p>Our experiment tested red cabbage extract against vinegar, water and dissolved baking soda to see whether the colour changes were clear enough to identify the pH category of each solution. The literature strongly predicted that it would work, and our results confirmed that. The colour shifted from pink in vinegar, stayed dark purple in water, and moved to dark blue in baking soda, exactly in line with what the anthocyanin chemistry would predict.</p>
              <p className="mt-3">Compared to the beetroot and red onion experiments, red cabbage produced the clearest and most distinct colour differences. This is consistent with what researchers have found when comparing natural indicators. The high anthocyanin concentration and the broad pH response range make red cabbage the most reliable choice for this kind of experiment.</p>
            </InfoCard>
          </div>

          <InfoCard label="Reason" title="Why red cabbage changes colour">
            <p>Red cabbage contains anthocyanin (C15H11O+), a natural pigment that changes colour based on pH. At a low pH range of around 1 to 3, the anthocyanin molecule gains hydrogen ions and forms a positively charged flavylium cation. This cation absorbs blue-green light, which makes it look red to the human eye.</p>
            <p className="mt-3">As the pH increases toward neutral and then alkaline conditions, the anthocyanin gradually loses hydrogen ions and its molecular structure changes again. This shifts the colour through purple, blue and eventually green-yellow at strongly alkaline pH levels.</p>
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
                  <span style={{ color: 'rgba(255,255,255,0.3)' }}>·</span>
                  <span style={{ color: 'rgba(255,255,255,0.5)' }}>{r.meaning}</span>
                </div>
              ))}
            </div>
          </InfoCard>

          <InfoCard label="Conclusion" title="Red cabbage is a reliable pH indicator">
            <p>Red cabbage extract produces clear, distinct and reversible colour changes across the full pH range. The shift from pink in acidic conditions to dark purple in neutral and dark blue in alkaline conditions is easy to see with the naked eye, which makes it a really effective natural pH indicator.</p>
          </InfoCard>
        </div>
      </div>
    </section>
  );
}
