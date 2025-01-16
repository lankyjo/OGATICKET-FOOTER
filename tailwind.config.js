/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          DEFAULT: 'rgb(11, 3, 45)',
          dark: 'rgb(8, 2, 36)', 
        },
        secondary: 'rgb(239 121 13)'
      },
      lineHeight:{
        tiny: '0.75'
      }
    },
  },
  plugins: [],
}