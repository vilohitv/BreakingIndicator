import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const PREP_STEPS = [
  { n: '01', title: 'Prepare the leaves', body: 'Grabbed a few red cabbage leaves and put them in a bowl.' },
  { n: '02', title: 'Add warm water and crush', body: 'Warm water was added and the leaves were crushed until the water turned a dark blue colour, which means the anthocyanin pigments had been released.' },
  { n: '03', title: 'Strain the liquid', body: 'Strained out the leaf bits and kept the liquid.' },
  { n: '04', title: 'Indicator is ready', body: 'The dark blue liquid in the bowl is now ready to use as a pH indicator.' },
];

const TEST_STEPS = [
  { n: '01', title: 'Separate into equal amounts', body: 'Split the extract into 3 equal portions.' },
  { n: '02', title: 'Add test solutions', body: 'Poured lemon juice into one, water into another, dissolved baking soda into the last.' },
  { n: '03', title: 'Record observations', body: 'Watched each one and wrote down the colour.' },
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
              <p>Red cabbage has one of the highest anthocyanin concentrations of any food plant. The main one is cyanidin-3-diglucoside-5-glucoside, but there are several others present too. That combination is why red cabbage has become the go-to natural acid-base indicator for school experiments.</p>
              <p className="mt-3">The anthocyanins sit inside the vacuoles of the plant's cells. Break those cell walls down by crushing, blending or heating in water and a dark purplish liquid comes out. That is the indicator.</p>
            </InfoCard>

            <InfoCard label="Previous Research" title="What researchers have found about red cabbage">
              <p>Bridle and Timberlake (1997) studied how red cabbage anthocyanins behave across a range of pH levels and found the colour transitions were among the clearest of any natural indicator. Bright red at pH 1 to 2, purple at 4 to 5, violet-blue at 7, green and then yellow above 10.</p>
              <p className="mt-3">When compared against red onion, grape juice and blackberries, red cabbage came out on top in almost every study. The changes are vivid, spread out across the scale, and the extract is dead simple to make. You can even estimate pH just by matching the colour to a reference chart, which is exactly what we did.</p>
            </InfoCard>

            <InfoCard label="Scientific Explanation" title="Why the colour changes so dramatically">
              <p>It all comes down to the flavylium cation. At low pH (1 to 3) the cation is fully protonated and the extract goes red. As pH rises, it loses hydrogen ions and converts into a quinoidal base, which is the purple you see around neutral. Push it higher and you get an ionised form that looks blue. Go above pH 10 and the whole ring structure rearranges into a chalcone, which gives you the green and yellow colours.</p>
              <p className="mt-3">None of it is permanent. Drop some acid into the green solution and it walks backwards through blue, purple and eventually back to red. We tested this a couple of times. It is one of the more satisfying things to watch happen.</p>
            </InfoCard>

            <InfoCard label="Relevant Variables" title="Factors that can affect the results">
              <p>The water you use to make the extract affects the starting colour. Tap water that is slightly alkaline can push the indicator toward blue before you have even added anything. Temperature matters too. Boiling gets more pigment out, but if you keep it boiling for too long you start breaking down the anthocyanin structure. We stuck to a gentle simmer for about 10 minutes.</p>
              <p className="mt-3">How much indicator you add to each test sample is also important. Too little and the colour is too faint to read. Too much and the indicator changes the pH of the thing you are trying to test, which defeats the point. We kept the number of drops identical across all samples.</p>
            </InfoCard>

            <InfoCard label="Connection to Our Experiment" title="How this connects to our investigation">
              <p>We tested the extract against vinegar, water and baking soda solution. Pink with vinegar, stayed purple in water, went dark blue in baking soda. All three were easy to read without squinting or comparing closely. The differences were obvious.</p>
              <p className="mt-3">Out of our three experiments, red cabbage was the clearest by a significant margin. The beetroot barely moved. The red onion worked but the colours were subtler. Red cabbage was the one where results were immediately obvious just from looking.</p>
            </InfoCard>
          </div>

          <InfoCard label="Reason" title="Why red cabbage changes colour">
            <p>Red cabbage contains anthocyanin (C₁₅H₁₁O⁺), a pigment that is unusually sensitive to pH. At low pH it picks up hydrogen ions and forms a positively charged flavylium cation that absorbs blue-green light, which is why the solution looks red. As pH rises the molecule drops those ions, its structure shifts, and the colour moves through purple, then blue, then yellow-green at the strongly alkaline end.</p>
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
            <p>Red cabbage is genuinely the best natural indicator we tested. The colour changes are obvious, they cover the full pH range, and they reverse cleanly. If you are doing this experiment and can only pick one vegetable, pick red cabbage.</p>
          </InfoCard>

          <ReferencesCard />
        </div>
      </div>
    </section>
  );
}
