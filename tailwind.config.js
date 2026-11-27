/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
      },
      colors: {
        fortis: {
          ink: '#07110d',
          panel: '#101b15',
          green: '#b7f34b',
          forest: '#17472e',
          muted: '#9ba99e',
        },
      },
      boxShadow: {
        glow: '0 0 60px rgba(183,243,75,.16)',
      },
    },
  },
  plugins: [],
}
