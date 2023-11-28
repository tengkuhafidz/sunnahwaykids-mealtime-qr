/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        mealtime: {
          primary: "#88A272",
          secondary: "#ffd236",
          bg: "#fff5e8",
          text: "#436453",
          accent: "#ffd2d2"
        }
      },
    }
  },
  plugins: [],
}
