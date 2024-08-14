/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      anton: ["Anton", "sans-serif"],
    },
    backgroundColor: {
      sliderGreen: "#72B778",
      sliderYellow: "#E5BE67",
      white: "#FFFFFF",
      productGrey: "#F6F6F6",
      descGreen: "rgba(171, 187, 112, 0.2)",
      couponOrange: "#E5BE67",
    },
    extend: {
      colors: {
        txtColor: "#151414",
        greytxt: "#827070",
      },
      backgroundImage: {
        mens: "url('/Collections/mens.svg')",
        womens: "url('/Collections/womens.svg')",
        kids: "url('/Collections/kids.svg')",
      },
    },
  },
  plugins: [],
};
