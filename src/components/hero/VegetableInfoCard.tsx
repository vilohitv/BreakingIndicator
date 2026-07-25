import { motion, AnimatePresence } from 'framer-motion';
import type { Vegetable } from '../../types';

export function VegetableInfoCard({ vegetable, onClose }: { vegetable: Vegetable | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {vegetable && (
        <motion.div
          key={vegetable.id}
          initial={{ opacity: 0, y: 24, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.96 }}
          transition={{ type: 'spring', stiffness: 320, damping: 26 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 w-full max-w-md px-4"
          style={{ pointerEvents: 'all' }}
        >
          <div
            className="relative overflow-hidden rounded-3xl"
            style={{
              background: 'rgba(8,6,20,0.75)',
              backdropFilter: 'blur(60px) saturate(200%)',
              WebkitBackdropFilter: 'blur(60px) saturate(200%)',
              border: `1px solid ${vegetable.glowColor}35`,
              boxShadow: `0 0 0 1px ${vegetable.glowColor}12, 0 32px 80px rgba(0,0,0,0.7), 0 0 60px ${vegetable.glowColor}15`,
            }}
          >
            {/* Top chromatic edge */}
            <div className="absolute top-0 left-0 right-0 h-px"
              style={{ background: `linear-gradient(90deg, transparent, ${vegetable.glowColor}80, transparent)` }} />

            {/* Inner glow */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-20 rounded-full blur-3xl pointer-events-none"
              style={{ background: `${vegetable.glowColor}25` }} />

            <div className="p-6 relative z-10">
              {/* Header */}
              <div className="flex items-start justify-between mb-5">
                <div>
                  <p className="eyebrow mb-1.5" style={{ color: vegetable.glowColor }}>
                    {vegetable.role}
                  </p>
                  <h3 className="font-display text-2xl font-bold text-white/95 leading-tight">
                    {vegetable.name}
                  </h3>
                  <p className="font-mono text-xs italic mt-1" style={{ color: 'rgba(255,255,255,0.3)' }}>
                    {vegetable.scientificName}
                  </p>
                </div>
                <button onClick={onClose}
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-all"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M1 1l8 8M9 1L1 9" stroke="rgba(255,255,255,0.5)" strokeWidth="1.4" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              {/* Divider */}
              <div className="h-px mb-4" style={{ background: `linear-gradient(90deg, ${vegetable.glowColor}30, rgba(255,255,255,0.05), transparent)` }} />

              {/* Body */}
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.58)' }}>
                {vegetable.reason}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-5">
                {['Anthocyanins', 'Natural Pigment', 'pH Sensitive'].map(tag => (
                  <span key={tag} className="font-mono text-xs px-3 py-1 rounded-full"
                    style={{ background: `${vegetable.glowColor}15`, border: `1px solid ${vegetable.glowColor}28`, color: vegetable.glowColor }}>
                    {tag}
                  </span>
                ))}
              </div>

              <p className="font-mono text-center mt-4" style={{ fontSize: '10px', color: 'rgba(255,255,255,0.2)' }}>
                Click anywhere to dismiss
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
