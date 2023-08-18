/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blue-grey': '#243c5a',
        'light-grey': '#dce7e8',
        'turquoise-blue': '#00c2cb',
        'dreamy-purple': '#A8A9F1'
      }
    },
  },
  plugins: [],
}

