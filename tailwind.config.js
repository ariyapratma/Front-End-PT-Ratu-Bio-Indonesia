/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'card-xl': '1200px',
      },
      height: {
        'card-lg': '560px', 
      },
      fontFamily: {
        'lexend': ['Lexend', 'sans-serif'],
      },
      fontSize: {
        'xxs': '0.6rem',  // 10px
      },
      colors: {
        'custom-yellow': '#FFFA00',  // Menambahkan warna kustom
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

