import Vue from 'vue'
import Vuex from 'vuex'
import { state } from './storex/state'
import { getters } from './storex/getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  getters
})
export default store
