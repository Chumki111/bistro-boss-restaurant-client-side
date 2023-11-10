/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fontIntel : "'Inter', sans-serif"
      }
    },
  },
  plugins: [require("daisyui")],
 
}

