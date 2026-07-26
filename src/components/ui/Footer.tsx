import { motion } from 'framer-motion';

const LINKS = ['Science', 'Colours', 'Process', 'FAQ'];
const VEG   = ['Red Cabbage', 'Red Onion', 'Beetroot'];
const VEG_C = ['#c084b0', '#c06080', '#b04060'];

export function Footer() {
  return (
    <footer className="relative pt-20 pb-10 px-6"
      style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.3), transparent)' }} />

      <div className="max-w-6xl mx-auto">
        {/* Main row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-12">

          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #4c1d95)', boxShadow: '0 0 20px rgba(124,58,237,0.35)' }}>
                pH
              </div>
              <div>
                <p className="font-display font-bold text-white/90 leading-none">Natural pH Indicator</p>
                <p className="font-mono mt-0.5" style={{ fontSize: '10px', color: 'rgba(255,255,255,0.28)' }}>Science Project</p>
              </div>
            </div>


          </motion.div>

          {/* Spectrum strip */}
          <motion.div initial={{ opacity: 0, scaleX: 0 }} whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.9 }}
            className="hidden md:block h-1.5 w-48 rounded-full overflow-hidden"
            style={{ background: 'linear-gradient(90deg, #dc2626, #7c3aed, #16a34a)', transformOrigin: 'center',
              boxShadow: '0 0 20px rgba(124,58,237,0.3)' }} />

          {/* Nav */}
          <motion.nav initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="flex gap-6">
            {LINKS.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`}
                className="font-mono text-xs transition-colors duration-200"
                style={{ color: 'rgba(255,255,255,0.28)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.28)')}>
                {l}
              </a>
            ))}
          </motion.nav>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <p className="font-mono" style={{ fontSize: '11px', color: 'rgba(255,255,255,0.18)' }}>
            Natural pH Indicator — Science Project
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full pulse-glow" style={{ background: '#34d399' }} />
            <p className="font-mono" style={{ fontSize: '11px', color: 'rgba(255,255,255,0.18)' }}>
              Anthocyanins · Betalains · pH Chemistry
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
