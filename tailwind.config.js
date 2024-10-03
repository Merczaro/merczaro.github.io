/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1a202c',
        'dark-text': '#e2e8f0',
      },
      width: {
        '1/2': '50%',
        '3/4': '75%',
      },
    },
  },
  plugins: [],
};
