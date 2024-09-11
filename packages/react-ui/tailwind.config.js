/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: {
    enabled: import.meta.env.PROD,
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
  },
};
