const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */

module.exports = {
  important: '#__next',

  content: [
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "transparent-1": 'rgba(0, 0, 0, 0.1)',
        "transparent-2": 'rgba(0, 0, 0, 0.2)',
        "transparent-3": 'rgba(0, 0, 0, 0.3)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('current', '&.active');
      addVariant('children', '& > *');
    }),

  ],
}
