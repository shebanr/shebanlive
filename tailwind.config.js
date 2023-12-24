/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        'incon': ['Inconsolata', 'sans-serif'],
        'sg': ['Space Grotesk', 'serif'],
        'syne': ['Syne', 'monospace'],
      },
    },
  },
  plugins: [],
}

