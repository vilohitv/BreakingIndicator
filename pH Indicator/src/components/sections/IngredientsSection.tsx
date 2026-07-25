import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { VEGETABLES } from '../../utils/data';

const VEG_DETAILS = [
  {
    id: 'red-cabbage',
    emoji: '🥬',
    pigments: ['Cyanidin-3-glucoside', 'Peonidin glycosides', 'Delphinidin'],
    color: 'red-purple → blue-green',
    contribution: '70%',
    contribLabel: 'Primary indicator compound',
    fact: 'Contains over 36 different anthocyanin compounds — more than almost any other common vegetable.',
  },
  {
    id: 'red-onion',
    emoji: '🧅',
    pigments: ['Quercetin glucosides', 'Isorhamnetin', 'Anthocyanin-3,4-diglucoside'],
    color: 'pink → blue',
    contribution: '20%',
    contribLabel: 'Stability & range enhancer',
    fact: 'Onion flavonoids act as co-pigments, binding with anthocyanins to intensify color and extend shelf life.',
  },
  {
    id: 'beetroot',
    emoji: '🫐',
    pigments: ['Betanin', 'Isobetanin', 'Vulgaxanthin I & II'],
    color: 'deep red → yellow',
    contribution: '10%',
    contribLabel: 'Depth & contrast agent',
    fact: 'Betalains are unique to the order Caryophyllales — they are chemically unrelated to anthocyanins and cannot co-exist with them in nature.',
  },
];

function IngredientCard({ veg, detail, index }: {
  veg: typeof VEGETABLES[0];
  detail: typeof VEG_DETAILS[0];
  index: number;
}) {
  const [flipped, setFlipped] = useState(false);
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative h-80 cursor-pointer"
      style={{ perspective: '1200px' }}
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        className="w-full h-full relative"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 glass rounded-2xl p-6 overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            border: `1px solid ${veg.glowColor}25`,
          }}
        >
          {/* Glow background */}
          <div
            className="absolute inset-0 rounded-2xl opacity-40"
            style={{
              background: `radial-gradient(ellipse at top left, ${veg.glowColor}20, transparent 60%)`,
            }}
          />

          <div className="relative z-10 h-full flex flex-col">
            {/* Emoji display */}
            <div className="text-6xl mb-4 filter drop-shadow-lg">{detail.emoji}</div>

            <div className="flex-1">
              <h3 className="font-display text-2xl font-bold text-white mb-1">{veg.name}</h3>
              <p className="text-xs font-mono italic mb-3" style={{ color: veg.glowColor }}>
                {veg.scientificName}
              </p>
              <p className="text-sm text-white/50 leading-relaxed line-clamp-3">
                {veg.reason.substring(0, 120)}...
              </p>
            </div>

            <div className="mt-4">
              {/* Contribution bar */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-white/40 font-mono">{detail.contribLabel}</span>
                <span className="text-xs font-mono font-bold" style={{ color: veg.glowColor }}>
                  {detail.contribution}
                </span>
              </div>
              <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${veg.color}, ${veg.glowColor})` }}
                  initial={{ width: 0 }}
                  animate={isVisible ? { width: detail.contribution } : { width: 0 }}
                  transition={{ duration: 1, delay: index * 0.15 + 0.5, ease: 'easeOut' }}
                />
              </div>
            </div>

            <p className="text-xs text-white/25 text-center mt-3 font-mono">Tap to flip →</p>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 glass rounded-2xl p-6 overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            border: `1px solid ${veg.glowColor}35`,
          }}
        >
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: `radial-gradient(ellipse at bottom right, ${veg.glowColor}15, transparent 60%)`,
            }}
          />

          <div className="relative z-10 h-full flex flex-col">
            <p className="hero-label mb-4" style={{ color: veg.glowColor }}>Chemical Profile</p>

            <div className="flex-1 space-y-3">
              {/* Pigments */}
              <div>
                <p className="text-xs text-white/40 mb-2 font-mono uppercase tracking-wider">Active Pigments</p>
                <div className="flex flex-col gap-1.5">
                  {detail.pigments.map((p) => (
                    <div
                      key={p}
                      className="text-xs font-mono px-3 py-1.5 rounded-lg"
                      style={{
                        background: `${veg.glowColor}12`,
                        border: `1px solid ${veg.glowColor}20`,
                        color: 'rgba(255,255,255,0.7)',
                      }}
                    >
                      {p}
                    </div>
                  ))}
                </div>
              </div>

              {/* Color range */}
              <div>
                <p className="text-xs text-white/40 mb-1.5 font-mono uppercase tracking-wider">Color Range</p>
                <div
                  className="text-xs font-mono px-3 py-1.5 rounded-lg"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'rgba(255,255,255,0.6)',
                  }}
                >
                  {detail.color}
                </div>
              </div>

              {/* Fun fact */}
              <div
                className="p-3 rounded-xl"
                style={{
                  background: `${veg.glowColor}10`,
                  border: `1px solid ${veg.glowColor}20`,
                }}
              >
                <p className="text-xs text-white/40 mb-1 font-mono">Did you know?</p>
                <p className="text-xs text-white/60 leading-relaxed">{detail.fact}</p>
              </div>
            </div>

            <p className="text-xs text-white/25 text-center mt-3 font-mono">← Tap to flip back</p>
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
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 50% at 80% 50%, rgba(74,222,128,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="hero-label mb-3">Components</p>
          <h2 className="font-display text-4xl md:text-5xl font-black gradient-text-white">
            The Ingredients
          </h2>
          <p className="text-white/40 mt-4 max-w-md mx-auto text-sm leading-relaxed">
            Three natural vegetables, each contributing unique pigments. Tap each card to reveal its chemical profile.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-green-500/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-green-500/50" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VEGETABLES.map((veg, i) => {
            const detail = VEG_DETAILS.find((d) => d.id === veg.id)!;
            return (
              <IngredientCard key={veg.id} veg={veg} detail={detail} index={i} />
            );
          })}
        </div>
      </div>
    </section>
  );
}
