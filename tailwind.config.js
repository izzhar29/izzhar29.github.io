/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      cebter: true,
      padding: '16px'
    },
    extend: {
      colors:{
        oren :'#FD7014',
        hitam:'#222831',
        abu:'#393E46',
        oren1:'#FD873A',
        putih:'#EEEEEE',
        putih1:'#E1E1E1'
      },
      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}

