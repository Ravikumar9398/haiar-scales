/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily : {
        "roboto" : ["Roboto", "Sans-Serif"],
        "poppins" : ["Poppins", "Sans-Serif"]
      },
    
    screens : {
        'sm': '576px',
        // => @media (min-width: 576px) { ... }
  
        'md': '960px',
        // => @media (min-width: 960px) { ... }
  
        'lg': '1440px',
        // => @media (min-width: 1440px) { ... }
      }  
      
    },
  },
  plugins: [],
}

