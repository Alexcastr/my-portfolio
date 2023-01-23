/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg-image": "url('/public/bg_image_alex.jpg')",
      },
    },
    fontFamily: {
      bebas: ["Bebas Neue", "cursive"],
    },
  },
  plugins: [],
};
