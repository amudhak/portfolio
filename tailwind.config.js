/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'blue': '#8ecae6',
      'teal': '#2a9d8f',
      'yellow': '#e9c46a',
      'light-orange': '#f4a261',
      'orange': '#e76f51',
      'white': '#ffffff',
    },
    extend: {},
  },
  plugins: [],
}