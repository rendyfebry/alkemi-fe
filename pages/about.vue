<template>
	<section class="container">
		<div class="row">
			<div class="col">
				<app-logo/>
				<h1 class="title">
					About
				</h1>
				<h2 class="subtitle">
					Nuxt.js project
				</h2>
			</div>
		 </div>
	</section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
	components: {
		AppLogo,
	},
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

