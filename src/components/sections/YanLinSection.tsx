import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const FLESH_PREP_STEPS = [
  { n: '01', title: 'Peel and chop the flesh', body: 'The outer skin was removed and set aside. The inner white-purple flesh of the red onion was chopped into small pieces.' },
  { n: '02', title: 'Place in bowl', body: 'The chopped flesh pieces were placed into a bowl.' },
  { n: '03', title: 'Add warm water and crush', body: 'Warm water was added and the flesh was crushed until the water took on a faint purple tinge.' },
  { n: '04', title: 'Strain the mixture', body: 'The mixture was strained through a sieve or filter paper to separate the solids from the liquid.' },
  { n: '05', title: 'Extract is ready', body: 'The lightly coloured liquid is ready to be tested as a pH indicator, though it is noticeably less pigmented than the skin extract.' },
];

const FLESH_TEST_STEPS = [
  { n: '01', title: 'Divide into equal amounts', body: 'The flesh extract was separated into 3 equal portions.' },
  { n: '02', title: 'Add test solutions', body: 'Lemon juice was added to one portion, tap water to another, and dissolved baking soda to the last.' },
  { n: '03', title: 'Observe and record', body: 'The colour change of each portion was observed and written down.' },
  { n: '04', title: 'What we saw', body: 'The colour changes were present but quite faint. In lemon juice it shifted to a very pale pink. In water it stayed a light purple. In baking soda it turned a pale greenish tone. The differences were harder to read clearly compared to the skin extract.' },
];

const SKIN_PREP_STEPS = [
  { n: '01', title: 'Separate the skin', body: 'The dry outer skin layers of the red onion were peeled off and collected. These papery dark red-purple layers contain a much higher concentration of anthocyanins than the inner flesh.' },
  { n: '02', title: 'Place in bowl', body: 'The skin pieces were placed into a bowl or zip-lock bag.' },
  { n: '03', title: 'Add warm water and crush', body: 'Warm water was added and the skin was crushed and pressed until the water turned a deep purple.' },
  { n: '04', title: 'Strain the mixture', body: 'The mixture was strained through a sieve or filter paper into another container to separate the solids from the liquid.' },
  { n: '05', title: 'Extract is ready', body: 'The deep purple liquid extract is now ready to be used as a pH indicator. The colour is noticeably richer than the flesh extract.' },
];

