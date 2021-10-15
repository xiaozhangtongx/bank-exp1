/*
 * @Description:
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-04 13:22:31
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: '',
  },
  mutations: {
    USER_INFO(state, info) {
      state.user = info
    },
    RESET_STATE: (state) => {
      Object.assign(state, getDefaultState())
    },
  },
  actions: {
    saveUserInfo({ commit }, data) {
      commit('USER_INFO', data)
    },
  },
  modules: {},
})
