import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    leftList: [],
    activeLi: ''
  },
  mutations: {
    setLeftList (state, val) {
      state.leftList = val
    },
    setActiveLi (state, val) {
      state.activeLi = val
    }
  },
  actions: {
  },
  modules: {
  }
})
