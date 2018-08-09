<template>
	<section class="container">
		<div class="row">
			<div class="col">
				<app-logo/>
				<h1 class="title">
					Settings
				</h1>
				<h2 class="subtitle">
					Nuxt.js project
				</h2>
				<div class="editable" />
			</div>
		 </div>
	</section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
	data () {
		return {
			config: {
				events: {
					'froalaEditor.initialized': function () {
						console.log('initialized')
					}
				}
			},
			model: 'Edit Your Content Here!'
		}
	},
	components: {
		AppLogo,
	},
	mounted() {
		$(function() {
			$('.editable').froalaEditor({
				toolbarInline: true,
				charCounterCount: false,
				toolbarButtons: [
					'bold',
					'italic',
					'underline',
					'strikeThrough',
					'color',
					'-',
					'insertLink',
					'paragraphFormat',
					'align',
					'formatOL',
					'formatUL',
				],
			})
		})
	}
}
</script>

<style scoped>
.container {
	min-height: calc(100vh - 60px);
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
}

.title {
	font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
		Roboto, 'Helvetica Neue', Arial, sans-serif; /* 1 */
	display: block;
	font-weight: 300;
	font-size: 100px;
	color: #35495e;
	letter-spacing: 1px;
}

.subtitle {
	font-weight: 300;
	font-size: 42px;
	color: #526488;
	word-spacing: 5px;
	padding-bottom: 15px;
}

.links {
	padding-top: 15px;
}
</style>

