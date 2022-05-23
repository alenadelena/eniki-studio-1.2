module.exports = {
  content: [
    "./dist/**/*.{html,js}",
    ],
  theme: {
    extend: {
      colors: {
        'paper': '#DCD8C7',
        'fern': '#1E2219',
      },
      fontFamily: {
        'sans': ['ui-sans-serif', '"Tenor Sans"'],
        'serif': ['ui-serif', 'Cormorant'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}