import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const FLESH_PREP_STEPS = [
  { n: '01', title: 'Peel and chop the flesh', body: 'The papery outer skin was removed and set aside. The inner flesh — white-purple and much milder looking — was chopped into small pieces for extraction.' },
  { n: '02', title: 'Place in bowl', body: 'The chopped pieces went into a bowl. At this point there is not much colour visible yet — the flesh holds its pigment until the cell walls get broken down.' },
  { n: '03', title: 'Add warm water and crush', body: 'Warm water was added and the flesh was crushed until the water picked up a faint purple tinge. Warm water helps pull the pigment out faster than cold.' },
  { n: '04', title: 'Strain the mixture', body: 'The mixture was strained through filter paper to separate the liquid from the solids. The liquid that came through was noticeably paler than what the skin produces.' },
  { n: '05', title: 'Extract is ready', body: 'The pale purple liquid is ready for testing. It works as an indicator, but the low pigment concentration means any colour changes will be harder to read clearly.' },
];

const FLESH_TEST_STEPS = [
  { n: '01', title: 'Divide into equal amounts', body: 'The flesh extract was split into 3 equal portions. Equal volumes matter — more indicator in one glass than another would skew the colour and make comparisons unreliable.' },
  { n: '02', title: 'Add test solutions', body: 'Lemon juice into the first, tap water into the second, dissolved baking soda into the third. A standard acid-neutral-alkali spread.' },
  { n: '03', title: 'Observe and record', body: 'Each portion was observed immediately after adding the solution and the resulting colour was written down.' },
  { n: '04', title: 'What we saw', body: 'Changes did happen, but they were faint. Lemon juice pushed it toward a pale pink. Water left it a light purple. Baking soda gave a slight greenish cast. You could see the shifts if you looked for them, but they were not obvious.' },
];

const SKIN_PREP_STEPS = [
  { n: '01', title: 'Separate the skin', body: 'The dry outer layers of the red onion were peeled off and collected. These papery, dark-purple pieces are where most of the anthocyanins are concentrated — far more than in the flesh underneath.' },
  { n: '02', title: 'Place in bowl', body: 'The skin pieces went into a bowl. A zip-lock bag also works well here — you can crush everything without making a mess.' },
  { n: '03', title: 'Add warm water and crush', body: 'Warm water was added and the skin was crushed and pressed until the water turned a deep, vivid purple. The difference in colour from the flesh extraction is immediately obvious at this stage.' },
  { n: '04', title: 'Strain the mixture', body: 'The liquid was strained into a clean container, leaving the spent skin behind. The extract that came through was a strong, dark purple.' },
  { n: '05', title: 'Extract is ready', body: 'This is the indicator we used in the final experiment. The concentration is high enough that colour changes will be clear and readable without needing to squint.' },
];

const SKIN_TEST_STEPS = [
  { n: '01', title: 'Divide into equal amounts', body: 'The skin extract was split into 3 equal portions, the same approach as the flesh test, to keep the comparison fair.' },
  { n: '02', title: 'Add test solutions', body: 'Lemon juice into one, tap water into the second, dissolved baking soda into the third.' },
  { n: '03', title: 'Observe and record', body: 'Each portion was checked immediately after adding the solution. The results were much easier to read than the flesh test.' },
  { n: '04', title: 'What we saw', body: 'Lemon juice turned it a clear bright pink. Water left it a deep purple. Baking soda shifted it toward a yellowish green. Three distinct, readable colours — exactly what you want from an indicator.' },
];

const REFERENCES = [
  { citation: 'Helmenstine, A. M. (2023, February 7). Red onion pH indicator experiment. ThoughtCo. https://www.thoughtco.com/red-onion-ph-indicator-experiment-606103' },
  { citation: 'LibreTexts Chemistry. (2023, June 15). Anthocyanins as pH indicators. LibreTexts. https://chem.libretexts.org/Bookshelves/Biological_Chemistry/Supplemental_Modules_(Biological_Chemistry)/Pigments/Anthocyanins' },
  { citation: 'Science Learning Hub. (2022, August 3). Natural indicators. University of Waikato. https://www.sciencelearn.org.nz/resources/566-natural-indicators' },
];

const accent = '#7c3aed';
const accentLight = '#c4b5fd';
const accentGlow = 'rgba(124,58,237,0.4)';

function StepList({ steps }: { steps: { n: string; title: string; body: string }[] }) {
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

function ReferencesCard() {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7 }}
      className="p-7 rounded-3xl"
      style={{ background: 'rgba(124,58,237,0.05)', border: '1px solid rgba(124,58,237,0.15)' }}>
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

