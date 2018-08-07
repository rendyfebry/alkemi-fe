<template>
	<section class="container pt-4">
		<div class="wrapper p-3">
			<h2 class="mb-4">Projects</h2>
			<div class="row" v-if="isLoading">
				<div class="col col-12 col-lg-4" v-for="project in projects" v-bind:key="project.id">
					<div class="mb-3">
						<div class="img-wrapper">
							<img class="card-img-top" src="~/assets/placeholder-16-9.png" alt="Card image cap">
						</div>
						<div class="p-2">
							<h5 class="card-title">Project 1</h5>
						</div>
					</div>
				</div>
				<div class="col col-12 col-lg-4" v-for="project in projects" v-bind:key="project.id">
					<div class="mb-3">
						<div class="img-wrapper">
							<img class="card-img-top" src="~/assets/placeholder-16-9.png" alt="Card image cap">
						</div>
						<div class="p-2">
							<h5 class="card-title">Project 1</h5>
						</div>
					</div>
				</div>
				<div class="col col-12 col-lg-4" v-for="project in projects" v-bind:key="project.id">
					<div class="mb-3">
						<div class="img-wrapper">
							<img class="card-img-top" src="~/assets/placeholder-16-9.png" alt="Card image cap">
						</div>
						<div class="p-2">
							<h5 class="card-title">Project 1</h5>
						</div>
					</div>
				</div>
			</div>

			<div class="row" v-else>
				<div class="col col-12 col-lg-4" v-for="project in projects" v-bind:key="project.id">
					<div class="mb-3">
						<div class="img-wrapper">
							<nuxt-link :to="`/project/${project.slug}/edit`">
								<img class="card-img-top" src="~/assets/preview.png" alt="Card image cap">
							</nuxt-link>
						</div>
						<div class="p-2">
							<h5 class="card-title">{{ project.name }}</h5>
							<p class="card-text">{{ project.date }}</p>
						</div>
					</div>
				</div>
			</div>
		 </div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			isLoading: false,
		}
	},
	computed: {
		projects() {
			return this.$store.state.project.projects || []
		},
	},
	async mounted() {
		this.isLoading = true
		await this.$store.dispatch('project/fetch')
		this.isLoading = false
	},
}
</script>

<style scoped>
.wrapper {
	background-color: #ffffff;
	/* border: 1px solid #eeeeee; */
	box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.1);
}

.img-wrapper {
	background-color: rgb(217, 217, 217);
	border: 1px solid #eeeeee;
}
</style>

