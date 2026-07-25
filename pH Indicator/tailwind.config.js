/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'deep-purple': '#0d0a1a',
        'mid-purple': '#1a1030',
        'violet': '#7c3aed',
        'violet-light': '#a78bfa',
        'violet-glow': '#8b5cf6',
        'bio-green': '#4ade80',
        'bio-green-dark': '#16a34a',
        'glass': 'rgba(255,255,255,0.05)',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'radial-purple': 'radial-gradient(ellipse at center, #2d1b69 0%, #0d0a1a 70%)',
        'hero-gradient': 'radial-gradient(ellipse 80% 60% at 50% 40%, #1e0a4a 0%, #0d0a1a 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', filter: 'blur(20px)' },
          '50%': { opacity: '1', filter: 'blur(30px)' },
        },
      },
      backdropBlur: { xs: '2px' },
    },
  },
  plugins: [],
}
