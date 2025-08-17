/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      fontFamily: {
        // Example of adding a custom font
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        // Example of custom futuristic color palette
        slate: {
          900: '#0A192F',
          800: '#112240',
          // ... other shades
        },
        cyan: {
          500: '#64FFDA',
          // ... other shades
        }
      },
      animation: {
        'blob': 'blob 7s infinite',
        'tilt': 'tilt 10s infinite linear',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        tilt: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(2deg)' },
          '50%': { transform: 'rotate(0deg)' },
          '75%': { transform: 'rotate(-2deg)' },
        },
      },
    },
  },
  plugins: [],
}