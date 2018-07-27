<template>
	<section class="container">
		<div class="row">
			<div class="col col-12 col-lg-4" v-for="project in projects" v-bind:key="project.id">
				<div class="card mb-3">
					<div class="img-wrapper">
						<nuxt-link :to="`/project/${project.slug}/edit`">
							<img class="card-img-top" src="~/assets/preview.png" alt="Card image cap">
						</nuxt-link>
					</div>
					<div class="card-body">
						<h5 class="card-title">{{ project.name }}</h5>
						<p class="card-text">{{ project.date }}</p>
					</div>
				</div>
			</div>
		 </div>
	</section>
</template>

<script>
export default {
	computed: {
		projects() {
			return this.$store.state.project.projects || []
		},
	},
	mounted() {
		this.$store.dispatch('project/fetch')
	},
}
</script>

<style scoped>
.img-wrapper {
	background-color: rgb(217, 217, 217);
}
</style>

