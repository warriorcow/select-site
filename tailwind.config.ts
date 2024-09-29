import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  theme: {
    fontFamily: {
      sans: ['Geologica', 'sans-serif']
    },
    fontSize: {
      xxs: ['8px', '10px'],
      xs: ['10px', '14px'],
      sm: ['12px', '16px'],
      md: ['14px', '18px'],
      lg: ['16px', '20px'],
      xl: ['18px', '20px'],
      '2xl': ['20px', '20px'],
      '3xl': ['22px', '24px'],
      '4xl': ['24px', '38px'],
      '5xl': ['25px', '28px'],
      '6xl': ['32px', '38px'],
      '7xl': ['40px', '45px'],
      '8xl': ['60px', '70px'],
      '9xl': ['100px', '125px'],
      '10xl': ['120px', '125px']
    },
    colors: {
      primary: '#FFF',
      secondary: '#000',
      accent: '#909090',
      alternate: '#EAEAEA'
    },
    screens: {
      'mobile': '600px',
      'tablet': '1201px'
    },
    extend: {
    }
  }
};
