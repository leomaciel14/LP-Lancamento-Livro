/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'fundo': '#F6F1ED',
      'branco': '#ffffff',
      'preto': '#000000',
      'cinza': '#verde',
      'vermelho': '#881212',
      'verde1': '#1B1E18',
      'verde2': '#121410',
      'creme1': '#d7d1cb',
      'creme2': '#b9b3ac',
    },
    fontFamily: {
      sans: ['Karma', 'sans-serif'],
      serif: ['Older Dictator', 'serif'],
    },
  },
  plugins: [],
}
