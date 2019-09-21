export const getters = {
  getProduct: state => {
    const itemStart = (state.currentPage - 1) * state.rowsPerPage
    return state.products.slice(itemStart, itemStart + state.rowsPerPage)
  },
  currentPage: state => state.currentPage,
  maxPages: state => Math.ceil(state.products.length / state.rowsPerPage)
}
