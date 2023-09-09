/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        display:['Oswald','sans-serif'],
        secondary:['Montserrat','sans-serif']
      },
      colors:{
        primary:"#0E2758",
        secondary:"#6440A1",
        tertiary:"#6A8BF5"
      }
    },
  },
  plugins: [],
}

