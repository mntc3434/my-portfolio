module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blue: {
          500: '#3b82f6',
        },
      },
    },
  },
  plugins: [],
}