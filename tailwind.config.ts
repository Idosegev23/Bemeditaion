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
        // פלטת צבעים מינימליסטית
        'primary-calm': '#A8DADC',
        'natural-brown': '#E0C097',
        'text-dark': '#1a1a1a',
        'text-highlighted': '#8B5A3C',
        'white-panoramic': '#FFFFFF',
        'soft-green': '#F7F9F8',
        'background': '#FAFAFA',
        'border-light': '#E5E7EB',
        
        // aliases
        primary: '#A8DADC',
        secondary: '#8B5A3C',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 8vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        'h1': ['clamp(1.875rem, 5vw, 2.5rem)', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'h2': ['clamp(1.5rem, 4vw, 2rem)', { lineHeight: '1.3' }],
        'body-large': ['1.125rem', { lineHeight: '1.7' }],
      },
      spacing: {
        'section': '5rem',
        'container': '2rem',
      },
      animation: {
        'fade-in': 'fadeInUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      boxShadow: {
        'minimal': '0 8px 32px rgba(0, 0, 0, 0.04)',
        'hover': '0 8px 25px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}
export default config 