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
    ],
    options: {
      safelist: [
        'bg-eol',
        'border-eolAlt',
        'bg-opinion',

        'bg-progress',

        'bg-concepts',

        'bg-released',
        'border-releasedAlt',
        'bg-life',

        'bg-active',
        'border-activeAlt',
        'bg-education'
      ],
      keyframes: true,
      variables: true,

    }
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        light: {
          css: {
            code: { color: colors.black },
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
          }
        },
        dark: {
          css: {
            code: { color: colors.white },
            color: theme('colors.white'),
            'h1,h2,h3,h4': { color: theme('colors.white') },
            a: {
              textDecoration: 'none',
              borderBottom: '1px solid',
              borderColor: theme('colors.white'),
              transition: 'border-color 250ms, color 250ms',
              color: 'inherit',
              '&:hover': {
                color: theme('colors.lightPurple'),
                borderColor: theme('colors.lightPurple')
              }
            },
            ul: { li: { '&:before': { backgroundColor: theme('colors.gray.600') } } },
            'h2,h3,h4': {
              color: theme('colors.gray.50'),
              'scroll-margin-top': spacing[32]
            }
          }
        },
        default: {
          css: {
            code: {
              fontFamily: 'monospace'
            },
            'code::before': { content: '' },
            'code::after': { content: '' }
          }
        }
      }),
      colors: {
        // Brand colours™
        lightPurple: 'var(--light-purple)',
        darkPurple: 'var(--dark-purple)',
        lightAlt: 'var(--light-alt)',
        darkAlt: 'var(--dark-alt)',

        // Tag colours
        eol: '#f69e7b',
        opinion: '#f69e7b',

        progress: '#71717a',
        concepts: '#f090ce',

        released: '#7adf82',
        life: '#7adf82',

        active: '#8096f0',
        education: '#8096f0',

        // Timeline/border colours
        eolAlt: '#f97316',
        pinkAlt: '#ffabe1',
        releasedAlt: '#10b981',
        activeAlt: '#3b82f6',
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
