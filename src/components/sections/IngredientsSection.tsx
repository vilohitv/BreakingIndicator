import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { VEGETABLES } from '../../utils/data';

const DETAILS = [
  {
    id: 'red-cabbage',
    contrib: 72,
    contribLabel: 'Primary indicator compound',
    pigments: ['Cyanidin-3-glucoside', 'Peonidin glycosides', 'Delphinidin'],
    range: 'Bright Red → Vivid Yellow-Green',
    fact: 'Contains over 36 distinct anthocyanin compounds — more than almost any other common vegetable.',
    bgGradient: 'linear-gradient(145deg, rgba(139,26,94,0.18) 0%, rgba(14,11,30,0.8) 100%)',
  },
  {
    id: 'red-onion',
    contrib: 20,
    contribLabel: 'Stability & range enhancer',
    pigments: ['Quercetin glucosides', 'Isorhamnetin', 'Anthocyanin-3,4-diglucoside'],
    range: 'Pink-Red → Deep Blue',
    fact: 'Onion flavonoids act as co-pigments, binding with anthocyanins to intensify colour and extend shelf life by up to 3×.',
    bgGradient: 'linear-gradient(145deg, rgba(107,26,58,0.18) 0%, rgba(14,11,30,0.8) 100%)',
  },
  {
    id: 'beetroot',
    contrib: 8,
    contribLabel: 'Depth & contrast agent',
    pigments: ['Betanin', 'Isobetanin', 'Vulgaxanthin I & II'],
    range: 'Deep Red → Pale Yellow',
    fact: 'Betalains are unique to the order Caryophyllales and chemically unrelated to anthocyanins — they never co-exist in nature.',
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
      className="relative cursor-pointer" style={{ height: 360, perspective: 1400 }}
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

          {/* Top edge glow */}
          <div className="absolute top-0 left-8 right-8 h-px"
            style={{ background: `linear-gradient(90deg, transparent, ${veg.glowColor}70, transparent)` }} />

          {/* Ambient inner glow */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-24 rounded-full blur-3xl pointer-events-none"
            style={{ background: `${veg.glowColor}20` }} />

          <div className="p-7 h-full flex flex-col relative z-10">
            {/* Emoji */}
            <div className="text-5xl mb-5 filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
              {i === 0 ? '🥬' : i === 1 ? '🧅' : '🫐'}
            </div>

            <div className="flex-1">
              <p className="eyebrow mb-2" style={{ color: veg.glowColor }}>{veg.scientificName}</p>
              <h3 className="font-display font-bold text-2xl mb-2" style={{ color: 'rgba(255,255,255,0.95)' }}>
                {veg.name}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.42)' }}>
                {veg.reason.substring(0, 130)}…
              </p>
            </div>

            {/* Contribution bar */}
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
              Tap to see chemical profile →
            </p>
          </div>
        </div>

        {/* ── Back ──────────────────────────────────────────────────── */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden"
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

          <div className="p-7 h-full flex flex-col relative z-10">
            <p className="eyebrow mb-5" style={{ color: veg.glowColor }}>Chemical Profile</p>

            <div className="flex-1 space-y-4">
              <div>
                <p className="font-mono mb-2" style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  Active Pigments
                </p>
                <div className="space-y-1.5">
                  {detail.pigments.map(p => (
                    <div key={p} className="font-mono text-xs px-3 py-2 rounded-xl"
                      style={{ background: `${veg.glowColor}10`, border: `1px solid ${veg.glowColor}18`, color: 'rgba(255,255,255,0.62)' }}>
                      {p}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-mono mb-2" style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  Colour Range
                </p>
                <div className="font-mono text-xs px-3 py-2 rounded-xl"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.55)' }}>
                  {detail.range}
                </div>
              </div>

              <div className="rounded-xl p-3.5"
                style={{ background: `${veg.glowColor}0c`, border: `1px solid ${veg.glowColor}1a` }}>
                <p className="font-mono mb-1.5" style={{ fontSize: '10px', color: 'rgba(255,255,255,0.28)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  Did you know?
                </p>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{detail.fact}</p>
              </div>
            </div>

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
            Three vegetables, each contributing unique pigments. Tap each card to reveal its chemical profile.
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
