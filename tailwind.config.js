/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Red Hat Display"', 'sans-serif'],
        text: ['"Red Hat Text"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
