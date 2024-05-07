/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        blue: "#2E5BFF",
        gray: {
          DEFAULT: "#e0e7ff",
          100: "#F5F5F7",
          200: "#F1F1F3",
          300: "#E8E8E8",
          400: "#B1B1B8",
          500: "#EBEEFC"
        },
        black: "#1D1D1F",
        green: "#00AE69",
        red: "#E94A47"
      },
    },
  },
  plugins: [],
};
