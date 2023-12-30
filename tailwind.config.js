/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "red": "hsl(1, 90%, 64%)",
        "blue": "hsl(219, 85%, 26%)",
        "white": "hsl(0, 0%, 100%)",
        "light-blue-1": "hsl(210, 60%, 98%)",
        "light-blue-2": "hsl(205, 33%, 90%)",
        "grayish-blue": "hsl(219, 14%, 63%)",
        "dark-gray-blue": "hsl(219, 12%, 42%)",
        "dark-blue": "hsl(224, 21%, 14%)"
      },
      fontFamily:{
        "Jakarta": ['"Plus Jakarta Sans", sans-serif']
      }
    }
  },
  plugins: []
}

