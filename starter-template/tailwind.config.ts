import { addScaleCorrector } from "framer-motion";
import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";
import { serialize } from "v8";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      fontFamily:{
        sans: 'var(--font-sans)',
        serif: 'var(--font-serif)',
      },
      animation: {
        'ping-large': "ping-large 1s ease-in-out infinite"
      },
      keyframes: {
        'ping-large': {
          '75%, 100%': {
            transform: 'scale(3)',
            opacity: '0',
          }
        }
      }
    },
  },
  plugins: [],
};
export default config;
