import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const FLESH_PREP_STEPS = [
  { n: '01', title: 'Peel and chop the flesh', body: 'Removed the outer skin and put it aside. Chopped the inner flesh into small pieces.' },
  { n: '02', title: 'Place in bowl', body: 'Put the pieces into a bowl.' },
  { n: '03', title: 'Add warm water and crush', body: 'Added warm water and crushed the flesh. The water went a faint purple, not very dark.' },
  { n: '04', title: 'Strain the mixture', body: 'Strained out the solids.' },
  { n: '05', title: 'Extract is ready', body: 'The liquid was noticeably paler than the skin version. We tested it anyway to compare.' },
];

const FLESH_TEST_STEPS = [
  { n: '01', title: 'Divide into equal amounts', body: 'The flesh extract was separated into 3 equal portions.' },
  { n: '02', title: 'Add test solutions', body: 'Lemon juice in one, tap water in another, baking soda solution in the last.' },
  { n: '03', title: 'Observe and record', body: 'Watched each one and wrote down what happened.' },
  { n: '04', title: 'What we saw', body: 'There were changes but they were faint. Pale pink in lemon juice, light purple in water, a vague greenish tone in baking soda. You could technically read it but you had to look hard.' },
];

const SKIN_PREP_STEPS = [
  { n: '01', title: 'Separate the skin', body: 'Peeled off the dry papery outer layers of the red onion and set them aside. The skin is where most of the anthocyanins are. The flesh does not have nearly as much.' },
  { n: '02', title: 'Place in bowl', body: 'Put the skin pieces into a bowl.' },
  { n: '03', title: 'Add warm water and crush', body: 'Added warm water and crushed the skin against the bowl until the water went a deep purple colour.' },
  { n: '04', title: 'Strain the mixture', body: 'Strained it through a sieve into another container to get rid of the solid bits.' },
  { n: '05', title: 'Extract is ready', body: 'The liquid came out a much richer purple than the flesh version. That is the indicator ready to use.' },
];

