/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0d1117',
        'bg-secondary': '#161b22',
        'bg-tertiary': '#21262d',
        'border': '#30363d',
        'text-primary': '#e6edf3',
        'text-secondary': '#8b949e',
        'text-muted': '#6e7681',
        'accent-blue': '#58a6ff',
        'accent-green': '#3fb950',
        'accent-yellow': '#d29922',
        'accent-red': '#f85149',
        'accent-purple': '#a371f7',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Noto Sans',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}
