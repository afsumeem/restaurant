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
        "secondary-color": "rgba(10, 20, 37, 1)",
        "footer-text": " rgba(247, 248, 249, 1)",
        "footer-social-border": "rgba(229, 231, 235, 1)",
      },
      boxShadow: {
        "custom-light": "0px 7px 16px 0px rgba(0, 0, 0, 0.1)",
        "navigation-arrow": "0px 0px 13.64px 0px rgba(0, 0, 0, 0.1);",
      },
    },
  },
  plugins: [],
};
