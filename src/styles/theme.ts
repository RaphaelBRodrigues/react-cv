/**
 * App theme
 * @type {object}
 */

const theme = {
  colors: {
    black: '#212226',
    white: '#F0F0F2',
    darkBlue: '#1E3E59',
    gray: '#435C73',
    lightGray: '#7790A6',
    alpha: {
      oneQuarter: {
        black: 'rgba(32, 34, 38,0.25)',
        white: 'rgba(239, 240, 242,0.25)',
        darkBlue: 'rgba(30, 61, 89,0.25)',
        gray: 'rgba(66, 92, 114,0.25)',
        lightGray: 'rgba(119, 144, 165,0.25)',
      },
      twoQuarters: {
        black: 'rgba(32, 34, 38, 0.5)',
        white: 'rgba(239, 240, 242, 0.5)',
        darkBlue: 'rgba(30, 61, 89, 0.5)',
        gray: 'rgba(66, 92, 114, 0.5)',
        lightGray: 'rgba(119, 144, 165, 0.5)',
      },
      threeQuarters: {
        black: 'rgba(32, 34, 38,0.75)',
        white: 'rgba(239, 240, 242,0.75)',
        darkBlue: 'rgba(30, 61, 89,0.75)',
        gray: 'rgba(66, 92, 114,0.75)',
        lightGray: 'rgba(119, 144, 165,0.75)',
      },
    },
  },
  font: {
    family: {
      title: 'Raleway',
      secondary: 'Piazzolla',
      terciary: 'Jura',
      quartenary: '',
    },
    weight: {
      light: 300,
      normal: 500,
      bold: 700,
      extrabold: 900,
    },
    size: {
      desktop: {
        title: '4em',
        subtitle: '15rem',
        text: '9rem',
      },
      mobile: {
        title: '20rem',
        subtitle: '15rem',
        text: '9rem',
      },
    },
  },
};

export default theme;
