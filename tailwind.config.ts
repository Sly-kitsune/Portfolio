import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        burgundy: '#800020',
        'midnight-black': '#1C1C1C',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        lexend: ['Lexend Deca', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
