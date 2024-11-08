/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customViolet: '#cdb4db', //head here kung gusto ka magbuhat custom colors na dili available sa predefined class sa tailwind hehe
      }
    },
  },
  plugins: [],
}

