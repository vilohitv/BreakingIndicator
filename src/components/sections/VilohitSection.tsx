import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const PREP_STEPS = [
  { n: '01', title: 'Gather the beetroots', body: '5 fresh beetroots were selected. Freshness matters here — older beetroot tends to have less pigment, which affects how rich the extract ends up.' },
  { n: '02', title: 'Cut into pieces', body: 'Each beetroot was cut into 8 pieces, 40 in total. Cutting them up increases the surface area that makes contact with the water, so the pigments extract more easily during blending.' },
  { n: '03', title: 'Add water', body: '50ml of water went in before blending. Without it the blender would just spin the chunks around — the water gets things moving and starts pulling the pigment out straight away.' },
  { n: '04', title: 'Blend', body: 'Everything was blended until smooth. Blending physically breaks the cell walls apart, which is what releases the betalain pigments into the liquid. The colour comes out almost immediately.' },
  { n: '05', title: 'Filter the liquid', body: 'The blended mixture was filtered to separate the pulp from the liquid. What came through was a deep red extract — that is the beetroot indicator.' },
];

const TEST_STEPS = [
  { n: '01', title: 'Separate into equal amounts', body: 'The beetroot extract was split into 3 equal portions. Keeping them the same size means any colour differences are down to the test solution, not variations in how much indicator was used.' },
  { n: '02', title: 'Add test solutions', body: 'Lemon juice went into one portion, tap water into another, and dissolved baking soda into the third. These cover acid, neutral and alkaline — a reasonable spread for an initial test.' },
  { n: '03', title: 'Record observations', body: 'Each portion was observed after adding the solution and the colour was noted down. At this stage we were looking for any visible shift from the original red.' },
  { n: '04', title: 'Observations', body: 'Not much happened. All three portions stayed a similar deep red-pink regardless of what was added to them. The differences, if there were any, were too small to read with confidence.' },
];

