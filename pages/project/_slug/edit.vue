<template>
	<div class="wrapper pt-4">
		<div class="main">
            <EditorTemplate />
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

                <div class="col col-12 col-lg-4" v-for="(item, index) in elementList" :key="index">
                    <div class="el-list mb-3 mr-3"
                        :data-el="item.initial"
                        :data-elIcon="item.icon"
                        :data-elName="item.name"
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

// this all object element list
const elementList = () => {
	const el = [
		{
			name: 'Paragraph',
			initial: 'elParagraph',
			icon: 'fas fa-paragraph',
			html: `
				<div class="element-body"
					data-type="elParagrah"
					data-edit="text-editor"
					data-fontsize="16"
					data-linesize="1"
					data-color="#212121">
					<div class="element-action">
						<div class="item" data-action="edit">
							<i class="fas fa-pencil-alt"></i>
						</div>
						<div class="item" data-action="delete">
							<i class="fas fa-trash-alt"></i>
						</div>
						<div class="item handle" data-action="move">
							<i class="fas fa-arrows-alt"></i>
						</div>
					</div>
					<div class="element-content">
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
							Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
							when an unknown printer took a galley of type and scrambled it to make
							a type specimen book.
						</p>
					</div>
				</div>`,
		},
		{
			name: 'Headline',
			initial: 'elHeading',
			icon: 'fas fa-heading',
			html: `
				<div class="element-body" data-type="elHeading" data-edit="text-headline">
					<div class="element-action">
						<div class="item" data-action="edit">
							<i class="fas fa-pencil-alt"></i>
						</div>
						<div class="item" data-action="delete">
							<i class="fas fa-trash-alt"></i>
						</div>
						<div class="item handle" data-action="move">
							<i class="fas fa-arrows-alt"></i>
						</div>
					</div>
					<div class="element-content">
						<h1>Input your headline in this area</h1>
					</div>
				</div>`,
		},
		{
			name: 'Image',
			initial: 'elImage',
			icon: 'fas fa-image',
			html: `
				<div class="element-body" data-type="elImage" data-edit="image" data-reference="square">
					<div class="element-action">
						<div class="item" data-action="edit">
							<i class="fas fa-pencil-alt"></i>
						</div>
						<div class="item" data-action="delete">
							<i class="fas fa-trash-alt"></i>
						</div>
						<div class="item handle" data-action="move">
							<i class="fas fa-arrows-alt"></i>
						</div>
					</div>
					<div class="element-content">
						<img src="https://app.managix.id/static/img/image-placeholder.jpg" class="img-fluid img-responsive img-reference-square img-editing"/>
					</div>
				</div>`,
		},
	]

	return el
}

export default {
	layout: 'editor',
	components: {
		EditorTemplate,
	},
	data() {
		return {
			elementList: elementList(),
		}
	},
	methods: {
		jqueryIntegration() {
			// init draggable
			Builder.initDraggableElement()

			// init sortable
			Builder.initSortable(this.elementList)

			// handle hover element
			Builder.initElementHover()
		},
	},
	mounted() {
		// Code that will run only after
		// the entire view has been re-rendered
		this.$nextTick(
			function() {
				this.jqueryIntegration()
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

.main {
	flex: 4;
	background-color: #ffffff;
	box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2) !important;
	/* box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.1); */
	overflow-y: auto;
}
</style>
