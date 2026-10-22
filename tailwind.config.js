/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: {
            DEFAULT: '#C92F25',
            hover: '#B3261C',
            light: '#FDEAE9',
            dark: '#8D1E16',
          },
          saffron: {
            DEFAULT: '#F36A21',
            hover: '#DC5B16',
            light: '#FFF0E6',
          },
          gold: {
            DEFAULT: '#E9B72E',
            hover: '#D4A422',
            light: '#FCF5E3',
            dark: '#B08819',
          },
          cream: {
            DEFAULT: '#FFF9E9',
            50: '#FFFCF5',
            100: '#FFF9E9',
            200: '#FBF2D5',
            300: '#F4E5B8',
          },
          brown: {
            DEFAULT: '#542A18',
            deep: '#3D1C0E',
            hover: '#683620',
            light: '#F8F1ED',
          },
          green: {
            DEFAULT: '#477D3C',
            hover: '#3B6832',
            light: '#EDF5EB',
          }
        }
      },
      fontFamily: {
        serif: ['Marcellus', 'Cinzel', 'Georgia', 'serif'],
        cinzel: ['Cinzel', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(233, 183, 46, 0.35)',
        'red-glow': '0 0 25px -5px rgba(201, 47, 37, 0.25)',
        'subtle': '0 4px 20px -2px rgba(84, 42, 24, 0.06)',
        'card': '0 10px 30px -4px rgba(84, 42, 24, 0.08), 0 4px 6px -2px rgba(84, 42, 24, 0.04)',
        'elevated': '0 20px 40px -8px rgba(84, 42, 24, 0.12), 0 8px 16px -4px rgba(84, 42, 24, 0.06)',
      },
      backgroundImage: {
        'radial-gold': 'radial-gradient(circle, rgba(233,183,46,0.15) 0%, rgba(255,249,233,0) 70%)',
        'radial-saffron': 'radial-gradient(circle, rgba(243,106,33,0.12) 0%, rgba(255,249,233,0) 70%)',
        'diya-glow': 'radial-gradient(ellipse at center, rgba(243,106,33,0.2) 0%, rgba(233,183,46,0.1) 40%, rgba(255,249,233,0) 70%)',
      }
    },
  },
  plugins: [],
}
