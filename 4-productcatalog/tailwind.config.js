/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './screens/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#D97706', // Amber for local products
        secondary: '#059669', // Emerald
        accent: '#DC2626', // Red
      },
    },
  },
  plugins: [],
};
