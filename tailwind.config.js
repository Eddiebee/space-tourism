/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#0B0D17",
        primary: "#ffffff",
        secondary: "#D0D6F9",
        selection: "#383B4B",
      },
      fontFamily: {
        bellefair: ["Bellefair", "serif"],
        barlow: ["Barlow", "sans-serif"],
        "barlow-condensed": ["Barlow Condensed", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 80s linear infinite",
      },
    },
  },
  plugins: [],
};
