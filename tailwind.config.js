/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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

