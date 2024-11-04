/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'home1': '#776DF2',
        'prim':'#fff',
        'workflow1':'#6157FF',
        'workflow2': '#DC9800',
        'workflow3': '#08DDB9',
        'workflow1_bg': '#E8E4FF',
        'workflow2_bg': '#FFF1CC',
        'workflow3_bg':'#CDF3EC',


      }
    },
  },
  plugins: [],
}