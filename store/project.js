import api from '~/api'

export const state = () => ({
  projects: [],
})

export const mutations = {
  setProjects(store, data) {
    store.projects = data
  },
  resetProjects(store) {
    store.projects = []
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
