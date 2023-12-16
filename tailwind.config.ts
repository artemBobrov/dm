import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        'display': ['DM-Type', 'sans-serif'],
      },
      colors: {
         'black-100' : '#2C364B',

         'primary-blue' : '#0A2166',
         'primary-blue-light' : '#0B3E84',
         'primary-blue-cta' : '#2264E7',
      },
    },
  },
  plugins: [],
}
export default config
