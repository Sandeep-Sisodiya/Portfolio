/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg': '#0a0a0a',
        'surface': '#141414',
        'surface-hover': '#1a1a1a',
        'accent': '#5b8a72',
        'accent-hover': '#6b9e82',
        'heading': '#ededed',
        'body': '#a3a3a3',
        'muted': '#737373',
        'border-color': '#262626',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'xs': ['0.8rem', { lineHeight: '1.4' }],
        'sm': ['0.9rem', { lineHeight: '1.55' }],
        'base': ['1rem', { lineHeight: '1.7' }],
        'lg': ['1.125rem', { lineHeight: '1.6' }],
        'xl': ['1.3rem', { lineHeight: '1.4' }],
        '2xl': ['1.625rem', { lineHeight: '1.3' }],
        '3xl': ['2rem', { lineHeight: '1.2' }],
        '4xl': ['2.5rem', { lineHeight: '1.15' }],
        '5xl': ['3.25rem', { lineHeight: '1.1' }],
      },
      letterSpacing: {
        'tight': '-0.02em',
        'normal': '0em',
        'wide': '0.04em',
        'wider': '0.08em',
      },
    },
  },
  plugins: [],
}
