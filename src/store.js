import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    testContent: 'One',
    baseUrl: 'api',
    systemConfig: {
      showSlide: true,
      showRecommand: false,
    },
    requestId: 0,
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
      state.user.email = config.email;
      state.user.name = config.name
    },
    ADD_MESSAGE(state, config) {
      state.components.message.push(config)
    },
    REMOVE_MESSAGE(state) {
      state.components.message.shift()
    },
    REQUEST_COUNT(state) {
      state.requestId += 1
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