const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background': '#0E0E10',
        'foreground': '#EFEFF1',
        'primary': '#FFA500', // Light orange
        'secondary': '#FFD700', // Gold (for additional accent if needed)
        'accent': '#FFC04D', // Lighter orange for hover effects
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}