import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer
      className="relative py-16 px-6"
      style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        background: 'linear-gradient(to bottom, transparent, rgba(124,58,237,0.04))',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
              style={{
                background: 'linear-gradient(135deg, #7c3aed, #5b21b6)',
                boxShadow: '0 0 20px rgba(124,58,237,0.3)',
              }}
            >
              ⚗️
            </div>
            <div>
              <p className="font-display font-bold text-white">Natural pH Indicator</p>
              <p className="text-xs text-white/30 font-mono">Science Project</p>
            </div>
          </motion.div>

          {/* pH Color strip */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hidden md:block h-1 w-40 rounded-full overflow-hidden"
            style={{
              background: 'linear-gradient(90deg, #dc2626, #7c3aed, #16a34a)',
              transformOrigin: 'left',
            }}
          />

          {/* Links */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-6"
          >
            {['Science', 'Colors', 'Process', 'FAQ'].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase().replace(' ', '-')}`}
                className="text-xs text-white/30 hover:text-white/70 transition-colors font-mono"
              >
                {label}
              </a>
            ))}
          </motion.nav>
        </div>

        {/* Bottom line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <p className="text-xs text-white/20 font-mono">
            Natural pH Indicator — Science Project
          </p>
          <div className="flex items-center gap-2">
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: '#4ade80', boxShadow: '0 0 8px rgba(74,222,128,0.6)' }}
            />
            <p className="text-xs text-white/20 font-mono">
              Red Cabbage · Red Onion · Beetroot
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
