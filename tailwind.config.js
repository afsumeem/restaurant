/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "white-solid": " rgba(255, 255, 255, 1)",
        "orange-tab": "rgba(181, 43, 29, 1)",
        "dark-charcoal": "rgba(51, 51, 51, 1)",
        "about-title": "rgba(24, 24, 24, 1)",
      },
    },
  },
  plugins: [],
};
