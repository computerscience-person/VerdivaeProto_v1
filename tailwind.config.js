/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        kiwi: "#88ea63",
        teal: "#07897d",
        topaz: "#0abfac",
        black: "#000000"
      },
      fontFamily: {
        base: ["Inter", "ui-sans-serif", "sans-serif"]
      }
    },
  },
  plugins: [],
}

