
  export type Colors = keyof typeof Tokens.colors
  export type FontSize = keyof typeof Tokens.fontSizes
  export type Shadows = keyof typeof Tokens.boxShadows

  export type Token = Colors | FontSize | Shadows

  export const Tokens = {
  colors: {
    'havelock-blue': {
      '50': '#deebfa',
      '100': '#bfd8f5',
      '200': '#a0c5f0',
      '300': '#81b2eb',
      '400': '#69a3e7',
      '500': '#4a90e2',
      '600': '#2b7ddd',
      '700': '#1c5eac',
      '800': '#174d8e',
      '900': '#123d6f',
      base: '#4a90e2',
    },
    anzac: {
      '50': '#faf3de',
      '100': '#f5e9bf',
      '200': '#f0dea0',
      '300': '#ebd381',
      '400': '#e7cb69',
      '500': '#e2c04a',
      '600': '#ddb52b',
      '700': '#ac8c1c',
      '800': '#8e7317',
      '900': '#6f5a12',
      base: '#e2c04a',
    },
    mantis: {
      '50': '#e8fade',
      '100': '#d2f5bf',
      '200': '#bdf0a0',
      '300': '#a8eb81',
      '400': '#96e769',
      '500': '#81e24a',
      '600': '#6cdd2b',
      '700': '#50ac1c',
      '800': '#428e17',
      '900': '#336f12',
      base: '#81e24a',
    },
    'fuchsia-pink': {
      '50': '#f6defa',
      '100': '#eebff5',
      '200': '#e5a0f0',
      '300': '#dd81eb',
      '400': '#d669e7',
      '500': '#ce4ae2',
      '600': '#c62bdd',
      '700': '#991cac',
      '800': '#7e178e',
      '900': '#63126f',
      base: '#ce4ae2',
    },
  },
  fontSizes: {
    sm: '1rem',
    md: '1.2rem',
    lg: '1.4rem',
  },
  fontWeights: {
    light: '200',
    normal: '400',
    bold: '700',
  },
  lineHeights: {
    short: '1',
    normal: '1.5',
    tall: '2',
  },
  boxShadows: {
    sm: '1rem',
    md: '1.2rem',
    lg: '1.4rem',
  },
}
  