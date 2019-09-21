import * as types from './mutation-types'
export const actions = {
  setPage: ({ commit }, payload) => {
    commit(types.SET_PAGE, payload)
  }
}
