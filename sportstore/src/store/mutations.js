import * as types from './mutation-types'
export const mutations = {
  [types.SET_PAGE]: (state, payload) => {
    state.currentPage = +payload
  },
  [types.SET_ROWS_PER_PAGE]: (state, payload) => {
    state.currentPage = 1
    state.rowsPerPage = payload
  },
  [types.SET_CURRENT_CATEGORY]: (state, payload) => {
    state.currentCategory = payload
  }
}
