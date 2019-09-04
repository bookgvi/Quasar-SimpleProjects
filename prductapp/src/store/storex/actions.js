import * as types from './mutation-types'

export const actions = {
  editProduct: ({ commit }, payload) => commit(types.EDIT_PRODUCT, payload),
  clearProductFields: ({ commit }) => commit(types.CLEAR_PRODUCT_FIELDS),
  setValue: ({ commit }, payload) => commit(types.SET_PRODUCT_VALUE, payload),
  modifyThis: ({ commit }) => commit(types.MODIFY_PRODUCT)
}
