import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        lato: ['Lato', 'sans-serif'],
      },
      colors: {
        dark: '#110A0A',
        darker: '#0a0505',
        accent: '#D4AF37',
        accent2: '#8A334B',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass': 'rgba(255, 255, 255, 0.1)',
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(10px)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { 'box-shadow': '0 0 20px rgba(0, 217, 255, 0.5)' },
          '50%': { 'box-shadow': '0 0 40px rgba(0, 217, 255, 1)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
