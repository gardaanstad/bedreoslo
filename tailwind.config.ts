import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';
import plugin from 'tailwindcss/plugin';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        serif: ['var(--font-playfair-display)', ...fontFamily.serif],
        mono: ['var(--font-geist-mono)', ...fontFamily.mono],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      animation: {
        'pulse-subtle': 'pulse-subtle 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
          },
        },
      },
    },
  },
  plugins: [
    typography,
    plugin(function ({ addBase }) {
      addBase({
        '.hover\\:underline, .group-hover\\:underline': {
          textDecorationThickness: '1px',
          textUnderlineOffset: '2px',
          '@media (min-width: 640px)': {
            '&.text-xl, &.text-2xl, &.text-3xl, &.text-4xl, &.text-5xl, &.text-6xl, &.text-7xl, &.text-8xl':
              {
                textDecorationThickness: '2px',
              },
          },
        },
      });
    }),
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
} satisfies Config;