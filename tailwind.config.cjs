/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				peroni: {
					600: '#b41232',
					100: '#e6cdce'
				}
			}
		}
	},
	plugins: []
};
