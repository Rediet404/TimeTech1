/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        moveFromLeft: {
          '0%': { transform: 'translateX(-800px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        moveFromLeft: 'moveFromLeft 1s ease-out', // adjust duration and easing as needed
      },
      colors:{
        'home1': '#776DF2',
        'prim':'#fff',
        'workflow1':'#6157FF',
        'workflow2': '#DC9800',
        'workflow3': '#08DDB9',
        'workflow1_bg': '#E8E4FF',
        'workflow2_bg': '#FFF1CC',
        'workflow3_bg':'#CDF3EC',
        'project1':'#5D328F',        
        'project2':'#105D38',

      }
    },
  },
  plugins: [],
}