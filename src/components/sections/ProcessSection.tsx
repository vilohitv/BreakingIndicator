import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { PROCESS_STEPS } from '../../utils/data';

const STEP_COLORS = ['#7c3aed', '#34d399', '#fbbf24', '#ec4899'];

function StepCard({ step, i }: { step: typeof PROCESS_STEPS[0]; i: number }) {
  const { ref, isVisible } = useScrollReveal(0.15);
  const col = STEP_COLORS[i];

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.75, delay: i * 0.1, ease: [0.22,1,0.36,1] }}
      className={`group relative rounded-3xl overflow-hidden hover-float ${i % 2 === 0 ? 'md:ml-0 md:mr-auto' : 'md:ml-auto md:mr-0'}`}
      style={{
        width: '100%', maxWidth: '420px',
        background: `linear-gradient(145deg, ${col}0f 0%, rgba(14,11,30,0.75) 100%)`,
        border: `1px solid ${col}20`,
        boxShadow: `0 1px 0 rgba(255,255,255,0.06) inset, 0 24px 60px rgba(0,0,0,0.5)`,
      }}>

      {/* Top edge */}
      <div className="absolute top-0 left-8 right-8 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${col}60, transparent)` }} />

      {/* Hover glow */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: `0 0 60px ${col}15 inset` }} />

      <div className="p-7">
        <div className="flex items-start justify-between mb-5">
          <span className="text-3xl">{step.icon}</span>
          <span className="font-mono text-xs px-3 py-1.5 rounded-full"
            style={{ background: `${col}15`, border: `1px solid ${col}25`, color: col }}>
            {step.duration}
          </span>
        </div>
        <h3 className="font-display font-bold text-xl mb-3" style={{ color: 'rgba(255,255,255,0.92)' }}>
          {step.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export function ProcessSection() {
  const { ref, isVisible } = useScrollReveal(0.2);
  return (
    <section id="process" className="section-padding relative overflow-hidden">
      <div className="orb w-72 h-72 right-0 top-1/2 -translate-y-1/2 opacity-25 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(52,211,153,0.35), transparent 70%)' }} />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 32 }} animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }} className="mb-20">
          <p className="eyebrow mb-4">Step by Step</p>
          <h2 className="font-display font-bold leading-none mb-6"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)' }}>
            <span style={{ color: 'rgba(255,255,255,0.9)' }}>The </span>
            <span className="text-gradient-green">Experiment</span>
          </h2>
          <p className="text-sm leading-relaxed max-w-md" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Four precise steps to conduct a reproducible, visually striking pH experiment.
          </p>
        </motion.div>

        {/* Desktop zigzag timeline */}
        <div className="hidden md:block relative">
          {/* Centre line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(124,58,237,0.3) 15%, rgba(124,58,237,0.3) 85%, transparent)' }} />

          {PROCESS_STEPS.map((step, i) => {
            const isLeft = i % 2 === 0;
            const col = STEP_COLORS[i];
            return (
              <div key={step.step} className="relative flex justify-between items-center mb-14">
                <div className="w-[45%]">{isLeft && <StepCard step={step} i={i} />}</div>

                {/* Node */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.12 + 0.2, type: 'spring', stiffness: 280 }}
                  className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-base text-white flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${col}, ${col}99)`,
                    boxShadow: `0 0 0 4px rgba(14,11,30,1), 0 0 30px ${col}60`,
                  }}>
                  {step.step}
                  {/* Pulse */}
                  <motion.div className="absolute inset-0 rounded-full"
                    style={{ border: `2px solid ${col}50` }}
                    animate={{ scale: [1, 1.7], opacity: [0.7, 0] }}
                    transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.5 }} />
                </motion.div>

                <div className="w-[45%]">{!isLeft && <StepCard step={step} i={i} />}</div>
              </div>
            );
          })}
        </div>

        {/* Mobile vertical */}
        <div className="md:hidden space-y-5">
          {PROCESS_STEPS.map((step, i) => {
            const col = STEP_COLORS[i];
            return (
              <motion.div key={step.step} className="flex gap-4"
                initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.09 }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0 text-sm"
                  style={{ background: `linear-gradient(135deg, ${col}, ${col}88)`, boxShadow: `0 0 20px ${col}50` }}>
                  {step.step}
                </div>
                <div className="flex-1 rounded-2xl p-4 relative overflow-hidden"
                  style={{ background: `${col}0c`, border: `1px solid ${col}20` }}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{step.icon}</span>
                    <h3 className="font-display font-bold text-base" style={{ color: 'rgba(255,255,255,0.9)' }}>{step.title}</h3>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{step.description}</p>
                  <span className="font-mono text-xs mt-2 inline-block px-2 py-0.5 rounded-full"
                    style={{ background: `${col}15`, color: col }}>{step.duration}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Safety note */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.4 }}
          className="mt-12 rounded-3xl p-6 relative overflow-hidden"
          style={{ background: 'rgba(251,191,36,0.05)', border: '1px solid rgba(251,191,36,0.18)' }}>
          <div className="absolute top-0 left-8 right-8 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(251,191,36,0.4), transparent)' }} />
          <div className="flex items-start gap-4">
            <span className="text-2xl flex-shrink-0 mt-0.5">⚠️</span>
            <div>
              <p className="font-semibold text-sm mb-1.5" style={{ color: '#fde68a' }}>Safety Note</p>
              <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.42)' }}>
                Always wear gloves and eye protection. Never mix unknown chemicals. Work in a well-ventilated space. Supervise minors when handling anything beyond mild household acids/bases, and keep running water nearby.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
