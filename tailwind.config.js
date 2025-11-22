/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f5ff',
          100: '#edeafe',
          200: '#dcd3fd',
          300: '#c3aaf9',
          400: '#a67cf3',
          500: '#8b5be7',
          600: '#6d3fce',
          700: '#5632a5',
          800: '#462d81',
          900: '#3b2c66',
        },
      },
    },
  },
  plugins: [],
};
