/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ferrari-red': '#DC0000',
        'ferrari-dark': '#0A0A0A',
        'ferrari-gold': '#D4AF37',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
      },
      animation: {
        'pulse-red': 'pulse-red 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'sweep': 'sweep 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-red': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
        'glow': {
          '0%': { boxShadow: '0 0 20px rgba(220, 0, 0, 0.5)' },
          '100%': { boxShadow: '0 0 40px rgba(220, 0, 0, 0.9)' },
        },
        'sweep': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}
