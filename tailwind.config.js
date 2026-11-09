/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Core palette
        midnight: '#080B12',
        charcoal: '#171D2B',
        'ice-blue': '#60A5FA',
        'royal-blue': '#2563EB',
        'off-white': '#F8FAFC',

        // Semantic navy mapping anchored to Midnight (#080B12), Charcoal (#171D2B) & Off-white (#F8FAFC)
        navy: {
          50: '#F8FAFC',    // Off-white
          100: '#e2e8f0',   // Light border
          200: '#cbd5e1',   // Slate border
          300: '#94a3b8',   // Muted slate text
          400: '#64748b',   // Body slate text
          500: '#334155',   // Medium charcoal
          600: '#1e293b',   // Dark charcoal
          700: '#171D2B',   // Charcoal core (#171D2B)
          800: '#0f1422',   // Deep charcoal
          900: '#080B12',   // Midnight core (#080B12)
          950: '#05070c',   // Deepest midnight
        },

        // Semantic gold/accent mapping anchored to Royal Blue (#2563EB) & Ice Blue (#60A5FA)
        gold: {
          50: '#eff6ff',    // Soft ice blue tint
          100: '#dbeafe',   // Ice blue tint
          200: '#bfdbfe',   // Light ice blue
          300: '#93c5fd',   // Bright ice blue
          400: '#60A5FA',   // Ice blue core (#60A5FA)
          500: '#3b82f6',   // Vibrant blue
          600: '#2563EB',   // Royal blue core (#2563EB)
          700: '#1d4ed8',   // Royal blue hover
          800: '#1e40af',   // Deep royal blue
          900: '#1e3a8a',   // Navy blue
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
