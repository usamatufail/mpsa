const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './renderer/pages/**/*.{js,ts,jsx,tsx}',
    './renderer/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        norwester: ['Norwester', 'sans-serif'],
        kollektif: ['Kollektif', 'sans-serif'],
        ['source-sans-pro']: ['SourceSansPro', 'sans-serif']
      },
    },
  },
  plugins: [],
}
