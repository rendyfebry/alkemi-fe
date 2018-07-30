<template>
	<div class="wrapper pt-4">
		<div class="main">
			<tree :tree-data="tree"></tree>
		</div>

		<div class="sidebar pl-5 pr-4">
			<div class="logo-area text-center p-2 mb-2">
				<nuxt-link
					to="/project"
					exact
					class=""
				>
					<i class="fa fa-hourglass-half" /> ALKEMI.IO
				</nuxt-link>
			</div>

            <h3 class="section-title">Section 1</h3>
            <div class="row no-gutters">

                <div class="col col-12 col-lg-4" v-for="(item, index) in elementOptions" :key="index">
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
import Tree from '~/components/Tree'
import { ProjectTemplate, elementOptions } from '~/static/dummy'

export default {
	layout: 'editor',
	components: {
		EditorTemplate,
		Tree,
	},
	data() {
		return {
			tree: ProjectTemplate,
			elementOptions,
		}
	},
	methods: {
		jqueryIntegration() {
			// init draggable
			Builder.initDraggableElement()

			// init sortable
			Builder.initSortable(this.elementOptions)

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
