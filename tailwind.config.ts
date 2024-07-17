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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontSize: {
      'xxs': ['0.6rem;', '0.875rem'],
      'xs': ['0.75rem;', '1.5rem'],
      'sm': ['0.875rem;', '1.625rem'],
      'lg': ['1.125rem;', '2rem'],
      '5xl': ['3rem', '1.5'],
      '6xl': ['3.75rem', '1.5']
    }
  },
  plugins: [],
};
export default config;
