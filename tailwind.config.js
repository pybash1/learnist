/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#011518",
        "accent": "#27d7f2",
        "neutral": "#032a30"
      }
    },
  },
  plugins: [],
}
