import Vue from 'vue'
import Vuex from 'vuex'
import { state } from './storex/state'
import { getters } from './storex/getters'
import { mutations } from './storex/mutations'
import { actions } from './storex/actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
export default store
