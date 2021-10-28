module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'xs': { 'min': '340px' },
      },
      colors: {
        primary: {
          light: '#edeef5',
          light_gray: '#d1d2dd'
        },
        secondary: {
          dark_gray: '#252324',
          green: '#70c88e',
          orange: '#f6a541'
        },
        gradiant: {
          dark: '#11998E ',
          light: '#38EF7D'
        }
      },
      fontFamily: {
        roboto: ['Roboto']
      },
      backgroundImage: {
        "body-back14": "url('/img/svgs/projectsBg.jpg')",
        "body-back15": "url('/img/svgs/background.svg')",
        "body-back16": "url('/img/svgs/squares.svg')",
        "body-back17": "url('/img/svgs/random.svg')",
        "body-back18": "url('/img/stockImages/myCode.png')",
        "body-back19": "url('/img/myImg/meback.jpg')",
        "body-back20": "url('/img/myImg/meback2.jpg')",
        "body-back21": "url('/img/myImg/meback3.jpg')",
        "body-back22": "url('/img/myImg/meback4.jpg')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
