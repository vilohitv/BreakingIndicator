import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';

// Since this is a static showcase with no real images, we'll create beautiful
// color-based gallery cards representing the different pH stages

const GALLERY_ITEMS = [
  {
    id: '1',
    label: 'Strong Acid — pH 1',
    sublabel: 'Hydrochloric Acid Solution',
    color: 'linear-gradient(135deg, #7f1d1d, #dc2626)',
    accent: '#dc2626',
    height: 'h-56',
    description: 'The indicator turns a vivid crimson red when mixed with strong acids. The flavylium cation is fully protonated at this pH.',
  },
  {
    id: '2',
    label: 'Weak Acid — pH 4',
    sublabel: 'Vinegar Solution',
    color: 'linear-gradient(135deg, #7c2d12, #ea580c)',
    accent: '#ea580c',
    height: 'h-40',
    description: 'A warm red-purple hue emerges in mildly acidic conditions, typical of kitchen acids like vinegar and citrus.',
  },
  {
    id: '3',
    label: 'Neutral — pH 7',
    sublabel: 'Distilled Water',
    color: 'linear-gradient(135deg, #2e1065, #7c3aed)',
    accent: '#7c3aed',
    height: 'h-64',
    description: 'At neutral pH, the anthocyanins rest in their equilibrium state, producing a deep, rich violet — the indicator\'s natural resting color.',
  },
  {
    id: '4',
    label: 'Weak Base — pH 9',
    sublabel: 'Baking Soda Solution',
    color: 'linear-gradient(135deg, #064e3b, #059669)',
    accent: '#059669',
    height: 'h-48',
    description: 'Mild bases cause a striking shift to blue-green as the anthocyanin molecules undergo partial deprotonation.',
  },
  {
    id: '5',
    label: 'Strong Base — pH 13',
    sublabel: 'Ammonia Solution',
    color: 'linear-gradient(135deg, #14532d, #16a34a)',
    accent: '#16a34a',
    height: 'h-44',
    description: 'Strongly alkaline solutions fully deprotonate the anthocyanins, producing a striking yellow-green — the complete opposite of the acidic red.',
  },
  {
    id: '6',
    label: 'Indicator Extract',
    sublabel: 'Combined Vegetable Pigments',
    color: 'linear-gradient(135deg, #4a044e, #a21caf)',
    accent: '#c026d3',
    height: 'h-60',
    description: 'The raw indicator extract — a deep burgundy-purple solution containing anthocyanins from all three vegetables.',
  },
  {
    id: '7',
    label: 'pH Gradient Test',
    sublabel: 'Full Spectrum Array',
    color: 'linear-gradient(90deg, #dc2626, #ea580c, #7c3aed, #059669, #16a34a)',
    accent: '#a78bfa',
    height: 'h-36',
    description: 'A full test array showing the complete color transition across the pH scale from left (acid) to right (base).',
  },
  {
    id: '8',
    label: 'Intermediate Acid — pH 3',
    sublabel: 'Lemon Juice Solution',
    color: 'linear-gradient(135deg, #831843, #be185d)',
    accent: '#ec4899',
    height: 'h-52',
    description: 'Citric acid produces a distinctive pink-magenta color, useful for distinguishing citric from stronger acids.',
  },
];

interface GalleryCardProps {
  item: typeof GALLERY_ITEMS[0];
  index: number;
  onClick: (item: typeof GALLERY_ITEMS[0]) => void;
}

function GalleryCard({ item, index, onClick }: GalleryCardProps) {
  const [hovered, setHovered] = useState(false);
  const { ref, isVisible } = useScrollReveal(0.05);

  return (
    <motion.div
      ref={ref}
      className="masonry-item"
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
    >
      <div
        className={`relative ${item.height} rounded-2xl overflow-hidden cursor-pointer group`}
        style={{ border: '1px solid rgba(255,255,255,0.08)' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => onClick(item)}
      >
        {/* Color background */}
        <div className="absolute inset-0" style={{ background: item.color }} />

        {/* Noise texture */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />

        {/* Liquid droplet effect */}
        <div
          className="absolute w-20 h-20 rounded-full blur-xl opacity-40 transition-all duration-700"
          style={{
            background: item.accent,
            top: hovered ? '20%' : '30%',
            left: hovered ? '60%' : '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />

        {/* Overlay on hover */}
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: 'rgba(0,0,0,0.4)',
            opacity: hovered ? 1 : 0,
          }}
        />

        {/* Content */}
        <div
          className="absolute inset-0 p-4 flex flex-col justify-end transition-all duration-300"
          style={{ transform: hovered ? 'translateY(0)' : 'translateY(6px)', opacity: hovered ? 1 : 0.7 }}
        >
          <span
            className="text-xs font-mono px-2 py-0.5 rounded-full self-start mb-2"
            style={{
              background: `${item.accent}30`,
              border: `1px solid ${item.accent}50`,
              color: 'rgba(255,255,255,0.9)',
            }}
          >
            {item.sublabel}
          </span>
          <h4 className="text-white font-display font-bold text-sm leading-tight">
            {item.label}
          </h4>
        </div>

        {/* Expand icon */}
        <div
          className="absolute top-3 right-3 w-7 h-7 rounded-full glass flex items-center justify-center transition-all duration-300"
          style={{ opacity: hovered ? 1 : 0, transform: hovered ? 'scale(1)' : 'scale(0.8)' }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 1h4M1 1v4M11 11H7M11 11V7M11 1H7M11 1v4M1 11h4M1 11V7" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

function Lightbox({
  item,
  onClose,
}: {
  item: typeof GALLERY_ITEMS[0] | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" />

          {/* Card */}
          <motion.div
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl"
            initial={{ scale: 0.85, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 280, damping: 24 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Color panel */}
            <div
              className="h-52 relative"
              style={{ background: item.color }}
            >
              <div
                className="absolute w-32 h-32 rounded-full blur-2xl opacity-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ background: item.accent }}
              />
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`,
                  backgroundSize: '200px 200px',
                }}
              />
              {/* Close button */}
              <button
                className="absolute top-4 right-4 w-8 h-8 rounded-full glass flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                onClick={onClose}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1 1l10 10M11 1L1 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="glass-strong p-6">
              <p className="text-xs font-mono mb-1" style={{ color: item.accent }}>
                {item.sublabel}
              </p>
              <h3 className="font-display text-xl font-bold text-white mb-3">
                {item.label}
              </h3>
              <p className="text-sm text-white/55 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function GallerySection() {
  const { ref, isVisible } = useScrollReveal(0.2);
  const [selected, setSelected] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  return (
    <section id="gallery" className="section-padding relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 40% at 30% 50%, rgba(124,58,237,0.04) 0%, transparent 70%)',
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
          <p className="hero-label mb-3">Visual Results</p>
          <h2 className="font-display text-4xl md:text-5xl font-black gradient-text-white">
            Gallery
          </h2>
          <p className="text-white/40 mt-4 max-w-md mx-auto text-sm leading-relaxed">
            Color representations of the indicator at different pH levels. Click any card to explore the detail.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-violet-500/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-violet-500/50" />
          </div>
        </motion.div>

        <div className="masonry-grid">
          {GALLERY_ITEMS.map((item, i) => (
            <GalleryCard
              key={item.id}
              item={item}
              index={i}
              onClick={setSelected}
            />
          ))}
        </div>
      </div>

      <Lightbox item={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
