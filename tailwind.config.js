/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-mode="dark"]'],
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '850px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1560px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      maxWidth: {
        maxScreen: '1300px',
      },
      padding: {
        paddingXforMob: '2rem',
      },
      keyframes: {
        opacityanim: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        wiggle: {
          '0%, 100%': {
            transform: 'scale(1)',
            filter: 'hue-rotate(0)',
          },
          '30%, 90%': {
            filter: 'hue-rotate(20deg)',
          },
          '50%': {
            transform: 'scale(1.5)',
            filter: 'hue-rotate(45deg)',
          },
        },
        reveal: {
          '0%': {
            transform: 'translateX(8px)',
          },
          '100%': {
            transform: 'translateX(-2px)',
          },
        },
        topdown: {
          '0%': {
            transform: 'translateY(0)',
          },
          '100%': {
            transform: 'translateY(-5px)',
          },
        },
        growReveal: {
          '0%': {
            filter: 'blur(5px)',
            opacity: '0',
            transform: 'scale(0) translateY(-20px)',
          },
          '50%': {
            filter: 'blur(0px)',
            opacity: '1',
            transform: 'scale(1) translateY(0)',
          },
          '100%': {
            filter: 'blur(5px)',
            opacity: '0',
            transform: 'scale(5) translateY(-40px)',
          },
        },
      },
      animation: {
        wiggle: 'wiggle 15s ease-in-out infinite',
        reveal: 'reveal 1.5s ease-in-out infinite alternate',
        topdown: 'topdown 1.5s ease-in-out infinite alternate',
        growreveal: 'growReveal 2.15s ease-in-out forwards',
        opacityanim: 'opacityanim 1s ease-in-out',
      },
    },
    colors: {
      brand: '#6674CC',
      brand100: '#6452FE',
      brand300: '#4E5DC0',
      brColor: '#7985D2',
      section_bg: '#F7F8FC',
      yellow500: '#FF9E2A',
      headText: '#011229',
      subText: '#777C85',
      HeroSubText: '#E1E2E4',
      textpara: '#4A4F5C',
      purple100: '#F1E4FF',
      purple500: '#b578ff',
      nevyBlue: '#042A57',
      grey50: '#EDEDED',
      grey80: '#C2C2C2',
      grey100: '#A6A6A6',
      white100: '#EBEFFF',
      grassGreen: '#1DD1A1',
      textHead: '#363A45',
      red500: '#FF5B5B',
    },
    fontFamily: {
      rubik: ['Rubik', 'sans-serif'],
    },
  },
};
