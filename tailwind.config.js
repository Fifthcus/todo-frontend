/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "xs": {"max": "639px"},
      },
      colors: {
        "pastel-purple": "#907AD6",
      }
    },
  },
  plugins: [],
}