const SKIN_TEST_STEPS = [
  { n: '01', title: 'Divide into equal amounts', body: 'The skin extract was separated into 3 equal portions.' },
  { n: '02', title: 'Add test solutions', body: 'Lemon juice was added to one portion, tap water to another, and dissolved baking soda to the last.' },
  { n: '03', title: 'Observe and record', body: 'The colour change of each portion was observed and written down.' },
  { n: '04', title: 'What we saw', body: 'With lemon juice it turned a clear bright pink. With water it stayed deep purple. With baking soda it shifted to a yellowish green. The colour differences were much more distinct than with the flesh extract.' },
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
              <p>According to the National Library of Medicine, anthocyanins are water-soluble flavonoid pigments commonly found in red onions, fruits, vegetables and other foods with high natural pigment content. They are responsible for the purple and red colours in those plants. The colour produced by an anthocyanin depends on its molecular structure — different structures reflect different colours of light at different pH levels.</p>
              <p className="mt-3">There are different types of anthocyanins, including pelargonidin, delphinidin and malvidin. Chemically, they are glycosylated derivatives of anthocyanidins — meaning a carbohydrate molecule has been attached to a basic pigment molecule. Their core structure contains a flavylium cation made up of three aromatic rings (A, B and C) connected by a conjugated π-electron system, where electrons can move freely across the molecule. This is what allows anthocyanins to absorb visible light and produce colour. The positively charged oxygen atom in the C ring is particularly important for light absorption.</p>
            </InfoCard>

            <InfoCard label="Scientific Explanation" title="What happens at each pH level">
              <p><strong style={{ color: 'rgba(255,255,255,0.75)' }}>Acid:</strong> In an acidic solution, anthocyanins exist as the flavylium cation (AH⁺). The conjugated π-electron system allows the molecule to absorb green light, which causes the solution to appear red or pink.</p>
              <p className="mt-3"><strong style={{ color: 'rgba(255,255,255,0.75)' }}>Neutral:</strong> As pH increases, deprotonation occurs — a hydrogen ion is removed, which changes the shape and colour of the molecule. The flavylium cation converts into a quinonoidal base (A), changing electron distribution and extending electron delocalisation. This shifts the absorption spectrum toward longer wavelengths, so the solution appears purple or blue.</p>
              <p className="mt-3"><strong style={{ color: 'rgba(255,255,255,0.75)' }}>Alkali:</strong> In alkaline conditions, anthocyanins become very unstable. Hydroxide ions (OH⁻) promote hydration, ring opening and oxidation reactions, forming colourless chalcone intermediates and other degradation products. These reactions disrupt the conjugated π-electron system, which causes fading or the appearance of yellowish degradation products.</p>
            </InfoCard>

            <InfoCard label="Relevant Variables" title="Things that could affect the results">
              <p>Anthocyanin stability is affected by temperature and light exposure. Prolonged exposure to either can accelerate degradation of the flavylium structure and reduce anthocyanin concentration. In aged red onion skins, this degradation may allow quercetin or yellow degradation products to become more prominent, producing an orange-yellow extract instead of the characteristic purple seen in fresh skins.</p>
            </InfoCard>

            <InfoCard label="Results & Discussion" title="What the literature means for our results">
              <p>The anthocyanin solution should be purple, but in our experiment the quercetin in the red onion skin caused the extract to turn yellowish orange instead. The red onion indicator changes colour because the anthocyanin pigment (C₁₅H₁₁O₆) gains or loses protons (H⁺ ions) depending on the pH of the solution.</p>
              <p className="mt-3"><strong style={{ color: 'rgba(255,255,255,0.75)' }}>In vinegar (acid):</strong> Acetic acid dissociates to release free protons. The extra H⁺ ions attach to the anthocyanin and convert it from its yellow form to a red form that reflects pinkish or red light.<br />CH₃COOH ⇌ CH₃COO⁻ + H⁺ &nbsp;·&nbsp; A⁻ + H⁺ → HA</p>
              <p className="mt-3"><strong style={{ color: 'rgba(255,255,255,0.75)' }}>In baking soda (alkali):</strong> Sodium bicarbonate dissolves into Na⁺ and HCO₃⁻ ions. The bicarbonate reacts with water to produce hydroxide ions (OH⁻), which remove free H⁺ from the solution. The anthocyanin then releases its proton and shifts to the yellow/orange form (A⁻). Because baking soda is a weak alkali, the colour does not change fully to yellow.<br />NaHCO₃ → Na⁺ + HCO₃⁻ &nbsp;·&nbsp; HCO₃⁻ + H₂O ⇌ H₂CO₃ + OH⁻ &nbsp;·&nbsp; HA → A⁻ + H⁺</p>
              <p className="mt-3"><strong style={{ color: 'rgba(255,255,255,0.75)' }}>In water (neutral):</strong> At pH around 7, H⁺ and OH⁻ from water's self-ionisation are balanced, so the anthocyanin stays as a mixture of HA and A⁻, giving a natural yellow colour.<br />H₂O ⇌ H⁺ + OH⁻ &nbsp;·&nbsp; HA ⇌ A⁻ + H⁺ &nbsp;·&nbsp; OH⁻ + H⁺ → H₂O</p>
            </InfoCard>
          </div>

          <InfoCard label="Conclusion" title="Red onion works as a pH indicator">
            <p>Because anthocyanins produce distinct and reversible colour changes at different pH levels, red onion extract can be used as a natural pH indicator. Between the two variants we tested, the skin extract was clearly more effective — the higher anthocyanin concentration in the outer skin produced more vivid and easier-to-read colour changes, which is why it was used in the final version of our experiment.</p>
          </InfoCard>

          <ReferencesCard />
        </div>
      </div>
    </section>
  );
}
