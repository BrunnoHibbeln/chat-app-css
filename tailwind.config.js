/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        gray: "hsl(206, 6%, 79%)",
        grayish: "hsl(270, 20%, 96%)",
        "light-violet": "hsl(272, 46%, 93%)",
        "dark-violet": "hsl(271, 15%, 43%)",
        "moderate-violet": "hsl(276, 55%, 52%)",
        "desatured-violet": "hsl(271, 36%, 24%)",
        "grayish-violet": "hsl(270, 7%, 64%)",
        "pale-violet": "hsl(276, 100%, 81%)",
        violet: "hsl(264, 100%, 61%)",
        magenta: "hsl(293, 100%, 63%)",
        "light-magenta": "hsl(289, 100%, 72%)",
      },
    },
  },
  plugins: [],
};
