/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    './src/components/**/*.{js,vue,ts}',
    './src/layouts/**/*.vue',
    './src/pages/**/*.vue'
  ],
  theme: {
    extend: {
			colors: {
				primary: 'var(--primary)',
				secondary: 'var(--secondary)',
				card: 'var(--card)',
				wash: 'var(--wash)'
			}
		}
  },
  plugins: []
}
