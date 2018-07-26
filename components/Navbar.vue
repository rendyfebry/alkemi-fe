<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-primary navbar-main">
		<div class="container">
			<template v-if="isUserLoggedIn">
			<nuxt-link to="/pages" class="navbar-brand">
				<i class="fa fa-hourglass-half" /> ALKEMI.IO
			</nuxt-link>
			</template>

			<template v-else>
			<nuxt-link to="/" exact class="navbar-brand">
				<i class="fa fa-hourglass-half" /> ALKEMI.IO
			</nuxt-link>
			</template>

			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarMain"
				aria-controls="navbarMain"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarMain">
				<ul class="navbar-nav ml-auto">
					<!-- <li class="nav-item">
						<nuxt-link to="/about" class="nav-link">About</nuxt-link>
					</li> -->

					<template v-if="isUserLoggedIn">
					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							{{ userName }}
							<img :src="picture" class="rounded" width="30px" height="30px" />
						</a>
						<div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
							<nuxt-link to="/admin" class="dropdown-item">Admin</nuxt-link>
							<nuxt-link to="/settings" class="dropdown-item">Settings</nuxt-link>
							<div class="dropdown-divider"></div>
							<a class="dropdown-item" href="#" @click="logOut">Logout</a>
						</div>
					</li>
					<li class="nav-item dropdown">
					</li>
					</template>

					<template v-else>
					<li class="nav-item">
						<nuxt-link to="/login" class="nav-link">Login</nuxt-link>
					</li>
					</template>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	computed: {
		picture() {
			return 'https://github.com/nuxt.png'
		},
		isUserLoggedIn() {
			const userIsLoggedIn = !!this.$store.state.auth.user
			return userIsLoggedIn
		},
		userName() {
			const userIsLoggedIn = !!this.$store.state.auth.user
			const name = userIsLoggedIn ? this.$store.state.auth.user.email : ''
			return name
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
.navbar-main {
	background-color: #2f80ed;
	/* background: linear-gradient(315deg, #56ccf2, #3a95ee 73%, #2f80ed); */
}

.dropdown-menu {
	min-width: 15rem;
}
</style>