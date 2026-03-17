/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandRed: '#E60000',
        primary: '#E60000',
        brandYellow: '#FFD700',
        brandBlack: '#000000',
        brandOffWhite: '#F2F2F2',
        "background-light": "#f2f2f2",
        "background-dark": "#000000",
      },
      fontFamily: {
        impact: ['Impact', 'Haettenschweiler', 'Arial Narrow Bold', 'sans-serif'],
        display: ['Impact', 'Haettenschweiler', 'Arial Narrow Bold', 'sans-serif'],
        sans: ['"Public Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}

