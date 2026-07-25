import { motion, AnimatePresence } from 'framer-motion';
import type { Vegetable } from '../../types';

interface VegetableInfoCardProps {
  vegetable: Vegetable | null;
  onClose: () => void;
}

export function VegetableInfoCard({ vegetable, onClose }: VegetableInfoCardProps) {
  return (
    <AnimatePresence>
      {vegetable && (
        <motion.div
          key={vegetable.id}
          initial={{ opacity: 0, y: 30, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 w-full max-w-md px-4"
          style={{ pointerEvents: 'all' }}
        >
          <div
            className="glass-strong rounded-2xl p-6 relative overflow-hidden"
            style={{
              border: `1px solid ${vegetable.glowColor}40`,
              boxShadow: `0 0 40px ${vegetable.glowColor}30, 0 20px 60px rgba(0,0,0,0.5)`,
            }}
          >
            {/* Color accent bar */}
            <div
              className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
              style={{ background: `linear-gradient(90deg, transparent, ${vegetable.glowColor}, transparent)` }}
            />

            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="hero-label mb-1" style={{ color: vegetable.glowColor }}>
                  {vegetable.role}
                </p>
                <h3 className="font-display text-2xl font-bold text-white">
                  {vegetable.name}
                </h3>
                <p className="text-sm text-white/40 font-mono italic mt-0.5">
                  {vegetable.scientificName}
                </p>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:bg-white/10 text-white/40 hover:text-white flex-shrink-0 mt-1"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/10 mb-4" />

            {/* Description */}
            <p className="text-sm text-white/65 leading-relaxed">
              {vegetable.reason}
            </p>

            {/* Tags */}
            <div className="flex gap-2 mt-4 flex-wrap">
              {['Anthocyanins', 'Natural Pigment', 'pH Sensitive'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-2.5 py-1 rounded-full"
                  style={{
                    background: `${vegetable.glowColor}18`,
                    border: `1px solid ${vegetable.glowColor}30`,
                    color: vegetable.glowColor,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Hint */}
            <p className="text-xs text-white/25 text-center mt-4 font-mono">
              Click anywhere to dismiss
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
