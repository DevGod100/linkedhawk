/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-orange': '#FF5722',
        'primary-blue-light': '#2196F3',
        'primary-blue': '#1565C0',
       'primary-blue-dark': '#0D47A1',
      },
      backgroundColor: {
        'mercury-gray': '#d3d6e9'
      }
    },
  },
  plugins: [
    require("flowbite/plugin")

  ],
}