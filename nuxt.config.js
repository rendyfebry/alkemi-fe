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
			{ rel: 'stylesheet', href:'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css' },
			{ rel: 'stylesheet', href:'https://cdnjs.cloudflare.com/ajax/libs/froala-editor/2.5.1/css/froala_editor.pkgd.min.css' },
			{ rel: 'stylesheet', href:'https://cdnjs.cloudflare.com/ajax/libs/froala-editor/2.5.1/css/froala_style.min.css' },
			{ rel: 'stylesheet', href: '/css/main.css' },
		],
	},
	/*
	** Customize the progress bar color
	*/
	loading: { color: '#3B8070' },
	plugins: [
		{ src: '~/plugins/jquery', ssr: false },
		{ src: '~/plugins/froala', ssr: false },
		'~/plugins/eventBus.js',
		'~/plugins/bootstrap.js',
		'~/api/init.js',
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
