/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg': '#fafafa',
        'surface': '#ffffff',
        'surface-alt': '#f3f4f6',
        'accent': '#4a7c6f',
        'accent-hover': '#3d6b5f',
        'heading': '#1a1a1a',
        'body': '#4b5563',
        'muted': '#9ca3af',
        'border-color': '#e5e7eb',
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
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        'card-hover': '0 10px 25px rgba(0,0,0,0.08), 0 4px 10px rgba(0,0,0,0.04)',
        'btn': '0 1px 2px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
}
