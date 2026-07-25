import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Science',     href: '#how-it-works' },
  { label: 'Ingredients', href: '#ingredients'  },
  { label: 'pH Chart',    href: '#colors'        },
  { label: 'Process',     href: '#process'       },
  { label: 'Gallery',     href: '#gallery'       },
  { label: 'FAQ',         href: '#faq'           },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active,   setActive]   = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22,1,0.36,1] }}
      >
        {/* Pill container */}
        <div className="flex justify-center pt-4 px-4">
          <div
            className="w-full max-w-4xl relative"
            style={{
              background: scrolled
                ? 'rgba(8,6,20,0.82)'
                : 'rgba(8,6,20,0.4)',
              backdropFilter: 'blur(40px) saturate(180%)',
              WebkitBackdropFilter: 'blur(40px) saturate(180%)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '100px',
              boxShadow: scrolled
                ? '0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(124,58,237,0.1)'
                : '0 4px 20px rgba(0,0,0,0.3)',
              transition: 'all 0.4s ease',
            }}
          >
            {/* Top highlight line */}
            <div
              className="absolute top-0 left-12 right-12 h-px rounded-full"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)' }}
            />

            <div className="flex items-center justify-between px-5 py-3">
              {/* Logo */}
              <a href="#hero" className="flex items-center gap-2.5 group">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-sm flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%)',
                    boxShadow: '0 0 14px rgba(124,58,237,0.5)',
                  }}
                >
                  ⚗
                </div>
                <span
                  className="text-xs font-display font-bold tracking-wider"
                  style={{ color: 'rgba(255,255,255,0.8)' }}
                >
                  pH Indicator
                </span>
              </a>

              {/* Desktop links */}
              <div className="hidden md:flex items-center gap-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onMouseEnter={() => setActive(link.href)}
                    onMouseLeave={() => setActive('')}
                    className="relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors duration-200"
                    style={{
                      color: active === link.href ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.4)',
                      background: active === link.href ? 'rgba(124,58,237,0.15)' : 'transparent',
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Mobile toggle */}
              <button
                className="md:hidden w-8 h-8 rounded-full flex flex-col items-center justify-center gap-1.5"
                style={{ background: 'rgba(255,255,255,0.06)' }}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Menu"
              >
                <motion.span className="w-4 h-px bg-white/70 block" animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 4 : 0 }} />
                <motion.span className="w-3 h-px bg-white/70 block" animate={{ opacity: menuOpen ? 0 : 1 }} />
                <motion.span className="w-4 h-px bg-white/70 block" animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -4 : 0 }} />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{ background: 'rgba(4,3,10,0.97)', backdropFilter: 'blur(40px)' }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="font-display text-3xl font-bold mb-6"
                style={{ color: 'rgba(255,255,255,0.7)' }}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
