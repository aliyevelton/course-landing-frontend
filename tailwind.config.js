/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'text-[#FDD835]',
    'text-[#F59E0B]',
    'bg-[#FDD835]',
  ],
  theme: {
    extend: {
      colors: {
        // Logo blue 
        brand: {
          50: '#E8F0FA',
          100: '#C5D9F2',
          200: '#9EC0E9',
          300: '#6FA0DC',
          400: '#4A85CE',
          500: '#2E6BA8',
          600: '#285D96',
          700: '#1F4A78',
          800: '#18385B',
          900: '#12283F',
          950: '#0B1929',
        },
        // Logo yellow (named brandYellow to avoid Tailwind’s built-in accent utilities)
        brandYellow: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FDD835',
          500: '#F59E0B',
          600: '#D97706',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
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
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
  plugins: [],
}
