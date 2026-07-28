import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export function GallerySection() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section id="gallery" className="section-padding relative">
      <div
        className="orb w-64 h-64 left-0 top-1/3 opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.4), transparent 70%)' }}
      />

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <p className="eyebrow mb-4">Visual Results</p>
          <h2
            className="font-display font-bold leading-none mb-6"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)' }}
          >
            <span style={{ color: 'rgba(255,255,255,0.9)' }}>pH </span>
            <span className="text-gradient">Test Results</span>
          </h2>
          <p
            className="text-sm leading-relaxed max-w-md"
            style={{ color: 'rgba(255,255,255,0.4)' }}
          >
            The actual photo from our pH testing. You can see the beakers showing the full colour range across acidic, neutral and alkaline solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative rounded-3xl overflow-hidden"
          style={{ border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <img
            src="/ph_test.jpg"
            alt="pH test results showing beakers with colour changes"
            className="w-full h-auto object-cover block"
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
            style={{ background: 'linear-gradient(to top, rgba(4,3,10,0.4), transparent)' }}
          />
        </motion.div>
      </div>
    </section>
  );
}
