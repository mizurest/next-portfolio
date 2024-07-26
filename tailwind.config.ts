import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'media',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      },
      colors: {
        'white': '#ffffff',
        'darkgray': '#202020',
      },
      fontSize: {
        'xxs': ['0.6rem;', '0.875rem'],
        'xs': ['0.75rem;', '1.5rem'],
        'sm': ['0.875rem;', '1.625rem'],
        'lg': ['1.125rem;', '2rem'],
        'xl': ['1.25rem;', '2rem'],
        '2xl': ['1.5rem;', '2.25rem'],
        '3xl': ['1.75rem;', '2.5rem'],
        '4xl': ['2rem;', '2.75rem'],
        '5xl': ['3rem', '1.5'],
        '6xl': ['3.75rem', '1.5']
      },
    },
    
    
  },

  plugins: [],
};
export default config;
