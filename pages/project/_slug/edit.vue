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

			<h3 class="section-title">Sections</h3>
			<div class="row no-gutters">
				<div class="col col-12 col-lg-4" v-for="(item, index) in sectionOptions" :key="index">
					<div
						class="sec-list mb-3 mr-3"
						:data-type="item.type"
						:data-icon="item.icon"
						@click="addSection(item.type)"
					>
						<div class="item text-center">
							<div class="icon">
								{{ item.name }}
							</div>
						</div>
					</div>
				</div>
			</div>

			<h3 class="section-title">Elements</h3>
			<div class="row no-gutters">
				<div class="col col-12 col-lg-4" v-for="(item, index) in elementOptions" :key="index">
					<div class="el-list mb-3 mr-3" :data-type="item.type" :data-icon="item.icon">
						<div class="item text-center">
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
import Tree from '~/components/Tree'
import { SECTION_OPTIONS, ELEMENT_OPTIONS } from '~/assets/data/static'

function findObject(o, key, id) {
	//Early return
	if (o[key] === id) {
		return o
	}

	let result
	let p

	for (p in o) {
		if (o.hasOwnProperty(p) && typeof o[p] === 'object') {
			result = findObject(o[p], key, id)
			if (result) {
				return result
			}
		}
	}

	return result
}

function findPosition(arr, id) {
	for (let i = 0; i < arr.length; i++) {
		if(arr[i].id === id) {
			// console.log(arr[i])
			return i + 1
		}
	}

	return 0
}

export default {
	layout: 'editor',
	components: {
		Tree,
	},
	data() {
		return {
			sectionOptions: SECTION_OPTIONS,
			elementOptions: ELEMENT_OPTIONS,
		}
	},
	computed: {
		tree() {
			return this.$store.state.project.editorTree || {}
		},
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

		handleSortableStop(e, ui) {
			const dropedItem = ui.item.get(0)
			const dropedItemId = dropedItem ? dropedItem.id : ''

			const previousSibling = ui.item.context.previousElementSibling
			const previousSiblingId = previousSibling ? previousSibling.id : ''
			// console.log('previousSiblingId', previousSiblingId)

			const droppedItemParentId = dropedItem.parentElement ? dropedItem.parentElement.id : ''
			// console.log('droppedItemParentId', droppedItemParentId)

			if(!droppedItemParentId) {
				console.log('droppedItemParentId is not found')
				return false
			}

			// deep copy the tree data to cut reference
			const treeCopy = JSON.parse(JSON.stringify(this.tree))
			// console.log('treeCopy', treeCopy)

			// New item doesn't have id
			if (!dropedItemId) {
				console.log('baru')

				const dataSet = dropedItem.dataset
				const elementType = dropedItem.dataset ? dropedItem.dataset.type : ''

				const selectedElement = this.elementOptions.find(i => i.type === elementType)

				if (!selectedElement || !selectedElement.template) {
					console.log('selectedElement is not found on element options')
					return false
				}

				const newElement = JSON.parse(JSON.stringify(selectedElement.template))
				newElement.icon = selectedElement.icon
				newElement.type = selectedElement.type
				newElement.id = `${elementType}_${this.generateRandomString()}`
				newElement.parentId = droppedItemParentId

				const newParent = findObject(treeCopy, 'id', droppedItemParentId)
				// console.log('newParent', newParent)

				if (!newParent) {
					console.log('new parent is not found')
					return false
				}

				const position = findPosition(newParent.children, previousSiblingId)
				newParent.children.splice(position, 0, newElement)
			} else {
				console.log('lama')

				e.preventDefault()

				const existingElement = findObject(treeCopy, 'id', dropedItemId)
				// console.log('existingElement', existingElement)

				if (!existingElement || !existingElement.parentId) {
					console.log('existingElement not found')
					return false
				}

				const oldParent = findObject(treeCopy, 'id', existingElement.parentId)
				// console.log('oldParent', oldParent)

				if (!oldParent) {
					console.log('Old parent is not found')
					return false
				}

				// if (existingElement.parentId !== droppedItemParentId) {
					existingElement.parentId = droppedItemParentId

					// remove element from old parent
					const remainingChild = oldParent.children.filter(
						i => i.id !== existingElement.id,
					)

					oldParent.children = remainingChild

					const newParent = findObject(treeCopy, 'id', droppedItemParentId)
					// console.log('newParent', newParent)

					if (!newParent) {
						console.log('new parent is not found')
						return false
					}

					const position = findPosition(newParent.children, previousSiblingId)
					newParent.children.splice(position, 0, existingElement)
				// }
			}

			// Remove item from JQUERY UI
			ui.item.remove()

			// remove helper move
			$('.element-content--helper').remove()

			// console.log('treeCopy', treeCopy)

			this.$store.commit('project/setEditorTree', treeCopy)
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

		initSortable() {
			const options = {
				connectWith: '.dropzone',
				revert: false,
				placeholder: 'drop-placeholder',
				appendTo: '.dropzone',
				handle: '.handle',
				scroll: false,
				helper: (e, ui) => {
					const elementType = ui.get(0).dataset.type
					const elementIcon = ui.get(0).dataset.icon

					const helperHTML = `<div class="el-list helper text-center">
											<div class="item">
												<div class="icon">
													<i class="${elementIcon}"></i>
												</div>
												${elementType}
											</div>
										</div>`

					return helperHTML
				},
				start: (e, ui) => this.handleSortableStart(),
				stop: (e, ui) => this.handleSortableStop(e, ui),
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

		addSection(type) {
			const selectedSection = this.sectionOptions.find(i => i.type === type)

			if (!selectedSection || !selectedSection.template) {
				console.log('selectedSection is not found on section options')
				return false
			}

			const treeCopy = JSON.parse(JSON.stringify(this.tree))

			const newSection = JSON.parse(JSON.stringify(selectedSection.template))
			newSection.icon = selectedSection.icon
			newSection.type = newSection.type
			// newSection.id = `section_${this.generateRandomString()}`

			// newSection.children.forEach((row, i) => {
			// 	row.parentId = `${newSection.id}_${i}`
			// 	if (row.children && row.children.length) {
			// 		row.children.forEach((col, j) => {
			// 			col.parentId = `${newSection.id}_${i}_${j}`
			// 		})
			// 	}
			// })

			treeCopy.children.splice(0, 0, newSection)

			this.$store.commit('project/setEditorTree', treeCopy)
		},

		jqueryIntegration() {
			// init draggable
			this.initDraggableElement()

			// init sortable
			this.initSortable()

			// handle hover element
			this.initElementHover()
		},

		editElement(id, type) {
			console.log(`Element ${type} #${id} ask for edit`)
		},

		deleteElement(id) {
			console.log(`Element #${id} ask for delete`)
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
	created() {
		this.$bus.$on('edit-element', this.editElement)
		this.$bus.$on('delete-element', this.deleteElement)
	}
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
