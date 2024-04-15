import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    fontSize: {
      10: '0.625rem',
      12: '0.75rem',
      14: '0.875rem',
      16: '1rem',
      18: '1.125rem',
      20: '1.25rem',
    },
    extend: {
      colors: {
        orange: '#C67C4E',
        white: '#FFFFFF',
        whiteD: '#DDDDDD',
        whiteB: '#B7B7B7',
        input: '#989898',
        bgInput: '#313131',
        bgGradiantOne: '#131313',
        bgGradiantTwo: '#313131',
        backgroundMain: '#F9F9F9',
        textName: '#2F2D2C',
        textDescription: '#9B9B9B',
        textPrice: '#2F4B4E',
        textReviews: '#808080',
        iconFooter: '#8D8D8D',
        borderSize: '#DEDEDE',
        backgroundSize: '#FFF5EE',
        textBadges: '#303336',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
