/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg': '#0f1117',
        'bg-light': '#161922',
        'surface': '#1c1f2e',
        'surface-hover': '#242838',
        'accent': '#e8a838',
        'accent-hover': '#f0b94d',
        'heading': '#f0f0f0',
        'body': '#9ca3b4',
        'muted': '#5e6578',
        'border-color': '#2a2e3e',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'xs': ['0.8rem', { lineHeight: '1.4' }],
        'sm': ['0.9rem', { lineHeight: '1.55' }],
        'base': ['1rem', { lineHeight: '1.7' }],
        'lg': ['1.15rem', { lineHeight: '1.6' }],
        'xl': ['1.35rem', { lineHeight: '1.4' }],
        '2xl': ['1.75rem', { lineHeight: '1.3' }],
        '3xl': ['2.25rem', { lineHeight: '1.2' }],
        '4xl': ['3rem', { lineHeight: '1.1' }],
        '5xl': ['3.75rem', { lineHeight: '1.05' }],
        '6xl': ['4.5rem', { lineHeight: '1' }],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(232, 168, 56, 0.15)',
        'glow-lg': '0 0 40px rgba(232, 168, 56, 0.2)',
        'card': '0 2px 8px rgba(0, 0, 0, 0.2)',
        'card-hover': '0 8px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(232, 168, 56, 0.08)',
      },
    },
  },
  plugins: [],
}
