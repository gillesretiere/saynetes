/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class', // 'class' permet de basculer manuellement
  theme: {
    extend: {
      boxShadow: {
        'custom-card': 'var(--card-shadow)',
      },
      colors: {
        // Redirection vers les variables CSS de index.css
        'primary-main': 'rgb(var(--color-primary) / <alpha-value>)',
        'primary-orange': 'rgb(var(--color-orange) / <alpha-value>)',
        'primary-blue': 'rgb(var(--color-blue) / <alpha-value>)',
        'secondary-main': 'rgb(var(--color-secondary) / <alpha-value>)',
        'special-green': 'rgb(var(--color-special-green) / <alpha-value>)',
        'main-bg': 'rgb(var(--color-bg-main) / <alpha-value>)',
        'card-bg': 'rgb(var(--color-bg-card) / <alpha-value>)',
        'pills-bg': 'rgb(var(--color-bg-pills) / <alpha-value>)',
      },
      fontFamily: {
        primary: ["articulat-cf, sans-serif"],
        secondary: ["artifex-cf, serif"],
      },
    },
  },
  plugins: [],
}