import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    leftNav: [
      {
        title: '博文列表',
        link: '/blogList'
      }
    ]
  },
  getters: {
    leftNav: state => state.leftNav
  },
  actions: {},
  mutations: {}
})
