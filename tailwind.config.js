/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
 
    container:{
      center:true,
      padding:'2rem'
    },
    extend: {
      colors: {
        'primary': {
          '50': '#effaff',
          '100': '#def3ff',
          '200': '#b6eaff',
          '300': '#75dcff',
          '400': '#2cccff',
          '500': '#00b4f5', // default
          '600': '#0092d4',
          '700': '#0074ab',
          '800': '#00618d',
          '900': '#065174',
          '950': '#04334d',
        },
        'secondary': {
          '50': '#fffbeb',
          '100': '#fff4c6',
          '200': '#ffe688',
          '300': '#ffd34a',
          '400': '#ffbf20',
          '500': '#f99d07', // default
          '600': '#dd7502',
          '700': '#b75206',
          '800': '#943e0c',
          '900': '#7a340d',
          '950': '#461902',
        },
        'gray': {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d', // default
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#262626',
        },
      }
    },
  },
  plugins: [],
}

