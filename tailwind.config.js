/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkPurple: '#1f1726',
        brightYellow: '#ffce10',
        carbonBlack: '#131211',
        darkGray: '#1c1c1c',
        darkBlue: '#011524',
        lightBlue: '#023b6f',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

