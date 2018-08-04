import api from '~/api'

const dummy1 = {
  children: [
	{
	  type: 'container',
	  class: 'container',
	  id: 'container-1',
	  parentId: '',
	  children: [
		{
		  type: 'row',
		  class: 'row',
		  id: 'row-1',
		  parentId: 'container-1',
		  children: [
			{
			  type: 'col',
			  class: 'col dropzone',
			  id: 'col-1',
			  parentId: 'row-1',
			  children: [
				{
				  type: 'heading',
				  id: 'heading-1',
				  parentId: 'col-1',
				  content: `Click Here`,
				  options: {
					level: 1,
				  },
				},
			  ],
			},
			{
			  type: 'col',
			  class: 'col dropzone',
			  id: 'col-2',
			  parentId: 'row-1',
			  children: [
				{
				  type: 'paragraph',
				  id: 'paragraph-2',
				  parentId: 'col-2',
				  content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and scrambled it to make
						a type specimen book.`,
				},
			  ],
			},
		  ],
		},
	  ],
	},
  ],
}

const dummy2 = {
  children: [
	{
	  type: 'container',
	  class: 'container',
	  id: 'container-1',
	  parentId: '',
	  children: [
		{
		  type: 'row',
		  class: 'row',
		  id: 'row-1',
		  parentId: 'container-1',
		  children: [
			{
			  type: 'col',
			  class: 'col dropzone',
			  id: 'col-1',
			  parentId: 'row-1',
			  children: [
				{
				  type: 'heading',
				  id: 'heading-1',
				  parentId: 'col-1',
				  content: `Kiri`,
				  options: {
					level: 1,
				  },
				},
				{
				  type: 'heading',
				  id: 'heading-2',
				  parentId: 'col-1',
				  content: `Tengah`,
				  options: {
					level: 1,
				  },
				},
				{
				  type: 'heading',
				  id: 'heading-3',
				  parentId: 'col-1',
				  content: `Kanan`,
				  options: {
					level: 1,
				  },
				},
			  ],
			},
		  ],
		},
	  ],
	},
  ],
}

export const state = () => ({
	projects: [],
	editorTree: dummy1,
})

export const mutations = {
	setProjects(store, data) {
		store.projects = data
	},
	resetProjects(store) {
		store.projects = []
	},
	setEditorTree(store, data) {
		// store.editorTree = dummy2
		store.editorTree = data
	},
	resetEditorTree(store, data) {
		store.editorTree = {}
	},
}

export const actions = {
	fetch({ commit }) {
		return api.project
			.all()
			.then(response => {
				commit('setProjects', response.data.data)
				return response
			})
			.catch(error => {
				commit('resetProjects')
				return error
			})
	},
}
