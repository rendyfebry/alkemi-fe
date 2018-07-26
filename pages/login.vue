<template>
	<div class="container">
		<div class="wrapper">
			<div class="logo-area text-center p-2 mb-2">
				<nuxt-link
					to="/"
					exact
					class=""
				>
					ALKEMI.IO
				</nuxt-link>
			</div>
			<div class="card borderless">
				<div class="card-body">
					<h5 class="card-title">Login</h5>
					<form @submit.prevent="submit">
						<div v-if="alert" :class="`alert alert-${alert.type}`" role="alert">
							{{alert.message}}
						</div>

						<div class="form-group">
							<input type="email" name="email" v-model="email" class="form-control" placeholder="Email" />
						</div>

						<div class="form-group">
							<input type="password" name="password" v-model="password" class="form-control" placeholder="Password" />
						</div>

						<div class="form-group">
							<div class="form-group form-check mb-0">
								<input type="checkbox" class="form-check-input" id="rememberMe">
								<label class="form-check-label" for="rememberMe">Remember me</label>
							</div>
						</div>

						<button
							class="btn btn-success btn-block borderless"
							type="submit"
							:disabled="loading"
						>
							{{ loading ? 'Login...' : 'Login' }}
						</button>
					</form>

					<hr />

					<button
						class="btn btn-primary btn-block borderless"
						v-if="google_ready"
						@click="google_submit"
						:disabled="google_loading"
						:style="{ background: '#ec5425'}"
					>
						<i class="fa fa-google" />
						{{ google_loading ? 'Continue with google...' : 'Continue with google' }}
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { googleClientId } from '~/config'

export default {
	layout: 'login',
	data() {
		return {
			email: '',
			password: '',
			alert: null,
			loading: false,
			google_loading: false,
			google_ready: false,
		}
	},
	methods: {
		submit() {
			this.alert = null
			this.loading = true
			this.$store
				.dispatch('auth/login', {
					email: this.email,
					password: this.password,
				})
				.then(result => {
					this.alert = { type: 'success', message: result.data.message }
					this.loading = false
					this.$router.push('/admin')
				})
				.catch(error => {
					this.loading = false
					if (error.response && error.response.data) {
						this.alert = {
							type: 'error',
							message: error.response.data.message || error.reponse.status,
						}
					}
				})
		},
		google_submit() {
			if (!this.google_ready) return
			this.alert = null
			this.google_loading = true
			window.google_auth2
				.signIn()
				.then(() =>
					this.$store.dispatch(
						'auth/login_google',
						window.google_auth2.currentUser.get().Zi.access_token,
					),
				)
				.then(result => {
					this.alert = { type: 'success', message: result.data.message }
					this.google_loading = false
					this.$router.push('/admin')
				})
				.catch(error => {
					this.google_loading = false
					if (error.response && error.response.data) {
						this.alert = {
							type: 'error',
							message: error.response.data.message || error.reponse.status,
						}
					}
				})
		},
		installGoogleSdkScript(d, s, id) {
			if (d.getElementById(id)) {
				this.google_ready = true
				return
			}
			const fjs = d.getElementsByTagName(s)[0]
			const js = d.createElement(s)
			js.id = id
			js.src = 'https://apis.google.com/js/platform.js?onload=gapiOnLoadCallback'
			fjs.parentNode.insertBefore(js, fjs)
		},
	},
	mounted() {
		window.gapiOnLoadCallback = () => {
			window.gapi.load('auth2', () => {
				window.google_auth2 = window.gapi.auth2.init({
					client_id: googleClientId,
					fetch_basic_profile: false,
					scope: 'profile email',
				})
			})
			this.google_ready = true
		}

		this.installGoogleSdkScript(document, 'script', 'google-jssdk')
	},
}
</script>

<style scoped>
.wrapper {
	max-width: 400px;
	margin: 0 auto;
}

.logo-area a {
	color: #fff;
	font-size: 1.25rem;
	font-weight: 300;
}

.borderless {
	border: 0;
}
</style>