export function YanLinSection() {
  const { ref, isVisible } = useScrollReveal(0.2);
  const [variant, setVariant] = useState<'skin' | 'flesh'>('skin');

  const prepSteps = variant === 'skin' ? SKIN_PREP_STEPS : FLESH_PREP_STEPS;
  const testSteps = variant === 'skin' ? SKIN_TEST_STEPS : FLESH_TEST_STEPS;

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

          {/* Variant toggle */}
          <div>
            <p className="eyebrow mb-5" style={{ color: accentLight }}>Experiment Variant</p>
            <div className="flex gap-3 flex-wrap">
              {(['skin', 'flesh'] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => setVariant(v)}
                  className="relative px-5 py-2.5 rounded-2xl text-sm font-medium transition-all duration-300"
                  style={{
                    background: variant === v ? 'rgba(124,58,237,0.25)' : 'rgba(124,58,237,0.06)',
                    border: variant === v ? '1px solid rgba(124,58,237,0.5)' : '1px solid rgba(124,58,237,0.15)',
                    color: variant === v ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.45)',
                    boxShadow: variant === v ? '0 0 20px rgba(124,58,237,0.2)' : 'none',
                  }}
                >
                  {v === 'skin' ? 'Outer Skin' : 'Inner Flesh'}
                  {v === 'skin' && (
                    <span className="ml-2 text-xs px-1.5 py-0.5 rounded-full font-mono"
                      style={{ background: 'rgba(124,58,237,0.3)', color: accentLight }}>
                      final
                    </span>
                  )}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={variant}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="mt-5 p-5 rounded-2xl text-sm leading-relaxed"
                style={{ background: 'rgba(124,58,237,0.05)', border: '1px solid rgba(124,58,237,0.12)', color: 'rgba(255,255,255,0.45)' }}
              >
                {variant === 'skin'
                  ? 'The outer papery skin was used in the final experiment. It contains a much higher concentration of anthocyanins than the flesh, which produces deeper colour and more distinct pH responses.'
                  : 'The inner flesh was tested as an alternative. It does contain some anthocyanins but in a much lower concentration, which made the colour changes noticeably harder to read.'}
              </motion.div>
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={variant + '-steps'}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="space-y-16"
            >
              <div>
                <p className="eyebrow mb-8" style={{ color: accentLight }}>Obtaining the Pigment</p>
                <StepList steps={prepSteps} />
              </div>

              <div>
                <p className="eyebrow mb-8" style={{ color: accentLight }}>Testing Whether It Is a Good Indicator</p>
                <StepList steps={testSteps} />
              </div>
            </motion.div>
          </AnimatePresence>

          <div>
            <p className="eyebrow mb-6" style={{ color: accentLight }}>Photos</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { src: '/onion_acid.png', label: 'Acid', caption: 'Lemon juice. The extract shifted to a light peachy pink. The change is subtle but visible compared to the neutral result.', dot: '#ef4444' },
                { src: '/onion_neutral.png', label: 'Neutral', caption: 'Tap water. The extract stayed an orange-pink tone, which is the baseline colour of the skin extract on its own.', dot: '#7c3aed' },
                { src: '/onion_alkali.png', label: 'Alkali', caption: 'Baking soda. The extract shifted to a slightly deeper orange-brown. Less dramatic than red cabbage but still a noticeable shift from the neutral.', dot: '#3b82f6' },
              ].map((photo, i) => (
                <motion.div key={photo.label}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl overflow-hidden"
                  style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="relative">
                    <img src={photo.src} alt={`Red onion indicator in ${photo.label}`}
                      className="w-full h-48 object-cover block" />
                    <div className="absolute top-3 left-3">
                      <span className="font-mono font-bold text-xs px-2.5 py-1 rounded-full"
                        style={{ background: photo.dot, border: '1px solid rgba(0,0,0,0.2)', color: '#fff' }}>
                        {photo.label}
                      </span>
                    </div>
                  </div>
                  <div className="p-4" style={{ background: 'rgba(124,58,237,0.05)' }}>
                    <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{photo.caption}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <p className="eyebrow mb-2" style={{ color: accentLight }}>Literature Review</p>

            <InfoCard label="Background Chemistry" title="Anthocyanins and how they work">
              <p>Anthocyanins are water-soluble flavonoid pigments — the ones that give red onions, blueberries and a lot of other plant foods their colour. What makes them useful as indicators is that the colour they produce is not fixed. It depends on the molecular structure, and that structure changes depending on how acidic or alkaline the environment around it is.</p>
              <p className="mt-3">The core structure is a flavylium cation, built from three aromatic rings (A, B and C) connected by a conjugated π-electron system — electrons that can move freely across the whole molecule. That mobility is what lets the molecule absorb visible light and appear coloured. The positively charged oxygen in the C ring is particularly important for how light absorption works, and it is the part that changes when the pH shifts.</p>
            </InfoCard>

            <InfoCard label="Scientific Explanation" title="What happens at each pH level">
              <p><strong style={{ color: 'rgba(255,255,255,0.75)' }}>Acid:</strong> In acidic conditions the anthocyanin exists as the flavylium cation (AH⁺). The π-electron system absorbs green light, so the solution looks red or pink.</p>
              <p className="mt-3"><strong style={{ color: 'rgba(255,255,255,0.75)' }}>Neutral:</strong> As pH rises, the molecule loses a hydrogen ion. The flavylium cation becomes a quinonoidal base (A) — the electron distribution changes, delocalisation extends further, and the absorption shifts toward longer wavelengths. The solution turns purple or blue.</p>
              <p className="mt-3"><strong style={{ color: 'rgba(255,255,255,0.75)' }}>Alkali:</strong> In strongly alkaline conditions things get more complicated. Hydroxide ions promote ring-opening and oxidation reactions, forming chalcone intermediates that have no useful colour. The result is fading, or a yellowish product that has nothing to do with the anthocyanin's original structure.</p>
            </InfoCard>

            <InfoCard label="Relevant Variables" title="Things that could affect the results">
              <p>Temperature and light are the two main ones. Both accelerate degradation of the flavylium structure over time, gradually reducing the anthocyanin concentration in the extract. In practice this means an older or poorly stored extract will give weaker colour changes than a fresh one.</p>
              <p className="mt-3">There is also a less obvious factor specific to red onion: quercetin. This is a yellow flavonoid present in the skin, and in aged onions it can become concentrated enough to dominate the extract's colour — producing an orange-yellow liquid instead of the expected purple. Our extract had this quality, which is worth noting when interpreting the results.</p>
            </InfoCard>

            <InfoCard label="Results & Discussion" title="What the literature means for our results">
              <p>Our extract came out orange-yellow rather than purple, suggesting quercetin was prominent in the onion skin we used. The indicator still responded to pH — because the underlying anthocyanin chemistry (C₁₅H₁₁O₆) was still present — just from a different baseline colour.</p>
              <p className="mt-3"><strong style={{ color: 'rgba(255,255,255,0.75)' }}>In vinegar (acid):</strong> Acetic acid releases free protons. Those H⁺ ions attach to the anthocyanin and push it toward the protonated red form.<br />CH₃COOH ⇌ CH₃COO⁻ + H⁺ &nbsp;·&nbsp; A⁻ + H⁺ → HA</p>
              <p className="mt-3"><strong style={{ color: 'rgba(255,255,255,0.75)' }}>In baking soda (alkali):</strong> Sodium bicarbonate produces hydroxide ions, which pull H⁺ out of solution. The anthocyanin releases its proton and shifts toward the deprotonated yellow-orange form. Baking soda is only a weak alkali, so the shift is partial rather than complete.<br />NaHCO₃ → Na⁺ + HCO₃⁻ &nbsp;·&nbsp; HCO₃⁻ + H₂O ⇌ H₂CO₃ + OH⁻ &nbsp;·&nbsp; HA → A⁻ + H⁺</p>
              <p className="mt-3"><strong style={{ color: 'rgba(255,255,255,0.75)' }}>In water (neutral):</strong> Water's self-ionisation leaves H⁺ and OH⁻ in balance, so the anthocyanin sits between its two forms — giving the natural baseline colour of the extract.<br />H₂O ⇌ H⁺ + OH⁻ &nbsp;·&nbsp; HA ⇌ A⁻ + H⁺ &nbsp;·&nbsp; OH⁻ + H⁺ → H₂O</p>
            </InfoCard>
          </div>

          <InfoCard label="Conclusion" title="Red onion works as a pH indicator">
            <p>The skin extract produced clear, readable colour changes across all three test solutions, which is enough to confirm it works as a natural pH indicator. Of the two variants we tested, the skin was clearly better — a higher anthocyanin concentration means more visible shifts and less ambiguity in the result. That is why the skin extract went into the final experiment rather than the flesh.</p>
          </InfoCard>

          <ReferencesCard />
        </div>
      </div>
    </section>
  );
}
