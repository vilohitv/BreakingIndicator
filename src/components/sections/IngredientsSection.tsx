import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { VEGETABLES } from '../../utils/data';

const DETAILS = [
  {
    id: 'red-cabbage',
    contrib: 90,
    contribLabel: 'Primary indicator compound',
    research: 'Red cabbage was chosen because it is one of the most colour-rich vegetables you can find at any grocery store. The deep purple colour comes from natural pigments that are extremely sensitive to changes in acidity. When we tested different vegetables, red cabbage produced the most dramatic and clear colour shifts across the widest range, going from bright red in acidic conditions all the way to yellow-green in strongly basic ones. It is also safe to handle, easy to prepare, and produces a stable solution that holds its colour well over time. That combination of accessibility and performance made it the obvious backbone of this experiment.',
    bgGradient: 'linear-gradient(145deg, rgba(139,26,94,0.18) 0%, rgba(14,11,30,0.8) 100%)',
  },
  {
    id: 'red-onion',
    contrib: 5,
    contribLabel: 'Stability enhancer',
    research: 'Red onion was added in small amounts because its natural compounds help the overall indicator stay stable for longer. On its own it does not produce as dramatic a colour change as red cabbage, but it contains flavonoids that bind with the cabbage pigments and slow down how quickly they break down. Think of it as a preservative that comes from the vegetable itself. Without it, the indicator solution would start to lose its reactivity faster, especially if left out at room temperature. A small amount goes a long way, which is why it only makes up five percent of the mixture.',
    bgGradient: 'linear-gradient(145deg, rgba(107,26,58,0.18) 0%, rgba(14,11,30,0.8) 100%)',
  },
  {
    id: 'beetroot',
    contrib: 5,
    contribLabel: 'Depth and contrast agent',
    research: 'Beetroot was included because its pigments are chemically different from those in red cabbage and red onion. While the other two rely on anthocyanins, beetroot uses a separate class of pigments called betalains. These do not shift colour as dramatically with pH changes, but they add a richness and depth to the solution that makes it easier to read subtle differences, especially in the middle of the pH scale where colours can look similar. It also gives the mixture a more vivid starting colour, which makes the changes more visually striking when you first add it to a test solution.',
    bgGradient: 'linear-gradient(145deg, rgba(92,10,40,0.18) 0%, rgba(14,11,30,0.8) 100%)',
  },
];

function IngCard({ veg, detail, i }: { veg: typeof VEGETABLES[0]; detail: typeof DETAILS[0]; i: number }) {
  const [flipped, setFlipped] = useState(false);
  const { ref, isVisible } = useScrollReveal(0.08);

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 56 }} animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: i * 0.13, ease: [0.22,1,0.36,1] }}
      className="relative cursor-pointer" style={{ height: 420, perspective: 1400 }}
      onClick={() => setFlipped(!flipped)}>

      <motion.div className="w-full h-full relative" style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.65, ease: [0.22,1,0.36,1] }}>

        {/* ── Front ─────────────────────────────────────────────────── */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden group"
          style={{
            background: detail.bgGradient,
            backdropFilter: 'blur(40px)',
            WebkitBackdropFilter: 'blur(40px)',
            border: `1px solid ${veg.glowColor}20`,
            boxShadow: `0 1px 0 rgba(255,255,255,0.07) inset, 0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,0,0,0.3)`,
            backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
          }}>

          <div className="absolute top-0 left-8 right-8 h-px"
            style={{ background: `linear-gradient(90deg, transparent, ${veg.glowColor}70, transparent)` }} />
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-24 rounded-full blur-3xl pointer-events-none"
            style={{ background: `${veg.glowColor}20` }} />

          <div className="p-7 h-full flex flex-col relative z-10">
            <div className="w-12 h-12 rounded-full mb-5 filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
              style={{ background: veg.glowColor, boxShadow: `0 0 20px ${veg.glowColor}60` }} />

            <div className="flex-1">
              <h3 className="font-display font-bold text-2xl mb-2" style={{ color: 'rgba(255,255,255,0.95)' }}>
                {veg.name}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.42)' }}>
                {veg.reason.substring(0, 130)}…
              </p>
            </div>

            <div className="mt-5">
              <div className="flex justify-between items-center mb-2">
                <span className="font-mono" style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)' }}>
                  {detail.contribLabel}
                </span>
                <span className="font-mono font-bold text-sm" style={{ color: veg.glowColor }}>
                  {detail.contrib}%
                </span>
              </div>
              <div className="h-1 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.07)' }}>
                <motion.div className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${veg.color}, ${veg.glowColor})` }}
                  initial={{ width: 0 }}
                  animate={isVisible ? { width: `${detail.contrib}%` } : { width: 0 }}
                  transition={{ duration: 1.1, delay: i * 0.13 + 0.5, ease: 'easeOut' }} />
              </div>
            </div>

            <p className="font-mono text-center mt-4" style={{ fontSize: '10px', color: 'rgba(255,255,255,0.2)' }}>
              Tap to find out why →
            </p>
          </div>
        </div>

        {/* ── Back ──────────────────────────────────────────────────── */}
        <div className="absolute inset-0 rounded-3xl"
          style={{
            background: detail.bgGradient,
            backdropFilter: 'blur(40px)',
            WebkitBackdropFilter: 'blur(40px)',
            border: `1px solid ${veg.glowColor}28`,
            boxShadow: `0 1px 0 rgba(255,255,255,0.06) inset, 0 32px 80px rgba(0,0,0,0.6)`,
            backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}>
          <div className="absolute top-0 left-8 right-8 h-px"
            style={{ background: `linear-gradient(90deg, transparent, ${veg.glowColor}60, transparent)` }} />

          <div className="p-7 h-full flex flex-col relative z-10 overflow-y-auto">
            <p className="eyebrow mb-4" style={{ color: veg.glowColor }}>Why we chose it</p>
            <p className="text-sm leading-relaxed flex-1" style={{ color: 'rgba(255,255,255,0.6)' }}>
              {detail.research}
            </p>
            <p className="font-mono text-center mt-4" style={{ fontSize: '10px', color: 'rgba(255,255,255,0.2)' }}>
              ← Tap to flip back
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function IngredientsSection() {
  const { ref, isVisible } = useScrollReveal(0.2);
  return (
    <section id="ingredients" className="section-padding relative">
      <div className="orb w-80 h-80 -right-20 top-40 opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(52,211,153,0.3), transparent 70%)' }} />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 32 }} animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }} className="mb-20">
          <p className="eyebrow mb-4">Components</p>
          <h2 className="font-display font-bold leading-none mb-6"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)' }}>
            <span style={{ color: 'rgba(255,255,255,0.9)' }}>The </span>
            <span className="text-gradient-green">Ingredients</span>
          </h2>
          <p className="text-sm leading-relaxed max-w-md" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Three vegetables, each contributing unique pigments. Tap each card to find out why it was chosen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {VEGETABLES.map((veg, i) => {
            const detail = DETAILS.find(d => d.id === veg.id)!;
            return <IngCard key={veg.id} veg={veg} detail={detail} i={i} />;
          })}
        </div>
      </div>
    </section>
  );
}
