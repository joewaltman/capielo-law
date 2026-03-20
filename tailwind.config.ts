import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary - Deep warm charcoal
        primary: {
          DEFAULT: '#1C1917',
          50: '#F5F5F4',
          100: '#E7E5E4',
          200: '#D6D3D1',
          300: '#A8A29E',
          400: '#78716C',
          500: '#57534E',
          600: '#44403C',
          700: '#292524',
          800: '#1C1917',
          900: '#0C0A09',
        },
        // Accent - Warm gold/bronze (matching logo)
        accent: {
          DEFAULT: '#C9A96E',
          50: '#FBF8F1',
          100: '#F5EDD9',
          200: '#EBD9B3',
          300: '#DFC58D',
          400: '#C9A96E',
          500: '#B8860B',
          600: '#9A7209',
          700: '#7C5D07',
          800: '#5E4606',
          900: '#403004',
        },
        // Backgrounds - Soft cream/ivory
        cream: {
          DEFAULT: '#FAF7F2',
          50: '#FFFDF9',
          100: '#FAF7F2',
          200: '#F5F0E6',
          300: '#EDE5D6',
          400: '#E0D4C0',
          500: '#D1C2A8',
        },
        // Text - Rich dark brown-black
        text: {
          DEFAULT: '#1C1917',
          muted: '#57534E',
          light: '#78716C',
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-source-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.75rem' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#1C1917',
            a: {
              color: '#B8860B',
              '&:hover': {
                color: '#C9A96E',
              },
            },
            h1: {
              fontFamily: 'var(--font-playfair)',
              color: '#1C1917',
            },
            h2: {
              fontFamily: 'var(--font-playfair)',
              color: '#1C1917',
            },
            h3: {
              fontFamily: 'var(--font-playfair)',
              color: '#1C1917',
            },
            h4: {
              fontFamily: 'var(--font-playfair)',
              color: '#1C1917',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;
