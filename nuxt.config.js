const webpack = require('webpack')
require('dotenv').config()

module.exports = {
	env: {
		GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || '',
		BASE_URL: process.env.BASE_URL || '',
	},
	/*
	** Headers of the page
	*/
	head: {
		title: 'Alkemi - Dead Simple Page Builder',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Alkemi - Dead Simple Page Builder' },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', href: '/css/bootstrap.min.css' },
			{ rel: 'stylesheet', href: '/css/all.css' },
			{ rel: 'stylesheet', href: '/css/main.css' },
		],
	},
	/*
	** Customize the progress bar color
	*/
	loading: { color: '#3B8070' },
	plugins: [
		{ src: '~/plugins/jquery', ssr: false },
		'~/api/init.js',
		'~/plugins/eventBus.js',
		'~/plugins/bootstrap.js',
	],
	/*
	** Build configuration
	*/
	build: {
		/*
		** Run ESLint on save
		*/
		extend(config, { isDev, isClient }) {
			if (isDev && isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/,
				})
			}
		},
	},
	router: {
		middleware: ['auth'],
	},
}
