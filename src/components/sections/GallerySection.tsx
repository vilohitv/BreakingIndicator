import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const ITEMS = [
  { id:'1', label:'Strong Acid', sublabel:'pH 1–2 · HCl solution',
    grad:'linear-gradient(160deg, #7f1d1d 0%, #dc2626 50%, #991b1b 100%)', accent:'#ef4444', h:'h-56',
    desc:'Vivid crimson red — the flavylium cation is fully protonated. The brightest, most saturated colour the indicator produces.' },
  { id:'2', label:'Weak Acid', sublabel:'pH 4–5 · Vinegar',
    grad:'linear-gradient(160deg, #7c2d12 0%, #ea580c 50%, #9a3412 100%)', accent:'#f97316', h:'h-40',
    desc:'A warm red-purple emerges in mildly acidic conditions, typical of kitchen acids like vinegar and citrus juices.' },
  { id:'3', label:'Neutral', sublabel:'pH 7 · Distilled water',
    grad:'linear-gradient(160deg, #2e1065 0%, #7c3aed 50%, #4c1d95 100%)', accent:'#a78bfa', h:'h-64',
    desc:'At neutral pH the anthocyanins rest in equilibrium — a deep, saturated violet. The indicator\'s natural resting colour.' },
  { id:'9', label:'pH Range Test', sublabel:'Full spectrum · Lab photo',
    grad:'linear-gradient(90deg, #7c3aed, #dc2626, #ea580c, #fbbf24)', accent:'#c4b5fd', h:'h-56',
    img: '/ph_test.jpg',
    desc:'The actual test results showing the full colour range of our indicator, from purple-violet on the acidic side through to bright yellow on the alkaline end.' },
  { id:'4', label:'Weak Base', sublabel:'pH 8–9 · Baking soda',
    grad:'linear-gradient(160deg, #064e3b 0%, #059669 50%, #065f46 100%)', accent:'#34d399', h:'h-48',
    desc:'Partial deprotonation shifts the molecule into a quinonoidal form — the indicator turns a striking blue-green.' },
  { id:'5', label:'Strong Base', sublabel:'pH 12–14 · NaOH',
    grad:'linear-gradient(160deg, #14532d 0%, #16a34a 50%, #166534 100%)', accent:'#4ade80', h:'h-44',
    desc:'Full deprotonation produces a yellow-green — the structural antipode of the acidic red form.' },
  { id:'6', label:'Raw Extract', sublabel:'Combined pigments',
    grad:'linear-gradient(160deg, #4a044e 0%, #86198f 50%, #701a75 100%)', accent:'#e879f9', h:'h-60',
    desc:'The freshly prepared indicator stock — a deep burgundy-purple containing anthocyanins and betalains from all three vegetables.' },
  { id:'7', label:'pH Gradient Array', sublabel:'Full spectrum test',
    grad:'linear-gradient(90deg, #dc2626, #ea580c, #7c3aed, #059669, #16a34a)', accent:'#c4b5fd', h:'h-36',
    desc:'A full side-by-side array of test tubes, showing the complete colour progression from pH 1 to pH 14.' },
  { id:'8', label:'Citric Acid', sublabel:'pH 3 · Lemon juice',
    grad:'linear-gradient(160deg, #831843 0%, #be185d 50%, #9d174d 100%)', accent:'#f472b6', h:'h-52',
    desc:'Citric acid produces a distinctive pink-magenta, distinguishable from stronger acids purely by shade.' },
];

