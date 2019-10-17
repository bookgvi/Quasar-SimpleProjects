import Vue from 'vue'
import axios from 'axios'

const BASE_URL = 'https://pre.ugoloc.ucann.ru/api/'
axios.defaults.baseURL = BASE_URL

const loginURL = 'auth/login'
axios({ url: loginURL, data: { login: 'artem', password: '123456' }, method: 'POST' }).then(resp => {
  const { data } = resp.data
  axios.defaults.headers.common['Authorization'] = `Bearer ${data.access_token}`
})

const api = axios.create({ BASE_URL })
api.interceptors.request.use(config => {
  return config
})
api.interceptors.response.use(resp => {
  return resp
}, err => {
  return Promise.reject(err)
})

Object.defineProperty(Vue.prototype, '$http', {
  get: _ => api
})
