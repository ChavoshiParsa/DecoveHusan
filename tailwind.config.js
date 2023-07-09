/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        spring: {
          green: "rgba(43, 238, 132, 1)",
        },
        blue: {
          zodiac: "rgba(3, 32, 104, 1)",
        },
        dusty: {
          gray: "rgba(152, 152, 152, 1)",
        },
        pomegranate: "rgba(238, 43, 43, 1)",
      },
      fontFamily: {
        yekan: ["Yekan Bakh"],
      },
      blur: {
        3: "3px",
        2: "2px",
        1: "1px",
      },
    },
  },
  plugins: [],
};
