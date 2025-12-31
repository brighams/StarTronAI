/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./src/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        audiowide: ['Audiowide', 'cursive'],
      },
      colors: {
        // EXAMPLE THEMES (unused)
        // Midnight Van Gogh Theme (Dark)
        'midnight': {
          50: '#f2f0ff',
          100: '#e9e4ff',
          200: '#d4cbff',
          300: '#b8a3ff',
          400: '#9b70ff',
          500: '#8340ff',
          600: '#7627f5',
          700: '#6417db',
          800: '#5315b3',
          900: '#3c1491',
          950: '#220c57',
        },
        'starry': {
          50: '#edfcff',
          100: '#d6f7ff',
          200: '#b5f0ff',
          300: '#83e7ff',
          400: '#48d4ff',
          500: '#1fb8ff',
          600: '#0696ff',
          700: '#007dff',
          800: '#0563ce',
          900: '#0c55a5',
          950: '#0b375e',
        },
        'cosmic': {
          50: '#fffaec',
          100: '#fff4d3',
          200: '#ffe7a5',
          300: '#ffd56d',
          400: '#ffbd3b',
          500: '#ff9d16',
          600: '#fc7b0c',
          700: '#e85b0c',
          800: '#cc4512',
          900: '#a63815',
          950: '#541907',
        },

        // Sunlit Meadow Theme (Light)
        'meadow': {
          50: '#f0fdf3',
          100: '#dbfce5',
          200: '#b9f7cf',
          300: '#86eeab',
          400: '#4bdd7c',
          500: '#25c357',
          600: '#15a043',
          700: '#137f38',
          800: '#146531',
          900: '#11542a',
          950: '#072f17',
        },
        'sky': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        'sunshine': {
          50: '#fffce8',
          100: '#fff9c2',
          200: '#fff088',
          300: '#ffe042',
          400: '#ffd020',
          500: '#ffb506',
          600: '#e28c00',
          700: '#bb6302',
          800: '#984c08',
          900: '#7c3e0c',
          950: '#482000',
        },
      },
      backgroundImage: {
        // Dark theme gradients
        'midnight-glow': 'linear-gradient(135deg, rgb(34, 12, 87, 0.95) 0%, rgb(60, 20, 145, 0.95) 40%, rgb(83, 21, 179, 0.9) 100%)',
        'cosmic-aurora': 'linear-gradient(135deg, rgb(34, 12, 87, 0.9) 0%, rgb(8, 47, 73, 0.9) 50%, rgb(11, 55, 94, 0.85) 100%)',
        'starry-night': 'radial-gradient(ellipse at top, rgba(24, 24, 80, 0.9) 0%, rgba(8, 8, 40, 0.95) 60%), radial-gradient(ellipse at bottom, rgba(54, 19, 125, 0.9) 0%, rgba(13, 13, 45, 0.95) 70%)',
        'nebula-burst': 'linear-gradient(135deg, rgba(34, 12, 87, 0.9) 0%, rgba(115, 41, 166, 0.85) 35%, rgba(202, 59, 98, 0.85) 70%, rgba(255, 122, 69, 0.75) 100%)',
        'deep-space': 'linear-gradient(to bottom, rgba(13, 12, 26, 0.95) 0%, rgba(34, 23, 77, 0.9) 50%, rgba(15, 12, 41, 0.8) 100%)',

        // Light theme gradients
        'morning-haze': 'linear-gradient(135deg, rgba(240, 249, 255, 0.9) 0%, rgba(224, 242, 254, 0.9) 40%, rgba(186, 230, 253, 0.8) 100%)',
        'sunlit-meadow': 'linear-gradient(135deg, rgba(240, 253, 243, 0.9) 0%, rgba(219, 252, 229, 0.85) 40%, rgba(185, 247, 207, 0.75) 100%)',
        'golden-hour': 'linear-gradient(to bottom, rgba(255, 252, 232, 0.9) 0%, rgba(255, 249, 194, 0.85) 35%, rgba(255, 240, 136, 0.75) 100%)',
        'spring-bloom': 'radial-gradient(ellipse at top, rgba(240, 253, 243, 0.9) 0%, rgba(219, 252, 229, 0.85) 60%), radial-gradient(ellipse at bottom, rgba(224, 242, 254, 0.85) 0%, rgba(186, 230, 253, 0.75) 70%)',
        'sunset-glow': 'linear-gradient(135deg, rgba(255, 249, 194, 0.9) 0%, rgba(255, 224, 66, 0.8) 30%, rgba(255, 181, 6, 0.7) 60%, rgba(226, 140, 0, 0.75) 100%)',
      },
      boxShadow: {
        'neon': '0 0 5px theme("colors.starry.400"), 0 0 20px theme("colors.starry.300")',
        'cosmic': '0 0 15px rgba(27, 184, 255, 0.4)',
        'inner-glow': 'inset 0 0 15px rgba(27, 184, 255, 0.3)',
        'sunlit': '0 0 15px rgba(14, 165, 233, 0.3)',
        'meadow-glow': '0 0 15px rgba(37, 195, 87, 0.3)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate')
  ],
}
