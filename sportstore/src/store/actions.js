import * as types from './mutation-types'
import Vue from 'vue'
export const actions = {
  fetchData: async ({ commit }) => {
    commit(types.SET_PRODUCTS, await Vue.prototype.$http.get('products').then(resp => resp.data))
  },
  setPage: ({ commit }, payload) => {
    commit(types.SET_PAGE, payload)
  },
  setRowsPerPage: ({ commit }, payload) => {
    commit(types.SET_ROWS_PER_PAGE, payload)
  },
  setCurrentCategory: ({ commit }, payload) => {
    commit(types.SET_CURRENT_CATEGORY, payload)
  }
}
