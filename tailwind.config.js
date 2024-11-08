/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customViolet: '#cdb4db',
        customExclusive: '#58C9d4', //head here kung gusto ka magbuhat custom colors na dili available sa predefined class sa tailwind hehe
      }
    },
  },
  plugins: [],
}

