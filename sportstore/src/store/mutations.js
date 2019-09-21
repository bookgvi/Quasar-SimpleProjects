import * as types from './mutation-types'
export const mutations = {
  [types.SET_PAGE]: (state, payload) => {
    state.currentPage = +payload
  }
}
