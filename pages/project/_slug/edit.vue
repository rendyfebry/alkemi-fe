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
		generateRandomString() {
			// vaiable regex random string
			const rndString = Math.random()
				.toString(36)
				.replace(/[^a-z]+/g, '')
				.substr(0, 5)

			return rndString
		},

		handleSortableStart() {
			// hide editor section action
			$('.editor-section__action').removeClass('active')

			// hide hovered section
			$('.editor-section').removeClass('editor-section-hovered')

			// hide editor row action
			$('.editor-row__action').removeClass('active')

			// hide hovered row
			$('.editor-row').removeClass('editor-row-hovered')
		},

		handleSortableStop(e, ui, elementList) {
			// identified item has class el-list
			const uiItemDraggable = ui.item.hasClass('el-list')

			// check item if has class el-list
			if (uiItemDraggable) {
				// remove el-list from item
				ui.item.removeClass('el-list')

				// get random string
				const randomString = this.generateRandomString()

				// set data set element
				const dataSet = ui.item.get(0).dataset.el
				const dataSetParent = ui.item.get(0)

				// set id to this element
				dataSetParent.setAttribute('id', randomString)

				// get element html by parent id
				const elem = elementList.map(item => {
					const newHtml = $(item.html).attr('data-id', randomString)

					return item.initial === dataSet ? newHtml : ''
				})

				// clear css widht and height
				ui.item.css({
					width: '100%',
					height: 'auto',
				})

				// add class editor element as selector
				ui.item.addClass('editor-element')

				// append to dropzone
				ui.item.html(elem)
			}

			// remove helper move
			$('.element-content--helper').remove()
		},

		initDraggableElement() {
			const options = {
				cursor: 'move',
				helper: 'clone',
				revert: false,
				connectToSortable: '.dropzone',
			}

			$('body')
				.find('.el-list')
				.draggable(options)
		},

		initSortable(elementList) {
			const options = {
				connectWith: '.dropzone',
				revert: false,
				placeholder: 'drop-placeholder',
				appendTo: '.dropzone',
				handle: '.handle',
				scroll: false,
				helper: (e, ui) => {
					const elementName = ui.get(0).dataset.elname
					const elementIcon = ui.get(0).dataset.elicon

					const helperHTML = `<div class="el-list helper text-center">
														<div class="item">
															<div class="icon">
																<i class="${elementIcon}"></i>
															</div>
															${elementName}
														</div>
													</div>`

					return helperHTML
				},
				start: (e, ui) => this.handleSortableStart(),
				stop: (e, ui) => this.handleSortableStop(e, ui, elementList),
			}

			const elList = $('.dropzone')

			$(elList).sortable(options)
		},
		initElementHover() {
			$('body')
				.on('mouseenter', '.editor-element', e => {
					const target = e.currentTarget
					// get target id
					const id = $(target).attr('id')

					const isEditing = $(target).hasClass('isEditing')

					const overlay = $('#status-overlay').hasClass('active')

					// active hover if overlay not active
					if (!overlay) {
						// active hover if not have class isEditing
						if (!isEditing) {
							$('.editor-element').removeClass('editor-element-hovered')

							// add border hovered to editor element
							$('#' + id).addClass('editor-element-hovered')

							// initialize element body by data-id
							const elementBody = $('body').find(
								'.element-body[data-id="' + id + '"]',
							)

							// remove editor element action
							$('.element-action').removeClass('active')

							// add class active on element action
							$(elementBody)
								.find('.element-action')
								.addClass('active')
						}
					}
				})
				.on('mouseleave', '.editor-element', () => {
					// remove border hovered from editor element
					$('.editor-element').removeClass('editor-element-hovered')

					// remove editor element action
					$('.element-action').removeClass('active')
				})
		},

		jqueryIntegration() {
			// init draggable
			this.initDraggableElement()

			// init sortable
			this.initSortable(this.elementOptions)

			// handle hover element
			this.initElementHover()
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
