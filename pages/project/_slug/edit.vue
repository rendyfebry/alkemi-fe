<template>
	<div class="wrapper pt-4">
		<div class="main">
			<!-- <EditorTemplate /> -->
			<section v-for="section in sections" class="container" :id="section.id" :key="section.id">
				<div v-for="row in section.childrens" class="row" :id="row.id" :key="row.id">
					<div v-for="col in row.childrens" class="col dropzone" :id="col.id" :key="col.id">
						<div class="element-body" v-for="el in col.childrens" :key="el.id" :id="el.id" :data-type="el.type">
							<div class="element-action">
								<div class="item" data-action="edit">
									<i class="fas fa-pencil-alt"></i>
								</div>
								<div class="item" data-action="delete" @click="deleteElement(section.id, row.id, col.id, el.id)">
									<i class="fas fa-trash-alt"></i>
								</div>
								<div class="item handle" data-action="move">
									<i class="fas fa-arrows-alt"></i>
								</div>
							</div>
							<div class="element-content">
								<template v-if="el.type === 'heading'">
									<h1 class="" :id="el.id">
										{{ el.content }}
									</h1>
								</template>
								<template v-else-if="el.type === 'paragraph'">
									<p class="" :id="el.id">
										{{ el.content }}
									</p>
								</template>
								<template v-else-if="el.type === 'button'">
									<button class="btn btn-primary" :id="el.id">
										{{ el.content }}
									</button>
								</template>
								<template v-else-if="el.type === 'image'">
									<img
										class="img-fluid img-responsive img-reference-square img-editing"
										:src="el.content"
									/>
								</template>
								<template v-else>
									<div class="" :id="el.id">
										{{ el.content }}
									</div>
								</template>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>

		<div class="sidebar pl-5 pr-4">
			<!-- <div class="logo-area text-center p-2 mb-2">
				<nuxt-link
					to="/project"
					exact
					class=""
				>
					<i class="fa fa-hourglass-half" /> ALKEMI.IO
				</nuxt-link>
			</div> -->

			<h3 class="section-title">Section 1</h3>
			<div class="row no-gutters">

				<div class="col col-12 col-lg-4" v-for="(item, index) in elementOptions" :key="index">
					<div class="el-list mb-3 mr-3"
						:data-type="item.type"
						:data-elIcon="item.icon"
					>
						<div class="item">
							<div class="icon">
								<i :class="item.icon"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import EditorTemplate from '~/components/EditorTemplate.vue'
import Builder from '~/utils/builder/main.js'

const elementOptions = [
	{
		type: 'paragraph',
		icon: 'fas fa-paragraph',
		content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
					when an unknown printer took a galley of type and scrambled it to make
					a type specimen book.`,
	},
	{
		type: 'heading',
		icon: 'fas fa-heading',
		content: `Title`,
	},
	{
		type: 'image',
		icon: 'fas fa-image',
		content: 'https://app.managix.id/static/img/image-placeholder.jpg',
	},
	{
		type: 'button',
		icon: 'fas fa-image',
		class: 'btn-primary',
		content: 'Click Here',
	},
]

export default {
	layout: 'editor',
	components: {
		EditorTemplate,
	},
	data() {
		return {
			elementOptions,
			sections: [
				{
					id: 'section-1',
					class: '',
					childrens: [
						{
							id: 'row-1',
							class: '',
							childrens: [
								{
									id: 'col-1-a',
									class: '',
									childrens: [
										{
											id: 'el_xaxsada',
											type: 'heading',
											class: 'display-3',
											content: 'Hello, world!',
										},
										{
											id: 'el_xaxsadb',
											type: 'paragraph',
											class: '',
											content:
												'This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.',
										},
									],
								},
								{
									id: 'col-1-b',
									class: '',
									childrens: [
										{
											id: 'el_xaxsaea',
											type: 'heading',
											class: 'display-3',
											content: 'Hello, world!',
										},
										{
											id: 'el_xaxsaeb',
											type: 'paragraph',
											class: '',
											content:
												'This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.',
										},
									],
								},
							],
						},
						{
							id: 'row-2',
							class: '',
							childrens: [
								{
									id: 'col-2-a',
									class: '',
									childrens: [
										{
											id: 'el_yaxsada',
											type: 'button',
											class: 'btn-primary',
											content: 'Click Here',
										},
									],
								},
							],
						},
					],
				},
			],
		}
	},
	methods: {
		generateRandomString() {
			// vaiable regex random string
			const rndString = Math.random()
				.toString(36)
				.replace(/[^a-z]+/g, '')
				.substr(0, 5)

			return rndString
		},
		jqueryIntegration() {
			// init draggable
			Builder.initDraggableElement()

			// init sortable
			Builder.initSortable(this.startHandler, this.stopHandler)

			// handle hover element
			Builder.initElementHover()
		},
		startHandler(e, ui) {},
		stopHandler(e, ui) {
			const element = ui.item.get(0)
			const parent = ui.item.get(0).parentNode

			console.log('element', element)

			const elementType = element.dataset.type
			const parentId = parent.id

			const sectionCopy = [...this.sections]

			const newId = `el_${this.generateRandomString()}`

			sectionCopy.forEach((section, sectionId) => {
				section.childrens.forEach(row => {
					row.childrens.some(col => {
						if (col.id === parentId) {
							const newElement = this.elementOptions.find(i => i.type === elementType)
							const newElementCopy = JSON.parse(JSON.stringify(newElement))
							newElementCopy.id = newId

							col.childrens.push(newElementCopy)
						}
					})
				})
			})

			ui.item.remove()
		},
		deleteElement(sectionId, rowId, colId, elementId) {
			const sectionCopy = [...this.sections]

			const selectedSection = sectionCopy.find(s => s.id === sectionId)
			const selectedRow = selectedSection.childrens.find(r => r.id === rowId)
			const selectedCol = selectedRow.childrens.find(c => c.id === colId)
			const remainingCol = selectedCol.childrens.filter(el => el.id !== elementId)
			selectedCol.childrens = remainingCol

			this.sections = sectionCopy
		},
	},
	mounted() {
		// Code that will run only after
		// the entire view has been re-rendered
		this.$nextTick(
			function() {
				// this handle all function that use jquery
				this.jqueryIntegration()

				// this.handleDrawElementFromListSection()
			}.bind(this),
		)
	},
}
</script>

<style scoped>
.wrapper {
	display: flex;
	height: 100vh;
}

.sidebar {
	flex: 1;
	max-width: 20rem;
}

.logo-area a {
	color: #fff;
	font-size: 1.25rem;
	font-weight: 300;
}

.el-list {
	background-color: #ffffff;
	border-radius: 0.25rem;
	height: 4.25rem;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
}
.el-list > i {
	font-size: 1.5rem;
}

.el-item:hover {
	cursor: pointer;
	background-color: #f0f0f0;
}

.main {
	flex: 4;
	background-color: #ffffff;
	box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2) !important;
	/* box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.1); */
	overflow-y: auto;
}
</style>
