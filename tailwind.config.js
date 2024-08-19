// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'class' if you prefer
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        primary: "#fa9e1e",
        secondary: "#ed8900",
      },
      container: {
       center: true,
       padding:{
        DEFAULT: "1rem",
         sm: "3rem",
        //  lg: "4rem",
        //  xl: "5rem",
        //  "2xl": "6rem",
       }
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],};
