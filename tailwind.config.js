/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#05060d',
        navy: '#0a0e21',
        'navy-2': '#0d1330',
        cyan: '#4cf3ff',
        violet: '#b14cff',
        amber: '#ffb13b',
        muted: '#8a93b8',
        line: 'rgba(140,160,220,0.16)',
      },
      fontFamily: {
        display: ['"Orbitron"', 'sans-serif'],
        body: ['"Sora"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(140,160,220,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(140,160,220,0.16) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
