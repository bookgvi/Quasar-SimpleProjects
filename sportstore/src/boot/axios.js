import Vue from 'vue'
import axios from 'axios'
// import { Loading } from 'quasar'

const baseURL = `http://localhost:3500/`

const fetchProducts = axios.create({ baseURL })

fetchProducts.interceptors.request.use(config => {
  // Loading.show()
  return config
})

fetchProducts.interceptors.response.use(response => {
  // Loading.hide()
  return response
}, error => {
  // Loading.hide()
  return Promise.reject(error)
})

Object.defineProperty(Vue.prototype, '$http', {
  get: () => fetchProducts
})
