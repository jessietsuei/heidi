/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'heidi': {
          'text': '#280310',
          'accent': '#194B22',
          'accent-hover': '#2B6433',
          'surface': '#F7ECE3',
          'sunlight': '#FBF583',
          'background': '#F9F4F2',
          'nav': '#FFFFFF',
          'highlight': '#FBF583',
        }
      },
    },
  },
  plugins: [],
}