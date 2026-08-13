/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        char: {
          DEFAULT: '#171210',
          light: '#231C18',
          lighter: '#2E251F',
        },
        ember: {
          DEFAULT: '#DD2A1B',
          dark: '#B01F14',
          light: '#F04A34',
        },
        flame: {
          DEFAULT: '#F2A71B',
          light: '#FFC94D',
        },
        bone: {
          DEFAULT: '#F4ECE0',
          dim: '#C9BFB0',
        },
        smoke: '#8C8177',
      },
      fontFamily: {
        display: ['"Anton"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"Space Grotesk"', 'monospace'],
      },
      backgroundImage: {
        grain: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        flicker: {
          '0%, 100%': { transform: 'scaleY(1) rotate(0deg)' },
          '50%': { transform: 'scaleY(1.08) rotate(-2deg)' },
        },
        riseIn: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        flicker: 'flicker 2.4s ease-in-out infinite',
        riseIn: 'riseIn 0.7s ease-out both',
      },
    },
  },
  plugins: [],
}
