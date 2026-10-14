// This file centralizes the brand palette, typography tokens, and spacing values.
// To update the visual system, edit this file instead of hardcoding colors in components.
// All sections consume these tokens via imports from `src/constants/data.js` and individual component props.
export const theme = {
  colors: {
    black: '#000000',
    hairline: '#292d30',
    white: '#ffffff',
    bone: '#f0f0f0',
    ash: '#a1a4a5',
    smoke: '#abafb4',
    iris: '#9281f7',
    irisGlow: '#baa7ff',
    signal: '#3b9eff',
    pulse: '#3ad389',
    alarm: '#ff9592'
  },
  radii: {
    sm: '6px',
    md: '16px',
    lg: '24px'
  },
  typography: {
    heroDisplay: 'font-serif text-[56px] leading-[1] tracking-[-0.01em] md:text-[96px]',
    sectionTitle: 'text-[40px] leading-[1.1] tracking-[-0.05em] md:text-[56px]',
    body: 'text-[14px] leading-[1.5] md:text-[16px]',
    caption: 'text-[12px] leading-[1.5] md:text-[14px]'
  }
};
