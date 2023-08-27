/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      colors:{
        dark: {
          primary: '#1a202c',
          secondary: '#2d3748',
        }
      }
    },
  },
  plugins: [],
}

