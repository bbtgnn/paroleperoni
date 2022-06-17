import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		// /docs because of github pages
		adapter: adapter({
			// default options are shown
			pages: 'docs',
			assets: 'docs',
			fallback: null,
			precompress: false
		}),

		paths: {
			base: dev ? '' : '/paroleperoni'
		},

		prerender: {
			// This can be false if you're using a fallback (i.e. SPA mode)
			default: true
		},

		// Needed for github pages
		trailingSlash: 'always'
	}
};

export default config;
