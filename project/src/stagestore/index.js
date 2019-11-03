import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    haslogin: false
  },
  mutations: {
    'editLogin': function (state, loginstate) {
      state.haslogin = loginstate
    }
  },
  getters: {

  },
  setter: {

  }
})

export default store
