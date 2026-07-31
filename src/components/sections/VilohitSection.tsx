import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const PREP_STEPS = [
  { n: '01', title: 'Gather the beetroots', body: 'We grabbed 5 fresh beetroots from the supermarket. Nothing fancy, just regular ones.' },
  { n: '02', title: 'Cut into pieces', body: 'Each beetroot was cut into roughly 8 pieces — 40 pieces total. Smaller chunks blend more evenly and let more pigment out.' },
  { n: '03', title: 'Add water', body: '50ml of water went in before blending. Without it the blender just spins the chunks around without doing much.' },
  { n: '04', title: 'Blend', body: 'Blended it all until smooth. This breaks open the cell walls and releases the betalain pigments into the water — you can see the liquid go very dark red pretty fast.' },
  { n: '05', title: 'Filter the liquid', body: 'Poured it through a filter to separate the pulp from the liquid. What came through was a deep red solution — that is the indicator.' },
];

const TEST_STEPS = [
  { n: '01', title: 'Separate into equal amounts', body: 'Split the extract into 3 equal portions so we had one for each test.' },
  { n: '02', title: 'Add test solutions', body: 'Lemon juice into one, tap water into another, baking soda dissolved in water into the third.' },
  { n: '03', title: 'Record observations', body: 'Watched what happened to each one and wrote it down.' },
  { n: '04', title: 'Observations', body: 'Honestly not much happened. All three stayed a very similar deep red-pink. If there were differences they were too subtle to call confidently. We checked a few times thinking we had made a mistake.' },
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
              <p>Beetroot gets its colour from pigments called betalains. There are two kinds — betacyanins give the red-purple colour, and betaxanthins are yellow-orange. What makes them unusual is that they contain nitrogen. Most plant pigments, like anthocyanins and carotenoids, do not (Strack et al., 2003).</p>
              <p className="mt-3">These pigments sit inside the vacuoles of the plant's cells. When you blend or crush the beetroot the cell walls break and the pigments spill out into the water — which is why it goes red so quickly (Stintzing & Carle, 2004).</p>
            </InfoCard>

            <InfoCard label="Previous Research" title="What researchers have found">
              <p>A few studies have looked at whether beetroot works as a natural pH indicator. Vulić et al. (2012) found that even though beetroot is really high in pigment, betalains are chemically different enough from anthocyanins that they just do not respond to pH the same way. Stintzing and Carle (2004) pointed out that what actually affects betalain stability is temperature and light — not acidity (Oplatowska-Stachowiak & Elliott, 2017).</p>
              <p className="mt-3">In a lot of classroom experiments beetroot gets included alongside red cabbage specifically to show that not all plant pigments work the same. And across every comparison study we found, beetroot consistently came last for pH sensitivity.</p>
            </InfoCard>

            <InfoCard label="Scientific Explanation" title="Why the colour barely shifts">
              <p>It comes down to the molecular structure. Anthocyanins have that flavylium cation that reacts strongly to gaining or losing protons — that's what makes the colour jump so obviously in red cabbage. Betalains do not have that (Strack et al., 2003).</p>
              <p className="mt-3">Their chromophore — the part that absorbs light and gives them colour — is stabilised by the nitrogen atom in a way that makes it much less reactive to hydrogen ion concentration. You can get a shift at extreme pH if you push far enough, but in the range of normal household substances like lemon juice or baking soda? Almost nothing moves. The colour just stays (Stintzing & Carle, 2004).</p>
            </InfoCard>

            <InfoCard label="Relevant Variables" title="Factors that affect the experiment">
              <p>Heat is a big one — above 40°C betalains start breaking down, so the extract loses its intensity over time no matter what the pH is doing (Stintzing & Carle, 2004). UV light does the same thing, just slower. We stored ours in a dark bottle for that reason.</p>
              <p className="mt-3">How concentrated the extract is also affects how visible any colour change would be. We made sure all three portions came from the same batch and had the same dilution, so the results were at least comparable to each other even if they were not very dramatic.</p>
            </InfoCard>

            <InfoCard label="Connection to Our Experiment" title="What this means for our investigation">
              <p>Going into this we half expected it not to work based on what the research said. And it did not. The three portions looked almost identical — there was no clear way to tell which was the acid, which was neutral and which was the base just by looking at the colour.</p>
              <p className="mt-3">This fits with what Vulić et al. (2012) and others found. Betalains are just not pH-sensitive the way anthocyanins are. It is actually a useful result in a way — it shows that picking the wrong plant can mean your indicator tells you nothing at all.</p>
            </InfoCard>
          </div>

          <InfoCard label="Reason" title="Why beetroot barely changes colour">
            <p>Beetroot's deep red comes from betalains, not anthocyanins. And that is the problem. Betalains are not sensitive to hydrogen ions the way anthocyanins are — their structure does not shift enough across the pH range to produce any colour change you could actually read (Strack et al., 2003).</p>
          </InfoCard>

          <InfoCard label="Conclusion" title="Beetroot is not a reliable pH indicator">
            <p>Beetroot does not work as a pH indicator for anything in the normal household range. The colour barely shifts, and what little change there might be is too small to read by eye. If we had used beetroot alone in this experiment we would have got no useful results at all.</p>
          </InfoCard>

          <ReferencesCard />
        </div>
      </div>
    </section>
  );
}
