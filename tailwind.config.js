const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        aboutHeading: ['"Playfair Display"', 'serif'],
        aboutBody: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
});
