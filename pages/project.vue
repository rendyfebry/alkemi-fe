<template>
	<section class="container">
		<div class="row">
			<div class="col col-12 col-lg-4" v-for="page in pages" v-bind:key="page.id">
				<div class="card mb-3">
					<div class="img-wrapper">
						<nuxt-link to="/editor">
							<img class="card-img-top" src="~/assets/preview.png" alt="Card image cap">
						</nuxt-link>
					</div>
					<div class="card-body">
						<h5 class="card-title">{{ page.name }}</h5>
						<p class="card-text">{{ page.date }}</p>
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
			pages: [
				{
					id: 1,
					name: 'Page Name 1',
					slug: 'page-1',
					date: 'June 21st, 2018',
				},
				{
					id: 2,
					name: 'Page Name 2',
					slug: 'page-2',
					date: 'June 21st, 2018',
				},
				{
					id: 3,
					name: 'Page Name 3',
					slug: 'page-3',
					date: 'June 21st, 2018',
				},
				{
					id: 4,
					name: 'Page Name 4',
					slug: 'page-4',
					date: 'June 21st, 2018',
				},
				{
					id: 5,
					name: 'Page Name 5',
					slug: 'page-5',
					date: 'June 21st, 2018',
				},
				{
					id: 6,
					name: 'Page Name 6',
					slug: 'page-6',
					date: 'June 21st, 2018',
				},
			],
		}
	},
}
</script>

<style scoped>
.img-wrapper {
	background-color: rgb(217, 217, 217);
}
</style>

