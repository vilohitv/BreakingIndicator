import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const PREP_STEPS = [
  { n: '01', title: 'Gather the beetroots', body: '5 fresh beetroots were selected as the base material for the indicator solution.' },
  { n: '02', title: 'Cut into pieces', body: 'Each beetroot was cut into 8 equal pieces, giving 40 pieces total. Smaller pieces mean more surface area, which helps the pigments come out more easily during blending.' },
  { n: '03', title: 'Add water', body: '50ml of water was added to the beetroot pieces before blending. This gives the blender enough liquid to work with and starts diluting the pigment into something usable.' },
  { n: '04', title: 'Blend', body: 'Everything was blended together until smooth. Blending breaks down the cell walls of the beetroot and releases the betalain pigments into the water.' },
  { n: '05', title: 'Filter the liquid', body: 'The blended mixture was filtered to separate the solid pulp from the liquid. The deep red liquid that came through is the beetroot indicator.' },
];

const TEST_STEPS = [
  { n: '01', title: 'Separate into equal amounts', body: 'The beetroot extract was divided into 3 equal portions, one for each test solution.' },
  { n: '02', title: 'Add test solutions', body: 'Lemon juice was added to one portion, distilled water to another, and dissolved baking soda to the last.' },
  { n: '03', title: 'Record observations', body: 'The colour of each portion was observed and recorded after adding the test solution.' },
  { n: '04', title: 'Observations', body: 'The beetroot indicator showed very little colour change across all three solutions. The colour stayed a similar deep red-pink regardless of whether the solution was acidic, neutral or alkaline. The differences were very hard to tell apart.' },
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
                { src: '/beetroot_neutral.jpeg', label: 'Neutral', caption: 'Distilled water. Stayed a similar red-pink, almost indistinguishable from the acid result.', dot: '#7c3aed' },
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
                        style={{ background: `${photo.dot}30`, border: `1px solid ${photo.dot}60`, color: photo.dot }}>
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
              <p>Beetroot gets its colour from a group of pigments called betalains. There are two types. Betacyanins are the red-purple ones and betaxanthins are yellow-orange. They are both nitrogen-containing compounds, which is actually pretty unusual for plant pigments. Most other coloured plant pigments like anthocyanins and carotenoids do not contain nitrogen at all.</p>
              <p className="mt-3">Betalains are stored inside the vacuoles of plant cells, which are basically the storage compartments. When the cell wall is broken down through blending or crushing, those pigments get released into whatever liquid is present. That is why the water turns red almost immediately once you start blending beetroot.</p>
            </InfoCard>

            <InfoCard label="Previous Research" title="What researchers have found">
              <p>A number of studies have looked at beetroot extract as a potential natural pH indicator. Vulić et al. (2012) found that while beetroot has very high pigment content, betalains are chemically very different from anthocyanins and do not respond to pH in the same predictable way. Researchers at the University of São Paulo also noted that betalain stability is much more affected by temperature and light exposure than by changes in acidity or alkalinity.</p>
              <p className="mt-3">In classroom experiments, beetroot is sometimes included alongside red cabbage to demonstrate that not all plant pigments behave the same way. Studies comparing natural indicators consistently show that beetroot produces the weakest colour response to pH changes out of the commonly tested vegetables.</p>
            </InfoCard>

            <InfoCard label="Scientific Explanation" title="Why the colour barely shifts">
              <p>The key reason beetroot does not work well as a pH indicator comes down to molecular structure. Anthocyanins have a flavylium cation structure that is very sensitive to protonation and deprotonation. That sensitivity is what drives the dramatic colour shifts in red cabbage and red onion.</p>
              <p className="mt-3">Betalains work differently. Their chromophore, the part of the molecule that absorbs light and produces colour, is stabilised by the nitrogen atom in a way that makes it far less responsive to changes in hydrogen ion concentration. The molecule can absorb protons at very extreme pH levels but within the range of normal household solutions, like lemon juice or baking soda, the structural change is minimal. So the colour you see stays almost the same regardless of whether the solution is acidic or alkaline.</p>
            </InfoCard>

            <InfoCard label="Relevant Variables" title="Factors that affect the experiment">
              <p>Temperature has a significant effect on betalain stability. Temperatures above 40°C begin to degrade the pigments, which can cause the extract to lose intensity over time regardless of pH. Light exposure is another factor. Betalains break down faster in UV light, so storing the extract in a dark bottle helps maintain consistency.</p>
              <p className="mt-3">Concentration also matters. A very dilute beetroot extract may show even less visible colour difference across pH levels than a concentrated one. In our experiment we kept the dilution consistent across all portions to make sure any differences we saw were due to pH and not unequal amounts of pigment.</p>
            </InfoCard>

            <InfoCard label="Connection to Our Experiment" title="What this means for our investigation">
              <p>Our experiment was designed to test whether beetroot extract could function as a reliable pH indicator. Based on the existing literature, the expectation going in was that it probably would not perform well, and that is exactly what we found. The extract showed almost no visible colour difference between the acidic, neutral and alkaline portions.</p>
              <p className="mt-3">This supports the scientific understanding that betalains are not pH-sensitive in the same way as anthocyanins. Our results line up with what previous researchers have reported, and they help illustrate why red cabbage is the standard choice for natural pH indicator experiments rather than beetroot.</p>
            </InfoCard>
          </div>

          <InfoCard label="Reason" title="Why beetroot barely changes colour">
            <p>Beetroot gets its deep red colour from betalain pigments. Unlike the anthocyanins found in red cabbage and red onion, betalains are not very sensitive to changes in hydrogen ion concentration. Their molecular structure does not shift enough across the pH scale to produce clear, distinct colour differences between acidic, neutral and alkaline conditions.</p>
          </InfoCard>

          <InfoCard label="Conclusion" title="Beetroot is not a reliable pH indicator">
            <p>Because the colour stays a similar deep red-pink no matter the pH level, it is very hard to use beetroot extract as a reliable indicator in practice. The difference between an acidic, neutral and basic solution is basically not visible to the naked eye, which means results can easily be misread or missed entirely.</p>
          </InfoCard>
        </div>
      </div>
    </section>
  );
}
