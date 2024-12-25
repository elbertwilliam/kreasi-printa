/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      extend: {
        backgroundImage:{
          'kkp5': "url('./asset/KKP55.png')",
        },

        fontFamily:{
          anton : ["Anton", "sans-serif"],
          redhat : ["Red-Hat-Display", "sans-serif"]
        },
    },
  },
  plugins: [],
};
