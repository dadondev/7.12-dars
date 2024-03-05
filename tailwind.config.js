import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF7E1B",
        secondary: "#E4E9F2",
        grey: "#69707D",
        black: "#1D2026",
      },
    },
  },
  plugins: [daisyui],
};
