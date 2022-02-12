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
    extend: {
      colors: {
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
      screens: {
        'ssm': '350px',
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
};
