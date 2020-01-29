import * as types from './mutation-types'

export const mutations = {
  [types.EDIT_PRODUCT]: (state, payload) => {
    state.editingProduct.isDisable = false
    state.editingProduct.id = payload.id
    state.editingProduct.name = payload.name
    state.editingProduct.price = payload.price
  },
  [types.CLEAR_PRODUCT_FIELDS]: state => {
    state.editingProduct.isDisable = true
    state.editingProduct.id = ''
    state.editingProduct.name = ''
    state.editingProduct.price = ''
  },
  [types.SET_PRODUCT_VALUE]: (state, payload) => {
    state.editingProduct[payload.label] = payload.val
  },
  [types.MODIFY_PRODUCT]: state => {
    let index = state.products.findIndex(f => +f.id === +state.editingProduct.id)
    if (index === -1) {
      state.products.push(Object.assign({}, state.editingProduct))
    } else {
      state.products.splice(index, 1, Object.assign({}, state.editingProduct))
    }
  }
}
