import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sanity/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // MY CLUB Design Tokens
      colors: {
        noir: '#18140F',
        espresso: '#2A2218',
        charbon: '#3A3028',
        cendre: '#8A8680',
        brume: '#C4C0BA',
        lin: '#DDD9D4',
        lin2: '#E6E2DC',
        ivoire: '#F0EDE8',
        blanc: '#F7F5F2',
        whisper: '#B0ACA6',
        // Micro tones
        fumee: '#A89E94',
        parchemin: '#E8DFD0',
        ombre: '#CFC4B0',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Editorial scale
        'display-xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'display-md': ['2.5rem', { lineHeight: '1.15' }],
        'display-sm': ['1.75rem', { lineHeight: '1.2' }],
        'body-lg': ['1rem', { lineHeight: '1.8', fontWeight: '300' }],
        'body-sm': ['0.875rem', { lineHeight: '1.75', fontWeight: '300' }],
        'label': ['0.6875rem', { lineHeight: '1', letterSpacing: '0.14em' }],
        'whisper': ['0.5625rem', { lineHeight: '1', letterSpacing: '0.28em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        'editorial': '1320px',
        'prose-narrow': '520px',
        'prose-wide': '760px',
      },
      borderWidth: {
        'hairline': '0.5px',
      },
      animation: {
        'fade-in': 'fadeIn 2.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 2.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'lace-breath': 'laceBreath 8s ease-in-out infinite',
        'sheer-drift': 'sheerDrift 12s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        laceBreath: {
          '0%, 100%': { opacity: '0.85' },
          '50%': { opacity: '1' },
        },
        sheerDrift: {
          '0%, 100%': { transform: 'translateX(0) translateY(0)' },
          '50%': { transform: 'translateX(3px) translateY(-2px)' },
        },
      },
      transitionTimingFunction: {
        'editorial': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      },
    },
  },
  plugins: [],
}

export default config
