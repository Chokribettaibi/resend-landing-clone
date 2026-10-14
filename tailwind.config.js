module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        graphite: '#292d30',
        bone: '#f0f0f0',
        ash: '#a1a4a5',
        smoke: '#abafb4',
        iris: '#9281f7',
        irisGlow: '#baa7ff',
        signal: '#3b9eff',
        pulse: '#3ad389',
        alarm: '#ff9592'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      boxShadow: {
        none: 'none'
      }
    }
  },
  plugins: []
};
