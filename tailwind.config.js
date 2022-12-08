/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lightPurple:'#6440A1',
        lightBlue:'#6A8BF5',
        rose:'#E2B4FF',
        darkish:'#0E2758'
      },
      screens:{
        sm:'480px',
        md:'768px',
        lg:'976px',
        xl:'1440px'
      },
      fontFamily: {
        'display': ['Oswald'],
      }
      
    },
  },
  plugins: [],
}
