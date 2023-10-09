/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        grayish: "hsl(270, 20%, 96%)",
        "desatured-violet": "hsl(271, 36%, 24%)",
        "grayish-violet": "hsl(270, 7%, 64%)",
        violet: "hsl(264, 100%, 61%)",
        magenta: "hsl(293, 100%, 63%)",
        "dark-violet": "hsl(271, 15%, 43%)",
      },
    },
  },
  plugins: [],
};
