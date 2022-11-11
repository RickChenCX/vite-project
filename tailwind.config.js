/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/components/**/*.{vue,js,ts,jsx,tsx}",
  ],
  content: [],
  theme: {
    extend: {},
    spacing: {},
    padding: {
      aa: "5px"
    }
  },
  plugins: [],
};
