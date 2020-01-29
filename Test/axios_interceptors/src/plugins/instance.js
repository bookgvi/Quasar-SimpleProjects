import axios from 'axios'
import Vue from 'vue'

const options = {}

const instance = axios.create(options)

instance.interceptors.request.use(config => config, error => Promise.reject(error))
instance.interceptors.response.use(response => response, error => Promise.reject(error))

Plugin.install = (Vue, options) => {
  Vue.$http = instance
  Object.defineProperty(Vue.prototype, '$http', {
    get () {
      return instance
    }
  })
}

Vue.use(Plugin)
