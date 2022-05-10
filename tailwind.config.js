const defaultTheme = require('tailwindcss/defaultTheme')

// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ['./src/**/*.js'],
  // https://github.com/tailwindlabs/tailwindcss-forms
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
  variants: {
    extend: {
      backgroundColor: ['even'],
    },
  },
  theme: {
    screens: {
      'xs': '375px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        'bg-openbeta-orange': '#F15E40',
        'custom-green': '#8BB191',
        'custom-blue': '#62cae3',
        'custom-avery': '#a5d9cf',
        'custom-primary': '#F07933',
      },
    },
    fontFamily: {
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace'
      ],
      sans: [
        'ISO',
        'Open Sans',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
      ],
      display: ['Lato'],
    },
  },
};
