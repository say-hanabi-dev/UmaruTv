import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    testContent: 'One',
    baseUrl: 'https://api.xldm.me',
    systemConfig: {
      showSlide: false,
      showRecommand: false,
    },
    components: {
      message: []
    },
    user: {
      name: '',
      email: '',
    }
  },
  mutations: {
    SET_USER(state, config) {
      state.user = config
    },
    ADD_MESSAGE(state, config) {
      state.components.message.push(config)
    },
    REMOVE_MESSAGE(state) {
      state.components.message.shift()
    }
  },
  actions: {
    CALL_MESSAGE({
      commit,
      state
    }, config) {
      commit('ADD_MESSAGE', config)
      window.setTimeout(() => {
        commit('REMOVE_MESSAGE')
      }, 2000)
    }
  }
})