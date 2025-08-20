import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Fedrok brand colors - green theme
        primary: {
          50: '#f0fdf4',   // Very light green
          100: '#dcfce7',  // Light green
          200: '#bbf7d0',  // Soft green
          300: '#86efac',  // Medium light green
          400: '#4ade80',  // Bright green
          500: '#22c55e',  // Main green
          600: '#16a34a',  // Deep green
          700: '#15803d',  // Forest green
          800: '#166534',  // Dark green
          900: '#14532d',  // Very dark green
          950: '#052e16'   // Darkest green
        },
        accent: {
          50: '#ecfdf5',   // Mint
          100: '#d1fae5',  // Light mint
          200: '#a7f3d0',  // Soft mint
          300: '#6ee7b7',  // Medium mint
          400: '#34d399',  // Bright mint
          500: '#10b981',  // Emerald
          600: '#059669',  // Deep emerald
          700: '#047857',  // Dark emerald
          800: '#065f46',  // Very dark emerald
          900: '#064e3b'   // Darkest emerald
        },
        neutral: {
          50: '#fafafa',   // Almost white
          100: '#f5f5f5',  // Light gray
          200: '#e5e5e5',  // Gray
          300: '#d4d4d4',  // Medium gray
          400: '#a3a3a3',  // Dark gray
          500: '#737373',  // Darker gray
          600: '#525252',  // Very dark gray
          700: '#404040',  // Almost black
          800: '#262626',  // Dark
          900: '#171717',  // Very dark
          950: '#0a0a0a'   // Black
        },
        // Special Fedrok colors
        carbon: {
          light: '#22c55e',   // Green for positive carbon impact
          dark: '#15803d',    // Dark green
          neutral: '#6b7280'  // Gray for carbon neutral
        },
        mining: {
          green: '#10b981',   // Green mining
          regular: '#64748b'  // Regular mining
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace']
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }]
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      },
      borderRadius: {
        'xl2': '1rem',
        'xl3': '1.5rem'
      },
      boxShadow: {
        'green': '0 4px 14px 0 rgba(34, 197, 94, 0.15)',
        'green-lg': '0 10px 25px -3px rgba(34, 197, 94, 0.1), 0 4px 6px -2px rgba(34, 197, 94, 0.05)',
        'carbon': '0 4px 14px 0 rgba(16, 185, 129, 0.15)'
      },
      animation: {
        'pulse-green': 'pulse-green 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up': 'slide-up 0.3s ease-out'
      },
      keyframes: {
        'pulse-green': {
          '0%, 100%': {
            opacity: '1'
          },
          '50%': {
            opacity: '0.7'
          }
        },
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'slide-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'green-gradient': 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
        'carbon-gradient': 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
      }
    },
  },
  plugins: [],
}

export default config