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
		script: [
			{ src: '/jquery.min.js' },
			{ src: '/jquery-ui.min.js' },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:300,400,700,900' },
			{ rel: 'stylesheet', href: '/css/all.css' },
			{ rel: 'stylesheet', href: '/main.css' },
		],
	},
	/*
	** Customize the progress bar color
	*/
	loading: { color: '#3B8070' },
	css: [
		'bootstrap/dist/css/bootstrap.css',
	],
	plugins: [
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
		vendor: ['jquery', 'jquery-ui', 'bootstrap'],
		plugins: [
			// set shortcuts as global for bootstrap
			// new webpack.ProvidePlugin({
			// 	$: 'jquery',
			// 	jQuery: 'jquery',
			// 	'window.jQuery': 'jquery'
			// })
		]
	},
	router: {
		middleware: ['auth'],
	},
}
