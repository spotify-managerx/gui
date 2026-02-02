/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'spotify-green': '#1db954',
        'spotify-dark': '#191414',
        'spotify-light-green': '#1ed760',
      },
    },
  },
  plugins: [],
}