const REFERENCES = [
  {
    citation: 'Britannica, T. Editors of Encyclopaedia. (2024, January 10). Betalain. In Encyclopædia Britannica. https://www.britannica.com/science/betalain',
  },
  {
    citation: 'LibreTexts Chemistry. (2023, June 15). Acid-base indicators. LibreTexts. https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Acids_and_Bases/Acid_and_Base_Indicators/Acid-Base_Indicators',
  },
  {
    citation: 'Royal Society of Chemistry. (2023). Beetroot as a pH indicator. Rsc.org. https://www.rsc.org/learn-chemistry/resource/res00001135/beetroot-as-a-ph-indicator',
  },
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

function ReferencesCard() {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7 }}
      className="p-7 rounded-3xl"
      style={{ background: 'rgba(190,24,93,0.05)', border: '1px solid rgba(190,24,93,0.15)' }}>
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

          <div>
            <p className="eyebrow mb-6" style={{ color: accentLight }}>Photos</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { src: '/beetroot_acid.jpeg', label: 'Acid', caption: 'Lemon juice. The colour barely shifted from the original deep red-pink.', dot: '#ef4444' },
                { src: '/beetroot_neutral.jpeg', label: 'Neutral', caption: 'Tap water. Stayed a similar red-pink, almost indistinguishable from the acid result.', dot: '#7c3aed' },
                { src: '/beetroot_base.jpeg', label: 'Base', caption: 'Baking soda. A very slight shift toward a cooler pink-purple, but still hard to tell apart.', dot: '#3b82f6' },
              ].map((photo, i) => (
                <motion.div key={photo.label}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl overflow-hidden"
                  style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="relative">
                    <img src={photo.src} alt={`Beetroot indicator in ${photo.label}`}
                      className="w-full h-48 object-cover block" />
                    <div className="absolute top-3 left-3">
                      <span className="font-mono font-bold text-xs px-2.5 py-1 rounded-full"
                        style={{ background: photo.dot, border: '1px solid rgba(0,0,0,0.2)', color: '#fff' }}>
                        {photo.label}
                      </span>
                    </div>
                  </div>
                  <div className="p-4" style={{ background: 'rgba(190,24,93,0.05)' }}>
                    <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{photo.caption}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <p className="eyebrow mb-2" style={{ color: accentLight }}>Literature Review</p>

            <InfoCard label="Background Chemistry" title="What betalains actually are">
              <p>Beetroot's colour comes from a group of pigments called betalains. There are two kinds — betacyanins, which are red-purple, and betaxanthins, which are yellow-orange. Both contain nitrogen, and that is actually quite unusual. Most other plant pigments, including anthocyanins and carotenoids, have no nitrogen in their structure at all (Strack et al., 2003).</p>
              <p className="mt-3">Betalains sit inside the vacuoles of plant cells — the storage compartments. Blending or crushing the beetroot breaks those cell walls open and the pigments flood into the surrounding liquid. That is why the water turns red so quickly once you start the blender (Stintzing & Carle, 2004).</p>
            </InfoCard>

            <InfoCard label="Previous Research" title="What researchers have found">
              <p>Several studies have looked at whether beetroot could serve as a natural pH indicator. Vulić et al. (2012) found that despite its very high pigment content, betalains behave quite differently from anthocyanins chemically and do not shift colour in response to pH in any predictable way. Stintzing and Carle (2004) noted the same thing — betalain stability is driven far more by temperature and light than by acidity or alkalinity.</p>
              <p className="mt-3">Beetroot does occasionally appear alongside red cabbage in classroom demonstrations, but the purpose there is usually to show contrast — to make clear that not every plant pigment behaves as an indicator. Across studies comparing natural indicators, beetroot consistently produces the smallest colour response to pH change of any commonly tested vegetable (Oplatowska-Stachowiak & Elliott, 2017).</p>
            </InfoCard>

            <InfoCard label="Scientific Explanation" title="Why the colour barely shifts">
              <p>The reason comes down to how the molecules are built. Anthocyanins carry a flavylium cation that is highly sensitive to gaining or losing protons — that structural instability is exactly what makes red cabbage and red onion shift colour so visibly (Strack et al., 2003).</p>
              <p className="mt-3">Betalains are different. The part of the molecule that absorbs light — the chromophore — is stabilised by the nitrogen atom in a way that insulates it from changes in hydrogen ion concentration. You can get very slight colour movement at extreme pH values, but within the range of anything you would find in a kitchen, the structural change is too small to see. Acid or alkali, the colour barely moves (Stintzing & Carle, 2004).</p>
            </InfoCard>

            <InfoCard label="Relevant Variables" title="Factors that affect the experiment">
              <p>Temperature is the biggest one. Above about 40°C, betalains start degrading — the extract fades over time regardless of what you add to it (Stintzing & Carle, 2004). UV light has a similar effect, so storing the extract in a dark container helps if you are running the experiment over more than one session.</p>
              <p className="mt-3">Concentration matters too. A weak extract will show even less colour variation across pH levels than a strong one. We kept the dilution consistent across all three portions so that any difference we saw could only be explained by the test solution, not by unequal amounts of pigment.</p>
            </InfoCard>

            <InfoCard label="Connection to Our Experiment" title="What this means for our investigation">
              <p>We went into this expecting beetroot to underperform — the literature is fairly clear on that. What we found matched the prediction closely. There was almost no visible colour difference between the acidic, neutral and alkaline portions, which is consistent with what Vulić et al. (2012) and others have documented.</p>
              <p className="mt-3">What this actually shows is that having a lot of pigment does not automatically make something a good indicator. The pigment needs to be structurally reactive to pH, and betalains simply are not. It helps explain why red cabbage is the default choice for this kind of experiment, rather than the more visually striking beetroot.</p>
            </InfoCard>
          </div>

          <InfoCard label="Reason" title="Why beetroot barely changes colour">
            <p>Beetroot's red colour comes from betalain pigments. Where anthocyanins — the pigments in red cabbage and red onion — are structurally reactive to changes in hydrogen ion concentration, betalains are not. Their molecular architecture does not shift enough across the pH scale to produce the kind of colour differences that would be readable by eye (Strack et al., 2003).</p>
          </InfoCard>

          <InfoCard label="Conclusion" title="Beetroot is not a reliable pH indicator">
            <p>The extract stays a similar deep red-pink regardless of what you add to it. An acidic solution and an alkaline one look essentially the same, which makes the indicator useless in practice — you cannot draw conclusions from a result you cannot see. It was a good experiment to run precisely because the negative result is informative.</p>
          </InfoCard>

          <ReferencesCard />
        </div>
      </div>
    </section>
  );
}