const SKIN_TEST_STEPS = [
  { n: '01', title: 'Divide into equal amounts', body: 'Split the extract into 3 equal portions.' },
  { n: '02', title: 'Add test solutions', body: 'Lemon juice in one, tap water in another, baking soda solution in the last.' },
  { n: '03', title: 'Observe and record', body: 'Watched each one and wrote down what happened.' },
  { n: '04', title: 'What we saw', body: 'Lemon juice turned it bright pink. Water kept it purple. Baking soda pushed it toward a yellowish green. Way more readable than the flesh version.' },
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
              <h3 className="font-display font-bold text-lg mb-2" style={{ color: 'rgba(30,15,60,0.90)' }}>{step.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(30,15,60,0.50)' }}>{step.body}</p>
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
      <h3 className="font-display font-bold text-xl mb-3" style={{ color: 'rgba(30,15,60,0.90)' }}>{title}</h3>
      <div className="text-sm leading-relaxed" style={{ color: 'rgba(30,15,60,0.50)' }}>{children}</div>
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
      <h3 className="font-display font-bold text-xl mb-5" style={{ color: 'rgba(30,15,60,0.90)' }}>APA 7 Citations</h3>
      <div className="space-y-4">
        {REFERENCES.map((ref, i) => (
          <p key={i} className="text-sm leading-relaxed pl-6 -indent-6"
            style={{ color: 'rgba(30,15,60,0.50)', fontFamily: 'monospace', fontSize: '0.78rem' }}>
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
            <span style={{ color: 'rgba(30,15,60,0.90)' }}>Red Onion </span>
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
                    color: variant === v ? 'rgba(30,15,60,0.95)' : 'rgba(30,15,60,0.50)',
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
                style={{ background: 'rgba(124,58,237,0.05)', border: '1px solid rgba(124,58,237,0.12)', color: 'rgba(30,15,60,0.50)' }}
              >
                {variant === 'skin'
                  ? 'We went with the outer skin for the final experiment. It just worked better. The colour was richer and the changes were much easier to read across all three test solutions.'
                  : 'Tested the flesh as a comparison. It does react but the colour is a lot lighter and the changes are harder to pick up. Not ideal for a classroom setting.'}
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
              {(variant === 'skin' ? [
                { src: '/onion_acid.png', label: 'Acid', caption: 'Lemon juice. Shifted to a light peachy pink. Subtle but visible compared to the neutral.', dot: '#ef4444' },
                { src: '/onion_neutral.png', label: 'Neutral', caption: 'Tap water. Stayed an orange-pink tone, the baseline colour of the skin extract.', dot: '#7c3aed' },
                { src: '/onion_alkali.png', label: 'Alkali', caption: 'Baking soda. Shifted to a slightly deeper orange-brown. Not as dramatic as red cabbage but still a clear change.', dot: '#3b82f6' },
              ] : [
                { src: '/onion_flesh_acid.png', label: 'Acid', caption: 'Lemon juice. Turned a faint pink. Barely any pigment in the flesh extract so the colour is very dilute.', dot: '#ef4444' },
                { src: '/onion_flesh_neutral.png', label: 'Neutral', caption: 'Tap water. Almost colourless with just a very faint pink tinge. Hard to call it a result.', dot: '#7c3aed' },
                { src: '/onion_flesh_alkali.png', label: 'Alkali', caption: 'Baking soda. A pale yellow-green. The change happened but you really have to look for it.', dot: '#3b82f6' },
              ]).map((photo, i) => (
                <motion.div key={photo.label}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl overflow-hidden"
                  style={{ border: '1px solid rgba(124,58,237,0.10)' }}>
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
                    <p className="text-xs leading-relaxed" style={{ color: 'rgba(30,15,60,0.50)' }}>{photo.caption}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <p className="eyebrow mb-2" style={{ color: accentLight }}>Literature Review</p>

            <InfoCard label="Background Chemistry" title="Anthocyanins and how they work">
              <p>According to the National Library of Medicine, anthocyanins are water-soluble flavonoid pigments found in red onions and a lot of other red, purple and blue plant foods. They are what gives those plants their colour. The exact shade depends on the molecular structure of the anthocyanin. Different structures absorb different wavelengths of light, which is why the colour shifts with pH.</p>
              <p className="mt-3">There are several types, including pelargonidin, delphinidin and malvidin. Chemically they are glycosylated anthocyanidins, which just means a carbohydrate has been attached to a basic pigment molecule. The core is a flavylium cation made of three aromatic rings connected by a π-electron system, where electrons move freely across the molecule and allow it to absorb visible light. The oxygen atom in the C ring carries a positive charge and is largely responsible for the colour you see.</p>
            </InfoCard>

            <InfoCard label="Scientific Explanation" title="What happens at each pH level">
              <p><strong style={{ color: 'rgba(30,15,60,0.75)' }}>Acid:</strong> In acid, the anthocyanin exists as the flavylium cation (AH⁺). The π-electron system absorbs green light so the solution looks red or pink.</p>
              <p className="mt-3"><strong style={{ color: 'rgba(30,15,60,0.75)' }}>Neutral:</strong> As pH rises, a hydrogen ion gets removed. The flavylium cation converts into a quinonoidal base (A). This changes how electrons are distributed across the molecule and shifts the absorption to longer wavelengths, so the colour moves to purple or blue.</p>
              <p className="mt-3"><strong style={{ color: 'rgba(30,15,60,0.75)' }}>Alkali:</strong> Alkaline conditions are rough on anthocyanins. The OH⁻ ions drive hydration and ring-opening reactions that break down the structure into colourless chalcone intermediates. The π-electron system gets disrupted and the colour either fades or shifts to a yellowish degradation product.</p>
            </InfoCard>

            <InfoCard label="Relevant Variables" title="Things that could affect the results">
              <p>Anthocyanin stability is affected by temperature and light exposure. Prolonged exposure to either can accelerate degradation of the flavylium structure and reduce anthocyanin concentration. In aged red onion skins, this degradation may allow quercetin or yellow degradation products to become more prominent, producing an orange-yellow extract instead of the characteristic purple seen in fresh skins.</p>
            </InfoCard>

            <InfoCard label="Results & Discussion" title="What the literature means for our results">
              <p>The anthocyanin solution should be purple, but in our experiment the quercetin in the red onion skin caused the extract to turn yellowish orange instead. The red onion indicator changes colour because the anthocyanin pigment (C₁₅H₁₁O₆) gains or loses protons (H⁺ ions) depending on the pH of the solution.</p>
              <p className="mt-3"><strong style={{ color: 'rgba(30,15,60,0.75)' }}>In vinegar (acid):</strong> Acetic acid dissociates to release free protons. The extra H⁺ ions attach to the anthocyanin and convert it from its yellow form to a red form that reflects pinkish or red light.<br />CH₃COOH ⇌ CH₃COO⁻ + H⁺ &nbsp;·&nbsp; A⁻ + H⁺ → HA</p>
              <p className="mt-3"><strong style={{ color: 'rgba(30,15,60,0.75)' }}>In baking soda (alkali):</strong> Sodium bicarbonate dissolves into Na⁺ and HCO₃⁻ ions. The bicarbonate reacts with water to produce hydroxide ions (OH⁻), which remove free H⁺ from the solution. The anthocyanin then releases its proton and shifts to the yellow/orange form (A⁻). Because baking soda is a weak alkali, the colour does not change fully to yellow.<br />NaHCO₃ → Na⁺ + HCO₃⁻ &nbsp;·&nbsp; HCO₃⁻ + H₂O ⇌ H₂CO₃ + OH⁻ &nbsp;·&nbsp; HA → A⁻ + H⁺</p>
              <p className="mt-3"><strong style={{ color: 'rgba(30,15,60,0.75)' }}>In water (neutral):</strong> At pH around 7, H⁺ and OH⁻ from water's self-ionisation are balanced, so the anthocyanin stays as a mixture of HA and A⁻, giving a natural yellow colour.<br />H₂O ⇌ H⁺ + OH⁻ &nbsp;·&nbsp; HA ⇌ A⁻ + H⁺ &nbsp;·&nbsp; OH⁻ + H⁺ → H₂O</p>
            </InfoCard>
          </div>

          <InfoCard label="Conclusion" title="Red onion works as a pH indicator">
            <p>Red onion works as an indicator. The colour changes are clear enough to read. The skin extract was much better than the flesh version, which is what the literature suggested would happen. We used the skin extract in the final experiment and got readable results across all three test solutions.</p>
          </InfoCard>

          <ReferencesCard />
        </div>
      </div>
    </section>
  );
}
