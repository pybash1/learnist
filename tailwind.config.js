/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#272c36",
        "accent": "#6a97c7",
        "neutral": "#344047"
      }
    },
  },
  plugins: [],
}
