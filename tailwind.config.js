/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      DMSans: ["DMSans", "sans-serif"],
    },

    extend: {
      colors: {
        "light-Primary": "rgba(var(--light-bg-primary))",
        "light-Secondary": "rgba(var(--light-bg-secondary))",
        "light-white": "rgba(var(--light-bg-light-white))",
        "dark-Primary": "rgba(var(--dark-bg-primary))",
        "dark-Secondary": "rgba(var(--dark-bg-secondary))",
        "btn-primary": "rgba(var(--btn-primary))",
      },
    },
  },
  plugins: [],
};
