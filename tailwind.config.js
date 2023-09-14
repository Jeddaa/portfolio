/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
      }
    },
    screens: {
      fx: { max: '394px' },
      fxx: { min: '200px' },
      sm: { min: '200px', max: '415px' },
      sx: { min: '416px', max: '570px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }
      md: { min: '571px', max: '625px' },
      mdx: { min: '626px', max: '767px' },
      sk: { min: '592px', max: '767px' },
      lg: { min: '768px' },
      lgm: { min: '850px' }
    }
  },
  plugins: []
};

