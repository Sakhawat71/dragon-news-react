/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'dark1':'#403F3F',
      'dark2':'#444444',
      'dark3':'#706F6F',
      'dark4': '#9F9F9F'
    },
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        oldEng: "'UnifrakturCook', cursive"
      }
    },
  },
  plugins: [require("daisyui")],
}

