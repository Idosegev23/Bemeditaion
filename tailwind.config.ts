import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#A8DADC',     // תכלת רך
        secondary: '#E0C097',   // חום בהיר  
        background: '#F5F3EF',  // גוון חול
        'text-dark': '#333333', // אפור כהה
        'text-light': '#666666', // אפור בהיר
      },
      fontFamily: {
        sans: ['Heebo', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': '2.5rem',
        'h1': '2rem',
        'h2': '1.5rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config 