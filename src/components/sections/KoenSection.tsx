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

const REFERENCES = [
  { citation: 'Helmenstine, A. M. (2023, March 14). Red cabbage pH indicator: Make a pH indicator. ThoughtCo. https://www.thoughtco.com/red-cabbage-ph-indicator-601828' },
  { citation: 'BBC Bitesize. (2023). Indicators and the pH scale. BBC. https://www.bbc.co.uk/bitesize/guides/z3frd2p/revision/3' },
  { citation: 'LibreTexts Chemistry. (2023, June 15). Anthocyanins. LibreTexts. https://chem.libretexts.org/Bookshelves/Biological_Chemistry/Supplemental_Modules_(Biological_Chemistry)/Pigments/Anthocyanins' },
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

function ReferencesCard() {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7 }}
      className="p-7 rounded-3xl"
      style={{ background: 'rgba(22,163,74,0.05)', border: '1px solid rgba(22,163,74,0.15)' }}>
      <p className="eyebrow mb-3" style={{ color: accentLight }}>References</p>
      <h3 className="font-display font-bold text-xl mb-5" style={{ color: 'rgba(255,255,255,0.9)' }}>APA 7 Citations</h3>
      <div className="space-y-4">
        {REFERENCES.map((ref, i) => (
          <p key={i} className="text-sm leading-relaxed pl-6 -indent-6"
            style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'monospace', fontSize: '0.78rem' }}>
            {ref.citation}
          </p>
        ))}
      </div>
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

          <div>
            <p className="eyebrow mb-6" style={{ color: accentLight }}>Photos</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { src: '/cabbage_acid.jpeg', label: 'Acid', caption: 'Vinegar. The extract shifted from dark purple to a vivid bright red, one of the clearest colour changes we saw in any of the experiments.', dot: '#ef4444' },
                { src: '/cabbage_neutral.jpeg', label: 'Neutral', caption: 'Tap water. The extract stayed a steady purple, giving us a clean baseline to compare the other two results against.', dot: '#7c3aed' },
                { src: '/cabbage_alkali.jpeg', label: 'Alkali', caption: 'Baking soda. The extract shifted to a deep dark blue, which is a strong indicator of an alkaline solution.', dot: '#3b82f6' },
              ].map((photo, i) => (
                <motion.div key={photo.label}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl overflow-hidden"
                  style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="relative">
                    <img src={photo.src} alt={`Red cabbage indicator in ${photo.label}`}
                      className="w-full h-48 object-cover block" />
                    <div className="absolute top-3 left-3">
                      <span className="font-mono font-bold text-xs px-2.5 py-1 rounded-full"
                        style={{ background: photo.dot, border: '1px solid rgba(0,0,0,0.2)', color: '#fff' }}>
                        {photo.label}
                      </span>
                    </div>
                  </div>
                  <div className="p-4" style={{ background: 'rgba(22,163,74,0.05)' }}>
                    <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{photo.caption}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <p className="eyebrow mb-2" style={{ color: accentLight }}>Literature Review</p>

            <InfoCard label="Background Chemistry" title="Red cabbage and its pigments">
              <p>Red cabbage has a very high anthocyanin content compared to most other food plants. Its main pigment compound is cyanidin-3-diglucoside-5-glucoside, and several other anthocyanins are present alongside it. Together they make up a rich pigment mixture, which is why researchers have recognised red cabbage as one of the most widely used natural acid-base indicators.</p>
              <p className="mt-3">These anthocyanins are stored inside the vacuoles of the plant's cells. When the cell walls are broken down by pounding or heating in water, a dark purplish solution is released from the leaves and stems — and that liquid is what we use as the indicator.</p>
            </InfoCard>

            <InfoCard label="Previous Research" title="What researchers have found about red cabbage">
              <p>The acid-base properties of anthocyanins from red cabbage and other plant sources have been studied in a lot of detail. Bridle and Timberlake (1997) looked at how anthocyanin colour changes across different pH levels and found that red cabbage showed some of the most vivid transitions of any natural indicator. At pH 1 to 2 the extract is bright red, at pH 4 to 5 it turns purple, at pH 7 it looks violet-blue, and above pH 10 it shifts to green and then yellow.</p>
              <p className="mt-3">When red cabbage has been compared to other natural indicators like red onion, grape juice and blackberries, it consistently comes out on top for classroom use. The colour changes are clear and easy to read, the transitions are well spread across the pH scale, and the extract is simple to prepare. More recent studies have also confirmed that the indicator lets you visually estimate pH just by comparing the colour against a standard reference table.</p>
            </InfoCard>

            <InfoCard label="Scientific Explanation" title="Why the colour changes so dramatically">
              <p>The reason red cabbage works so well as an indicator comes down to how its flavylium cation behaves at different pH levels. In strongly acidic conditions (pH 1 to 3), the cation is protonated and dominates, giving the extract a red colour. As pH rises above 3, the protonated cation starts losing hydrogen ions and converts into a neutral quinoidal base, which looks purple. Keep raising the pH and it shifts into an ionised anthocyanin form that appears blue. At very high pH levels (above 10), the structure rearranges into a chalcone, producing the green and yellow colours.</p>
              <p className="mt-3">Every one of these changes is reversible. If you add a few drops of acid to the green solution, you can watch the colours shift back in the opposite direction — a direct result of the equilibrium between the different molecular forms.</p>
            </InfoCard>

            <InfoCard label="Relevant Variables" title="Factors that can affect the results">
              <p>The starting pH of the water used to prepare the extract matters. If slightly alkaline tap water is used, the indicator may start with a more blue-toned colour than expected. Temperature during extraction is also important — boiling pulls more anthocyanin out of the leaves, but boiling for too long starts to break down the molecular structure and degrade the pigment.</p>
              <p className="mt-3">The amount of indicator added relative to each test sample is another key variable. Too little and the colour change is too faint to read clearly. Too much and the indicator itself can shift the pH of the test solution, making the result unreliable. Keeping the number of drops consistent across all samples is essential for fair comparison.</p>
            </InfoCard>

            <InfoCard label="Connection to Our Experiment" title="How this connects to our investigation">
              <p>Our experiment tested red cabbage extract against vinegar, water and dissolved baking soda to check whether the colour changes were clear enough to identify each solution's pH. Based on the existing research, we expected it to work well — and it did. The extract shifted from pink with vinegar, stayed dark purple with water, and turned dark blue with baking soda, exactly matching what the anthocyanin chemistry predicts.</p>
              <p className="mt-3">Compared to the beetroot and red onion experiments, red cabbage gave the clearest and most distinct colour differences. This lines up with what previous researchers have reported, and it confirms why red cabbage is consistently the first choice for this kind of natural indicator experiment.</p>
            </InfoCard>
          </div>

          <InfoCard label="Reason" title="Why red cabbage changes colour">
            <p>Red cabbage contains anthocyanin (C₁₅H₁₁O⁺), a natural pigment that changes colour based on pH. At low pH (around 1 to 3), the anthocyanin molecule picks up hydrogen ions and forms a positively charged flavylium cation. This cation absorbs blue-green light, so the extract looks red to the human eye. As the pH rises toward neutral and then alkaline conditions, the molecule progressively loses hydrogen ions and its structure changes — shifting the colour through purple, blue and eventually yellow-green at strongly alkaline pH levels.</p>
          </InfoCard>

          <InfoCard label="Chemical Reactions" title="What happens at each pH level">
            <div className="space-y-3 mt-1">
              {[
                { form: 'Flavylium Cation (AH⁺)', formula: '[C₂₁H₂₁O₁₁]⁺  ·  Net charge +1', ph: 'pH ≤ 2', colour: 'Bright Red', dot: '#ef4444' },
                { form: 'Quinoid Base (A)', formula: 'C₂₁H₂₀O₁₁  ·  Net charge 0', ph: 'pH 6–7', colour: 'Purple / Blue', dot: '#7c3aed' },
                { form: 'Phenolate Anion (A⁻)', formula: '[C₂₁H₁₉O₁₁]⁻  ·  Net charge −1', ph: 'pH 8–11', colour: 'Green', dot: '#16a34a' },
                { form: 'Chalcone (Ring-Opened)', formula: 'C₂₁H₂₂O₁₁  ·  Net charge 0', ph: 'pH ≥ 12', colour: 'Bright Yellow', dot: '#eab308' },
              ].map(r => (
                <div key={r.form} className="p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: r.dot }} />
                    <span className="font-semibold text-xs" style={{ color: 'rgba(255,255,255,0.85)' }}>{r.form}</span>
                  </div>
                  <p className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.4)' }}>{r.formula}</p>
                  <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>{r.ph} · {r.colour}</p>
                </div>
              ))}
            </div>
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

          <ReferencesCard />
        </div>
      </div>
    </section>
  );
}
