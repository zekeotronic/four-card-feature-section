/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'pale-red': '#EA5454',
        'pale-teal': '#44D3D2',
        'pale-orange': '#FCAE4A',
        'pale-blue': '#549EF2',
        'pale-black': '#4D4F62',
      },
      backgroundColor: {
        'primary-whhite': '#FAFAFA',
        'secondary-white': '#FFFFFF',
      },
      boxShadow: {
        'card': '0px 15px 30px -11px rgba(131, 166, 210, 0.5)',
      },
    },
  },
  plugins: [],
}

