const { spacing, fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: [
      './pages/**/*.{ts,tsx}',
      './components/**/*.{ts,tsx}',
      './layouts/**/*.{ts,tsx}',
      './lib/**/*.{ts,tsx}'
    ]
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: [{
            color: null,
            'b,strong': {
              color: null,
              fontWeight: 700
            },
            a: {
              color: null,
              textDecoration: null
            },
            h1: { color: null },
            h2: { color: null },
            h3: { color: null },
            h4: { color: null },
            li: { color: null },
            code: {
              color: null,
              padding: theme('padding.1')
            }
          }]
        },
        light: {
          css: [{
            color: colors.black,
            a: {
              borderColor: colors.black,
              '&:hover': {
                color: theme('colors.darkPurple'),
                borderColor: theme('colors.darkPurple')
              }
            },
            hr: { borderColor: theme('colors.gray.800') },
            ul: { li: { '&:before': { backgroundColor: theme('colors.gray.600') } } },
            'h2,h3,h4': {
              color: theme('colors.gray.900'),
              'scroll-margin-top': spacing[32]
            }
          }]
        },
        dark: {
          css: [{
            code: {
              color: colors.white,
              background: theme('colors.darkAlt')
            },
            color: theme('colors.white'),
            'h1,h2,h3,h4': { color: theme('colors.white') },
            a: {
              textDecoration: 'none',
              borderBottom: '1px solid',
              borderColor: theme('colors.white'),
              transition: 'border-color 250ms, color 250ms',
              color: 'inherit'
            },
            'a:hover': {
              color: theme('colors.lightPurple'),
              borderColor: theme('colors.lightPurple')
            },
            ul: { li: { '&:before': { backgroundColor: theme('colors.gray.600') } } },
            'h2,h3,h4': {
              color: theme('colors.gray.50'),
              'scroll-margin-top': spacing[32]
            }
          }]
        }
      }),
      colors: {
        lightPurple: 'var(--light-purple)',
        darkPurple: 'var(--dark-purple)',
        lightAlt: 'var(--light-alt)',
        darkAlt: 'var(--dark-alt)'
      },
      fontFamily: {
        sans: ['Inter var experimental', 'Inter var', 'Inter', ...fontFamily.sans]
      }
    }
  },
  variants: {
    extend: {
      typography: ['dark']
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
