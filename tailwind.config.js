/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blueButton: "#001F3F",
        textGray: "#A9A9A9",
        borderColor: "#00B8D940",
        borderInnerGray: "#C7C7C7",
      },
      fontFamily: {
        customMonserrat: ["play", "sans-serif"],
      },
    },
  },
  plugins: [],
};
