import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { state } from './state'
import { getters } from './getters'
export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    state,
    getters,
    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
