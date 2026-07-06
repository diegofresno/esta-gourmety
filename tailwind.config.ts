import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#07334d',
        teal: {
          DEFAULT: '#006b63',
          dark: '#005a53',
          light: 'rgba(0,107,99,0.08)',
        },
        muted: '#6b7280',
        border: '#e5e7eb',
        bg1: '#f9fafb',
        bg2: '#f3f4f6',
      },
      fontFamily: {
        heading: ['"Martel Sans"', 'Georgia', 'serif'],
        body: ['"Nunito Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': '1.2rem',
        'sm': '1.35rem',
        'base': '1.55rem',
        'lg': '1.7rem',
        'xl': '1.9rem',
        '2xl': '2.2rem',
        '3xl': '2.8rem',
        '4xl': '3.4rem',
        '5xl': '4.2rem',
      },
      maxWidth: {
        content: '1160px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
