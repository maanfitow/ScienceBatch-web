/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#060911',
          900: '#090d16',
          850: '#0d1322',
          800: '#111827',
          750: '#161f33',
          700: '#1f2937',
          600: '#374151',
        },
        brand: {
          emerald: '#10b981',
          'emerald-light': '#34d399',
          cyan: '#38bdf8',
          blue: '#3b82f6',
          purple: '#818cf8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-emerald': '0 0 25px -5px rgba(16, 185, 129, 0.35)',
        'glow-cyan': '0 0 25px -5px rgba(56, 189, 248, 0.35)',
        'glow-subtle': '0 0 40px -10px rgba(56, 189, 248, 0.15)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
