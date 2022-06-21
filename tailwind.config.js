/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./public/src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'dbd-main-art':'url("../../img/dbd_keyart.jpg")',
        'killer-ghostface':'url("../../img/DBD_Killer_Ghostface_BG_3216bbee18.png")',
        'killer-pig':'url("../../img/DBD_Killer_Pig_Amanda_BG_d9a18de70f.png")',
        'survivor-leon':'url("../../img/DBD_Survivor_Leon_BG_db8a2e5599.png")',
        'survivor-cheryl':'url("../../img/DBD_Survivor_Cheryl_BG_e874d0a9ff.png")',
        
      },
      fontFamily:{
        'roboto-condensed':['Roboto Condensed', 'sans-serif']
      }
      
    },
  },
  plugins: [],
}
