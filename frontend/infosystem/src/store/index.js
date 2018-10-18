import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production' 

export default new Vuex.Store({
  getters,
  mutations,
  state,
  strict: debug,
 // plugins: debug?[createLogger()]:''
})