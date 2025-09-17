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
        primary: '#7C3AED',
        secondary: '#06B6D4',
        accent: '#F97316',
        ink: '#0B1021',
        soft: '#EEF2FF'
      },
      backgroundImage: {
        'radial': 'radial-gradient(ellipse at top left, rgba(59, 96, 218, 0.68), transparent 50%), radial-gradient(ellipse at bottom right, rgba(12, 62, 71, 0.25), transparent 50%)'
      },
      boxShadow: {
        glow: '0 0 0 3px rgba(105, 226, 156, 0.35), 0 0 40px -10px rgba(3, 32, 37, 0.45)'
      },
      zIndex: {
        '-40': '-40',
        '-50': '-50',
      },
    },
  },
  plugins: [],
}

export default config
