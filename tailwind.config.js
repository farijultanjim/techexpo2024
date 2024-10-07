/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#121f45',   // Dark blue
        secondary: '#cecee7', // Background color from your global CSS
        accent: '#007dc6',    // Teal for buttons/accents
        textPrimary: '#343131', // Text color
        accentDark: '#C13700',
      },
      fontFamily: {
        archivo: ['Archivo', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

