/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // jika kamu pakai App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // jika kamu pakai Pages Router
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
