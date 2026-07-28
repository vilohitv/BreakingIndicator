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
  { n: '02', title: 'Add test solutions', body: 'Lemon juice was added to one portion, distilled water to another, and dissolved baking soda to the last.' },
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
  { n: '02', title: 'Add test solutions', body: 'Lemon juice was added to one portion, distilled water to another, and dissolved baking soda to the last.' },
  { n: '03', title: 'Observe and record', body: 'The colour change of each portion was observed and written down.' },
  { n: '04', title: 'What we saw', body: 'With lemon juice it turned a clear bright pink. With water it stayed deep purple. With baking soda it shifted to a yellowish green. The colour differences were much more distinct than with the flesh extract.' },
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

          <div className="space-y-6">
            <p className="eyebrow mb-2" style={{ color: accentLight }}>Literature Review</p>

            <InfoCard label="Background Chemistry" title="Anthocyanins and how they work">
              <p>Red onion gets its colour from anthocyanins, a large family of water-soluble pigments found in the cell vacuoles of many plants. The word comes from the Greek anthos meaning flower and kyanos meaning blue, though anthocyanins can produce colours ranging from red all the way through purple to blue depending on the pH of their surroundings.</p>
              <p className="mt-3">The part of the molecule responsible for its colour-changing behaviour is a positively charged ring structure called the flavylium cation. This structure is unusually reactive with hydrogen ions, which is what makes anthocyanins so useful as natural pH indicators. When the concentration of hydrogen ions changes, the cation either gains or loses protons, and that change in charge alters how the molecule absorbs light, which changes the colour you see.</p>
            </InfoCard>

            <InfoCard label="Previous Research" title="What studies have shown">
              <p>Anthocyanins from red onion have been studied quite a bit in the context of food science and natural dye research. Fossen et al. (1996) identified several distinct anthocyanin compounds in red onion, the most abundant being cyanidin-3-glucoside and its acylated forms. These compounds were found to show clear colour changes across a pH range of 1 to 10, though the transitions were slightly less dramatic than those seen in red cabbage.</p>
              <p className="mt-3">Several educational studies have used red onion alongside red cabbage in school experiments to compare indicator sensitivity. The general finding is that red onion works reasonably well as an indicator but tends to show less vivid colour differences in the alkaline range compared to red cabbage. It performs best in acidic conditions where the pink colour is quite distinct.</p>
            </InfoCard>

            <InfoCard label="Scientific Explanation" title="The mechanism behind the colour change">
              <p>In a strongly acidic solution, the anthocyanin molecule is fully protonated. The flavylium cation absorbs light in the green part of the spectrum, around 520 nanometres, which means it reflects red and pink light back to your eye. That is why the extract looks bright pink in lemon juice.</p>
              <p className="mt-3">As the pH rises toward neutral, the cation loses a proton and converts into a neutral quinoidal form. This shifts the absorption peak slightly and the colour becomes purple. In alkaline conditions the molecule undergoes further deprotonation and structural rearrangement into an ionised quinoidal form and then chalcone structures, which absorb different wavelengths and make the extract look yellowish green. Every step of this is reversible, which means adding acid back to an alkaline solution will restore the original colour.</p>
            </InfoCard>

            <InfoCard label="Relevant Variables" title="Things that could affect the results">
              <p>Temperature is one of the most important variables. Anthocyanins in red onion are less stable at high temperatures than those in red cabbage, partly because the acylated forms that give them extra stability break down more readily with heat. Preparing the extract with warm rather than boiling water helps preserve the pigment structure.</p>
              <p className="mt-3">Which part of the onion is used also turns out to matter quite a bit. The outer skin is much richer in anthocyanins than the inner flesh. The flesh contains mostly water and flavonols with a relatively small amount of pigment, while the dry papery skin layers are densely packed with anthocyanins. Using the skin produces a much deeper extract with more distinct colour changes across pH levels.</p>
            </InfoCard>

            <InfoCard label="Connection to Our Experiment" title="How the research connects to what we did">
              <p>We tested two variants of the red onion extract, one made from the outer skin and one from the inner flesh, to see which part of the onion worked better as a pH indicator. The skin extract produced a much deeper starting colour and far more readable colour shifts across the three test solutions. The flesh extract showed some response but the differences were subtle enough that they could easily be misread.</p>
              <p className="mt-3">Based on those results we used the skin extract in our final experiment. This lines up with what the literature suggests about anthocyanin distribution in red onions, and it shows that the part of the plant you extract from can make a real difference to how useful the indicator ends up being.</p>
            </InfoCard>
          </div>

          <InfoCard label="Reason" title="Why red onion changes colour">
            <p>Red onion contains anthocyanins, which are one of the most common natural pigments used as pH indicators. You find them in a lot of red, purple and blue fruits and vegetables like red cabbage, purple sweet potatoes and berries. These pigments change their molecular structure depending on the pH of the solution around them, which is what causes the different colours.</p>
            <p className="mt-3">In acidic solutions, anthocyanins pick up hydrogen ions and form a positively charged flavylium cation, which gives the extract a bright pink or red colour. In neutral solutions the pigment stays purple. In alkaline solutions the anthocyanins lose hydrogen ions and rearrange into different molecular structures, which shifts the colour to a yellowish green.</p>
          </InfoCard>

          <InfoCard label="Conclusion" title="Red onion works as a pH indicator">
            <p>Because anthocyanins produce distinct and reversible colour changes at different pH levels, red onion extract can be used as a natural pH indicator. The shift from bright pink in acid, to purple in neutral, to yellowish green in alkaline conditions is clear enough to identify the nature of a solution fairly reliably.</p>
            <p className="mt-3">Between the two variants we tested, the skin extract was clearly more effective. The higher anthocyanin concentration in the outer skin produced more vivid and easier to read colour changes, which is why it was used in the final version of our experiment.</p>
          </InfoCard>
        </div>
      </div>
    </section>
  );
}
