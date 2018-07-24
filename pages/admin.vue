<template>
	<section class="container">
		<div class="row">
			<div class="col">
				<h1 class="title">
					Admin Page
				</h1>
				<p v-if="user">Hello, {{user.email}}</p>
          		<p v-else>The user is not authenticated!</p>
				<button class="button--green" @click="$store.dispatch('auth/fetch')">Check Me</button>
				<nuxt-link to="/" exact class="button--grey">Home</nuxt-link>
				<button class="button--grey" @click="logOut">Log Out</button>
			</div>
	   </div>
	</section>
</template>

<script>
export default {
	computed: {
		user() {
			return (this.$store.state.auth || {}).user || null
		},
	},
	methods: {
		logOut() {
			this.$store.dispatch('auth/reset').then(() => {
				this.$router.push('/')
			})
		},
	},
}
</script>

<style scoped>
.container {
	min-height: 100vh;
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

