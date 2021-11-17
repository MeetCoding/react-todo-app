module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'shippori': ['Shippori Antique', 'sans-serif'],
      },
      colors: {
        'dark-purple': '#3E3673',
        'purple': '#ABA0F2',
        'yellow': '#F2E527',
        'white': '#F2F2F0',
        'dark-yellow': '#F2C230',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
