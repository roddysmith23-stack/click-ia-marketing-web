/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        deepVoid: '#050505',
        neonMint: '#00FF99',
        cyberViolet: '#A020F0',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 10px #00FF99, 0 0 20px #00FF99',
        'cyber': '0 0 10px #A020F0, 0 0 20px #A020F0',
      }
    },
  },
  plugins: [],
}

