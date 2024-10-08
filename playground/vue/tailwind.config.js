import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        lpurple: {
          50: "#f6f3f6",
          100: "#f5eef5",
          200: "#f4dff5",
          300: "#f1d1f3",
          400: "#edc2ee",
          500: "#e6b0e8",
          600: "#dc99df",
          700: "#d079d5",
          800: "#b81dc3",
          900: "#a708b1",
          950: "#9900a3",
          999: "#5d0064",
        },
        lgray: {
          50: "#f1f3fa",
          100: "#eceffd",
          200: "#e0e6fa",
          300: "#d6ddf8",
          400: "#ccd5f6",
          500: "#c2cdf5",
          600: "#b4c0f2",
          700: "#9cabef",
          800: "#6f7dbf",
          900: "#6572b2",
          950: "#4b5589",
          999: "#171c3c",
        },
        dpurple: {
          50: "#1c131c",
          100: "#231224",
          200: "#39153b",
          300: "#4b124f",
          400: "#57195c",
          500: "#65266a",
          600: "#7c3581",
          700: "#9f45a5",
          800: "#b81dc3",
          900: "#a900b4",
          950: "#f885ff",
          999: "#fad0fb",
        },
        dgray: {
          50: "#0d1232",
          100: "#141a39",
          200: "#19204c",
          300: "#1d2557",
          400: "#232c5f",
          500: "#2b3568",
          600: "#384378",
          700: "#505d94",
          800: "#5d6aa2",
          900: "#6a78b1",
          950: "#a0b0ed",
          999: "#e4edff",
        },
      },
    },
  },
  plugins: [],
};
