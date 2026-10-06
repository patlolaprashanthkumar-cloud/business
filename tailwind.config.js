/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f9',
          100: '#d9e2ef',
          200: '#b3c6df',
          300: '#7d9fc6',
          400: '#4a78ad',
          500: '#2d5a8f',
          600: '#1f4374',
          700: '#1a3a66',
          800: '#152e52',
          900: '#102342',
          950: '#0a1a35',
        },
        gold: {
          50: '#fdfaf3',
          100: '#f9f0db',
          200: '#f0dfa8',
          300: '#e6c96e',
          400: '#d9b34a',
          500: '#c49a2d',
          600: '#a67d22',
          700: '#83611e',
          800: '#6b4e1f',
          900: '#5b421f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in': 'slideIn 0.4s ease-out',
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
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