function GalleryCard({ item, i, onClick }: { item: typeof ITEMS[0]; i: number; onClick: () => void }) {
  const [hov, setHov] = useState(false);
  const { ref, isVisible } = useScrollReveal(0.05);

  return (
    <motion.div ref={ref} className="masonry-item"
      initial={{ opacity: 0, y: 28 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}>

      <div className={`relative ${item.h} rounded-2xl overflow-hidden cursor-pointer`}
        style={{ border: '1px solid rgba(255,255,255,0.06)' }}
        onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} onClick={onClick}>

        {/* Background: real photo or gradient */}
        {item.img ? (
          <img src={item.img} alt={item.label}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
            style={{ transform: hov ? 'scale(1.05)' : 'scale(1)' }} />
        ) : (
          <div className="absolute inset-0 transition-transform duration-700"
            style={{ background: item.grad, transform: hov ? 'scale(1.05)' : 'scale(1)' }} />
        )}

        {/* Noise */}
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: '200px' }} />

        {/* Liquid glow blob */}
        <div className="absolute rounded-full blur-2xl transition-all duration-700"
          style={{
            background: item.accent,
            width: '60%', height: '60%',
            top: hov ? '15%' : '25%', left: hov ? '55%' : '45%',
            transform: 'translate(-50%,-50%)',
            opacity: hov ? 0.45 : 0.3,
          }} />

        {/* Dark overlay */}
        <div className="absolute inset-0 transition-opacity duration-300"
          style={{ background: 'rgba(0,0,0,0.35)', opacity: hov ? 0.6 : 0.25 }} />

        {/* Labels */}
        <div className="absolute inset-0 p-4 flex flex-col justify-end"
          style={{ opacity: hov ? 1 : 0.65, transform: hov ? 'translateY(0)' : 'translateY(4px)', transition: 'all 0.3s ease' }}>
          <h4 className="font-display font-bold text-white text-sm leading-tight">{item.label}</h4>
        </div>

        {/* Expand icon */}
        <div className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.15)',
            opacity: hov ? 1 : 0, transform: hov ? 'scale(1)' : 'scale(0.7)',
          }}>
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
            <path d="M1 1h4M1 1v4M10 10H6M10 10V6M10 1H6M10 1v4M1 10h4M1 10V6" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

function Lightbox({ item, onClose }: { item: typeof ITEMS[0] | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {item && (
        <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}>
          <div className="absolute inset-0" style={{ background: 'rgba(4,3,10,0.85)', backdropFilter: 'blur(40px)' }} />

          <motion.div className="relative z-10 w-full max-w-md rounded-4xl overflow-hidden"
            initial={{ scale: 0.87, y: 36 }} animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.92, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 26 }}
            onClick={e => e.stopPropagation()}>

            {/* Image or colour panel */}
            <div className="h-56 relative overflow-hidden" style={{ background: item.grad }}>
              {item.img ? (
                <img src={item.img} alt={item.label} className="absolute inset-0 w-full h-full object-cover" />
              ) : (
                <>
                  <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: '200px' }} />
                  <div className="absolute w-36 h-36 rounded-full blur-3xl opacity-60 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{ background: item.accent }} />
                </>
              )}
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'rgba(255,255,255,0.25)' }} />
              <button onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-white transition-colors"
                style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.15)' }}>
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                  <path d="M1 1l9 9M10 1L1 10" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Content */}
            <div style={{ background: 'rgba(8,6,20,0.85)', backdropFilter: 'blur(40px)', border: '1px solid rgba(255,255,255,0.07)', borderTop: 'none' }}
              className="p-6 rounded-b-4xl">
              <p className="eyebrow mb-1.5" style={{ color: item.accent }}>{item.sublabel}</p>
              <h3 className="font-display font-bold text-xl text-white mb-3">{item.label}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.48)' }}>{item.desc}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function GallerySection() {
  const { ref, isVisible } = useScrollReveal(0.2);
  const [selected, setSelected] = useState<typeof ITEMS[0] | null>(null);

  return (
    <section id="gallery" className="section-padding relative">
      <div className="orb w-64 h-64 left-0 top-1/3 opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.4), transparent 70%)' }} />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 32 }} animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }} className="mb-20">
          <p className="eyebrow mb-4">Visual Results</p>
          <h2 className="font-display font-bold leading-none mb-6"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)' }}>
            <span style={{ color: 'rgba(255,255,255,0.9)' }}>Colour </span>
            <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-sm leading-relaxed max-w-md" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Colour representations of the indicator at each pH level. Click any card to explore.
          </p>
        </motion.div>

        <div className="masonry-grid">
          {ITEMS.map((item, i) => (
            <GalleryCard key={item.id} item={item} i={i} onClick={() => setSelected(item)} />
          ))}
        </div>
      </div>
      <Lightbox item={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
