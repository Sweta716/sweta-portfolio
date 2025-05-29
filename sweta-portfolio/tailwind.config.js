/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: "#FF4EC3",
          yellow: "#FFE66D",
          turquoise: "#4FD1C5",
          softwhite: "#FAF9F6", // ✅ This is what enables `bg-brand-softwhite`
        },
      },
      fontFamily: {
        sans: ['"Poppins"', 'sans-serif'],
        fancy: ['"Dancing Script"', 'cursive'],
      },
    },
  },
  plugins: [],
};
