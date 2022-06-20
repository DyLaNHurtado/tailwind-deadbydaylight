/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./public/src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'dbd-main-art':'url("../../img/dbd_keyart.jpg")',
        'killer-ghostface':'url("../../img/killer-Ghostface.png")',
        'killer-pig':'url("../../img/killer-pig.png")',
        'survivor-leon':'url("../../img/survivor-leon.png")',
        'survivor-cheryl':'url("../../img/survivor-cheryl.png")',
        
      },
      fontFamily:{
        'roboto-condensed':['Roboto Condensed', 'sans-serif']
      }
      
    },
  },
  plugins: [],
}
