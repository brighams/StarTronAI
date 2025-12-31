/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,.css,.scss}",
    "./public/index.html",
    "./src/index.html"
  ],
  theme: {
    extend: {
      colors: {
        meadow: {
          50: '#f0fdf4',
          600: '#16a34a',
          700: '#15803d',
          200: '#bbf7d0',
        },
        starry: {
          300: '#fda4af',
          500: '#f43f5e',
          600: '#e11d48',
          950: '#500724',
        },
        midnight: {
          500: '#475569',
          600: '#334155',
          700: '#1e293b',
          800: '#0f172a',
          900: '#0f0f1e',
          950: '#030712',
        },
      },
      boxShadow: {
        cosmic: '0 20px 25px -5px rgba(0, 0, 0, 0.5)',
      },
      fontFamily: {
        audiowide: ['Audiowide', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
