const withMT = require("@material-tailwind/react/utils/withMT");

 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: '#1FABF4',
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

// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     colors: {
//       blue: '#1FABF4',
//       lightBlue: '#E3F5FE',
//       orange: '#FB8640',
//       lightOrange: '#FFEADE',
//       black:"#222222",
//       transparent: 'transparent',
//       current: 'currentColor',
//       'white': '#ffffff',
//       'purple': '#3f3cbb',
//       'midnight': '#121063',
//       'metal': '#565584',
//       'tahiti': '#3ab7bf',
//       'silver': '#ecebff',
//       'bubble-gum': '#ff77e9',
//       'bermuda': '#78dcca',
//     },
//     extend: {},
//   },
//   plugins: [],
// }