import api from '~/api'

import { DUMMY_PROJECT_TEMPLATE } from '~/assets/data/static'

export const state = () => ({
	projects: [],
	editorTree: DUMMY_PROJECT_TEMPLATE,
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
