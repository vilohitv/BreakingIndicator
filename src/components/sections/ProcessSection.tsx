import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { PROCESS_STEPS } from '../../utils/data';

function StepCard({ step, index, isLeft }: {
  step: typeof PROCESS_STEPS[0];
  index: number;
  isLeft: boolean;
}) {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`flex items-center gap-6 mb-8 ${isLeft ? 'flex-row' : 'flex-row-reverse'} md:w-5/12`}
    >
      {/* Card */}
      <div
        className="glass rounded-2xl p-5 flex-1 group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden"
        style={{ border: '1px solid rgba(124,58,237,0.2)' }}
      >
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(ellipse at ${isLeft ? 'top right' : 'top left'}, rgba(124,58,237,0.1), transparent 70%)`,
          }}
        />

        <div className="relative z-10">
          <div className="flex items-start justify-between mb-3">
            <span className="text-3xl">{step.icon}</span>
            <span
              className="text-xs font-mono px-2.5 py-1 rounded-full"
              style={{
                background: 'rgba(124,58,237,0.15)',
                border: '1px solid rgba(124,58,237,0.25)',
                color: '#a78bfa',
              }}
            >
              {step.duration}
            </span>
          </div>

          <h3 className="font-display text-lg font-bold text-white mb-2">
            {step.title}
          </h3>
          <p className="text-sm text-white/50 leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function ProcessSection() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section id="process" className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 40% 60% at 90% 50%, rgba(74,222,128,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="hero-label mb-3">Step by Step</p>
          <h2 className="font-display text-4xl md:text-5xl font-black gradient-text-white">
            The Experiment
          </h2>
          <p className="text-white/40 mt-4 max-w-md mx-auto text-sm leading-relaxed">
            Follow these four steps to conduct your pH experiment with precision and reproducible results.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-green-500/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-green-500/50" />
          </div>
        </motion.div>

        {/* Timeline - desktop zigzag, mobile vertical */}
        <div className="hidden md:block relative">
          {/* Center vertical line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(124,58,237,0.4) 10%, rgba(124,58,237,0.4) 90%, transparent)' }}
          />

          {PROCESS_STEPS.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div key={step.step} className="relative flex justify-between items-center mb-12">
                {/* Left side */}
                <div className="w-5/12">
                  {isLeft && <StepCard step={step} index={i} isLeft={true} />}
                </div>

                {/* Center node */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.2, type: 'spring', stiffness: 300 }}
                  className="w-12 h-12 rounded-full flex items-center justify-center font-display font-black text-lg text-white flex-shrink-0 relative z-10"
                  style={{
                    background: 'linear-gradient(135deg, #7c3aed, #5b21b6)',
                    boxShadow: '0 0 30px rgba(124,58,237,0.5)',
                  }}
                >
                  {step.step}
                  {/* Pulse ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ border: '2px solid rgba(124,58,237,0.4)' }}
                    animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                  />
                </motion.div>

                {/* Right side */}
                <div className="w-5/12">
                  {!isLeft && <StepCard step={step} index={i} isLeft={false} />}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile vertical list */}
        <div className="md:hidden space-y-6">
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex gap-4"
            >
              {/* Step number */}
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0 text-sm"
                style={{
                  background: 'linear-gradient(135deg, #7c3aed, #5b21b6)',
                  boxShadow: '0 0 20px rgba(124,58,237,0.4)',
                }}
              >
                {step.step}
              </div>

              <div
                className="glass rounded-xl p-4 flex-1"
                style={{ border: '1px solid rgba(124,58,237,0.2)' }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{step.icon}</span>
                  <h3 className="font-display text-base font-bold text-white">{step.title}</h3>
                </div>
                <p className="text-xs text-white/50 leading-relaxed">{step.description}</p>
                <span
                  className="inline-block mt-2 text-xs font-mono px-2 py-0.5 rounded-full"
                  style={{
                    background: 'rgba(124,58,237,0.15)',
                    color: '#a78bfa',
                  }}
                >
                  {step.duration}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Safety note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 rounded-2xl p-5 relative overflow-hidden"
          style={{
            background: 'rgba(245,158,11,0.06)',
            border: '1px solid rgba(245,158,11,0.2)',
          }}
        >
          <div className="flex items-start gap-3">
            <span className="text-xl flex-shrink-0">⚠️</span>
            <div>
              <p className="text-sm font-semibold text-amber-300 mb-1">Safety Note</p>
              <p className="text-xs text-white/45 leading-relaxed">
                Always wear protective gloves and eye protection. Never mix unknown chemicals. Work in a well-ventilated area. For strong acids or bases, supervise minors at all times and have running water nearby for emergencies.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
