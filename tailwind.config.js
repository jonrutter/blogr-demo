module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          light: 'hsl(13, 100%, 72%)',
          hover: 'hsl(355, 100%, 74%)',
          DEFAULT: 'hsl(356, 100%, 66%)',
          dark: 'hsl(353, 100%, 62%)',
          darkest: '#E6001B',
        },
        'dark-blue': {
          DEFAULT: 'hsl(208, 49%, 24%)',
          desaturated: '#3F4164',
        },
        'body-text': 'hsl(207, 13%, 34%)',
        footer: {
          bg: 'hsl(240, 10%, 16%)',
          text: 'hsl(240, 2%, 79%)',
        },
        'blue-gradient': {
          start: '#2C2D3F',
          end: '#3F4164',
        },
      },
      fontFamily: {
        sans: ['Overpass', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
        overpass: ['Overpass', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern':
          "url('images/bg-pattern-intro.svg'), linear-gradient(to right, hsl(13, 100%, 72%), hsl(353, 100%, 62%))",
        'circles-pattern': "url('images/bg-pattern-circles.svg')",
      },
      backgroundPosition: {
        'center-half': 'center -10rem',
        'left-10-top-20': '-10rem -20rem',
      },
      backgroundSize: {
        'size-125': '125%',
        'size-80': '80%',
        'size-50': '50%',
      },
      borderRadius: {
        xl: '100px',
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ['hover'],
      translate: ['group-hover', 'group-focus'],
    },
  },
  plugins: [],
};
