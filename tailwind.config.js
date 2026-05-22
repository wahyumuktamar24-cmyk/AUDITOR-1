/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",    // Slate 900
        secondary: "#1e3a8a",  // Blue 800
        accent: "#d97706",     // Amber 600
      }
    },
  },
  plugins: [],
}