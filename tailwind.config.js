/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/ui/components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: { // Add this to register the theme with tailwind
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      }
    },
    colors: { // Add some colors with variant
      description: '#54595F',
      white: '#fff',
      black: '#000',
      grey: {
        100: '#cfd8dc'
      },
      blue: {
        400: '#5c6bc0'
      },
      red: {
        400: '#ef5350',
        500: '#f44336'
      }
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ]
}
