import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const PREP_STEPS = [
  { n: '01', title: 'Prepare the leaves', body: 'Red cabbage leaves were torn and placed into a bag. Tearing rather than cutting helps break some of the surface cells, which makes the extraction faster.' },
  { n: '02', title: 'Add warm water and crush', body: 'Warm water was added and the leaves were pressed and crushed until the water darkened to a deep blue-purple. That colour change is the anthocyanins coming out of the cells and into the liquid.' },
  { n: '03', title: 'Strain the liquid', body: 'The liquid was strained into a separate container. The spent leaves came out, and what remained was a deep, clear purple extract ready to use.' },
  { n: '04', title: 'Indicator is ready', body: 'The dark purple liquid is the indicator. Even at this stage it is quite striking — and the colour shifts that happen during testing are just as dramatic.' },
];

const TEST_STEPS = [
  { n: '01', title: 'Separate into equal amounts', body: 'The red cabbage extract was divided into 3 equal portions. Consistent amounts matter — you want each glass to have the same concentration of indicator so the comparisons are fair.' },
  { n: '02', title: 'Add test solutions', body: 'Lemon juice into the first portion, plain water into the second, dissolved baking soda into the third. These represent three broad pH categories.' },
  { n: '03', title: 'Record observations', body: 'Each portion was observed straight after adding the solution. The changes were fast — in most cases the colour had shifted within a few seconds.' },
  { n: '04', title: 'What we saw', body: 'Vinegar turned it pink. Water left it dark purple, which became our neutral baseline. Baking soda shifted it to a dark blue. Three clearly different colours that made classification straightforward.' },
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
              <p>Red cabbage has one of the highest anthocyanin concentrations of any common food plant. Its main pigment compound is cyanidin-3-diglucoside-5-glucoside, though several other anthocyanins are present in smaller quantities. That combination is part of why the extract produces such a wide and readable colour range — it is not a single pigment doing all the work.</p>
              <p className="mt-3">Like other anthocyanins, these pigments are stored inside the vacuoles of the plant's cells. Crushing or heating the leaves in water breaks those cell walls open and releases the pigments into the liquid. What you end up with is a deep purple solution that is ready to use straight away.</p>
            </InfoCard>

            <InfoCard label="Previous Research" title="What researchers have found about red cabbage">
              <p>Red cabbage's properties as an acid-base indicator have been documented in detail. Bridle and Timberlake (1997) mapped the colour shifts against pH and found some of the most vivid transitions of any natural indicator tested. At pH 1 to 2 the extract is bright red; at pH 4 to 5 it goes purple; by pH 7 it sits at violet-blue; and above pH 10 it moves through green to yellow.</p>
              <p className="mt-3">When compared against other natural options — red onion, grape juice, blackberries — red cabbage consistently performs best for practical classroom use. The colour changes are spread across the full pH scale, they are distinct enough to read by eye, and the extraction is simple. Studies have confirmed that you can visually estimate pH just by matching the colour to a reference chart, which is not something most other natural indicators can claim.</p>
            </InfoCard>

            <InfoCard label="Scientific Explanation" title="Why the colour changes so dramatically">
              <p>It comes down to what the flavylium cation does at each pH level. In strongly acidic conditions (pH 1 to 3), the cation is fully protonated and the extract looks red. As pH climbs above 3, protons start being lost and the cation converts to a quinoidal base — the electron distribution shifts and the colour moves to purple, then blue. Push beyond pH 10 and the structure opens into a chalcone form, producing the green and yellow colours at the far end of the scale.</p>
              <p className="mt-3">Add acid back to the green solution and the whole thing runs in reverse — the colour comes back. That reversibility is one of the things that makes this indicator particularly satisfying to work with.</p>
            </InfoCard>

            <InfoCard label="Relevant Variables" title="Factors that can affect the results">
              <p>The pH of the water used to prepare the extract has an effect. Tap water is often slightly alkaline, which can push the indicator's starting colour toward blue rather than purple. Using distilled water gives a more neutral baseline.</p>
              <p className="mt-3">Temperature during extraction matters too. Higher temperatures pull more anthocyanin out of the leaves, which gives a stronger indicator — but sustained boiling starts to degrade the pigment structure and weakens the colour response over time. The amount of indicator added to each test sample also needs to stay consistent. Too little and the change is hard to read; too much and the indicator can alter the pH of the solution you are trying to measure.</p>
            </InfoCard>

            <InfoCard label="Connection to Our Experiment" title="How this connects to our investigation">
              <p>We tested red cabbage extract against vinegar, plain water and dissolved baking soda. Going in, the research strongly suggested it would perform well. It did — the extract went pink with vinegar, held its purple in water, and shifted to dark blue with baking soda. Each result matched what the anthocyanin chemistry would predict.</p>
              <p className="mt-3">The contrast with beetroot and red onion was noticeable. Red cabbage gave the most distinct colour differences by some margin, and reading the results required no interpretation — each one was unambiguous. That is what makes it the standard choice for this kind of experiment.</p>
            </InfoCard>
          </div>

          <InfoCard label="Reason" title="Why red cabbage changes colour">
            <p>Red cabbage contains anthocyanin (C₁₅H₁₁O⁺), a natural pigment whose colour is directly tied to pH. When hydrogen ion concentration is high (pH 1 to 3), the molecule picks up protons and forms a flavylium cation that absorbs blue-green light — so the solution looks red. As pH rises, those protons are progressively lost, the molecular structure changes, and the colour moves through purple, blue, and eventually yellow-green at the strongly alkaline end of the scale.</p>
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
            <p>Red cabbage extract shifts through a wide range of distinct, readable colours across the pH scale — pink in acid, purple in neutral, dark blue in base. Every change is visible to the naked eye without any equipment, and each one can be reversed by adding the opposite substance. As natural indicators go, it is hard to find one that performs more clearly or more consistently than this.</p>
          </InfoCard>

          <ReferencesCard />
        </div>
      </div>
    </section>
  );
}
