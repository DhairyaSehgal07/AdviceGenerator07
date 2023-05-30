/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     
    extend: {
        colors: {
        'Light_Cyan': 'var(--Light_Cyan)',
        'Neon_Green': 'var(--Neon_Green)',
        'Grayish_Blue': 'var(--Grayish_Blue)',
        'Dark_Grayish_Blue': 'var(--Dark_Grayish_Blue)',
        'Dark_Blue': 'var(--Dark_Blue)',

      },
    },
  },
  plugins: [],
}