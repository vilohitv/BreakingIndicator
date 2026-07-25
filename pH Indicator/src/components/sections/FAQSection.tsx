import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { FAQS } from '../../utils/data';

function FAQItem({ faq, index, isOpen, onToggle }: {
  faq: typeof FAQS[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="relative"
    >
      <div
        className="glass rounded-2xl overflow-hidden transition-all duration-300"
        style={{
          border: isOpen
            ? '1px solid rgba(124,58,237,0.35)'
            : '1px solid rgba(255,255,255,0.08)',
          boxShadow: isOpen ? '0 0 30px rgba(124,58,237,0.1)' : 'none',
        }}
      >
        {/* Question */}
        <button
          onClick={onToggle}
          className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 group"
        >
          <div className="flex items-center gap-4">
            <span
              className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 transition-all duration-300"
              style={{
                background: isOpen ? 'rgba(124,58,237,0.3)' : 'rgba(255,255,255,0.06)',
                border: isOpen ? '1px solid rgba(124,58,237,0.5)' : '1px solid rgba(255,255,255,0.1)',
                color: isOpen ? '#a78bfa' : 'rgba(255,255,255,0.4)',
              }}
            >
              {index + 1}
            </span>
            <span
              className="font-body font-medium text-sm md:text-base leading-snug transition-colors duration-300"
              style={{ color: isOpen ? '#f5f5f5' : 'rgba(255,255,255,0.7)' }}
            >
              {faq.question}
            </span>
          </div>

          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
            style={{
              background: isOpen ? 'rgba(124,58,237,0.2)' : 'rgba(255,255,255,0.05)',
            }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M5 1v8M1 5h8" stroke={isOpen ? '#a78bfa' : 'rgba(255,255,255,0.4)'} strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </motion.div>
        </button>

        {/* Answer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div
                className="px-6 pb-5 ml-11"
                style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
              >
                <p className="text-sm text-white/50 leading-relaxed pt-4">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export function FAQSection() {
  const { ref, isVisible } = useScrollReveal(0.2);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="section-padding relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(124,58,237,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="hero-label mb-3">Questions</p>
          <h2 className="font-display text-4xl md:text-5xl font-black gradient-text-white">
            FAQ
          </h2>
          <p className="text-white/40 mt-4 max-w-md mx-auto text-sm leading-relaxed">
            Common questions about the natural pH indicator, its chemistry, and how to use it effectively.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-violet-500/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-violet-500/50" />
          </div>
        </motion.div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
