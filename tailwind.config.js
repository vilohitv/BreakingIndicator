export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body:    ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        space:   '#04030a',
        deep:    '#080614',
        surface: '#0e0b1e',
        lift:    '#14102a',
        violet:  { DEFAULT: '#7c3aed', mid: '#9f6ef5', hi: '#c4b5fd' },
        emerald: { DEFAULT: '#34d399' },
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
}
