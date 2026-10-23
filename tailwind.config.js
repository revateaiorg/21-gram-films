/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nearblack: "#050403",
        secondary: "#0B0907",
        card: {
          dark: "#0D0B09",
          hover: "#11100D",
        },
        brand: {
          primary: "#39D98A",
          secondary: "#1FBF73",
          bright: "#67F2A9",
          dark: "#0D6B43",
          glow: "rgba(57, 217, 138, 0.18)",
        }
      },
      fontFamily: {
        heading: ["'Inter Tight'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
