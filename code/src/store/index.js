import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //  md左侧导航栏
    leftList: [],
    activeLi: '',
    isShowLeft: true,
    //  drag
    startDrag: false
  },
  mutations: {
    //  md左侧导航栏
    setLeftList (state, val) {
      state.leftList = val
    },
    setActiveLi (state, val) {
      state.activeLi = val
    },
    setIsShowLeft (state, val) {
      state.isShowLeft = val
    },
    //  drag
    setStartDrag (state, val) {
      state.startDrag = val
    }
  },
  actions: {
  },
  modules: {
  }
})
