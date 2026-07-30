import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { FAQS } from '../../utils/data';

function FAQItem({ faq, i, open, onToggle }: {
  faq: typeof FAQS[0]; i: number; open: boolean; onToggle: () => void;
}) {
  const { ref, isVisible } = useScrollReveal(0.08);
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: i * 0.06 }}>
      <div
        className="relative rounded-2xl overflow-hidden transition-all duration-300"
        style={{
          background: open
            ? 'linear-gradient(135deg, rgba(124,58,237,0.08) 0%, rgba(14,11,30,0.7) 100%)'
            : 'rgba(255,255,255,0.025)',
          border: open ? '1px solid rgba(124,58,237,0.25)' : '1px solid rgba(255,255,255,0.06)',
          boxShadow: open ? '0 0 40px rgba(124,58,237,0.08)' : 'none',
        }}>

        {/* Accent edge when open */}
        {open && (
          <div className="absolute top-0 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(167,139,250,0.5), transparent)' }} />
        )}

        {/* Question */}
        <button onClick={onToggle}
          className="w-full px-6 py-5 text-left flex items-center gap-5 group">
          <span className="w-7 h-7 rounded-xl flex items-center justify-center font-mono text-xs font-bold flex-shrink-0 transition-all duration-300"
            style={{
              background: open ? 'rgba(124,58,237,0.25)' : 'rgba(255,255,255,0.05)',
              border: open ? '1px solid rgba(167,139,250,0.35)' : '1px solid rgba(255,255,255,0.08)',
              color: open ? '#c4b5fd' : 'rgba(255,255,255,0.3)',
            }}>
            {String(i + 1).padStart(2, '0')}
          </span>

          <span className="flex-1 text-sm font-medium leading-snug transition-colors duration-300"
            style={{ color: open ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.6)' }}>
            {faq.question}
          </span>

          <motion.div animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.3, ease: [0.22,1,0.36,1] }}
            className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: open ? 'rgba(124,58,237,0.2)' : 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M5 1v8M1 5h8" stroke={open ? '#a78bfa' : 'rgba(255,255,255,0.35)'} strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
          </motion.div>
        </button>

        {/* Answer */}
        <AnimatePresence>
          {open && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.38, ease: [0.22,1,0.36,1] }}
              className="overflow-hidden">
              <div className="px-6 pb-6 pl-[4.5rem]"
                style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <p className="text-sm leading-relaxed pt-4" style={{ color: 'rgba(255,255,255,0.48)' }}>
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
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding relative">
      <div className="orb w-96 h-96 left-1/2 -translate-x-1/2 bottom-0 opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.35), transparent 70%)' }} />

      <div className="max-w-2xl mx-auto px-6">
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 32 }} animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }} className="mb-20">
          <p className="eyebrow mb-4">Questions</p>
          <h2 className="font-display font-bold leading-none mb-6"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)' }}>
            <span className="text-gradient">Frequently</span>
            <br />
            <span style={{ color: 'rgba(255,255,255,0.9)' }}>Asked</span>
          </h2>
          <p className="text-sm leading-relaxed max-w-md" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Questions that came up during the project, along with the answers we found.
          </p>
        </motion.div>

        <div className="space-y-2.5">
          {FAQS.map((faq, i) => (
            <FAQItem key={i} faq={faq} i={i} open={open === i} onToggle={() => setOpen(open === i ? null : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
