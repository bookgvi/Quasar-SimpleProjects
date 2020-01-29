export const getters = {
  getUniqCategories: state => {
    const arr = state.products.map(item => item.category)
    return [...new Set(arr.filter(item => arr.filter(elem => elem === item)))]
  },
  getFilteredCategories: state =>
    state.products.filter(item =>
      state.currentCategory === 'all' || item.category === state.currentCategory),
  getProducts: (state, getters) => {
    const itemStart = (state.currentPage - 1) * state.rowsPerPage
    return getters.getFilteredCategories.slice(itemStart, state.rowsPerPage + itemStart)
  },
  currentPage: state => state.currentPage,
  maxPages: (state, getters) => {
    return Math.ceil(getters.getFilteredCategories.length / state.rowsPerPage)
  },
  rowsPerPage: state => state.rowsPerPage
}
