const withMT = require("@material-tailwind/react/utils/withMT");

 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: '#1573FF',
      lightBlue: '#E3F5FE',
      orange: '#FB8640',
      lightOrange: '#FFEADE',
      white: '#ffffff',
      black:"#222222",
      transparent: 'transparent',
      current: 'currentColor',
    },
    extend: {},
  },
  plugins: [],
});