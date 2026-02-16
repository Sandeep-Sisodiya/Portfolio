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
        'heading': '#e5e5e5',
        'body': '#a3a3a3',
        'muted': '#737373',
        'border-color': '#262626',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      maxWidth: {
        'content': '720px',
      },
    },
  },
  plugins: [],
}
