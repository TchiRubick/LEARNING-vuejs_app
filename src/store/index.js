import Vue from 'vue'
import Vuex from 'vuex'
import configuration from "@/config";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    configuration
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getConfiguration: state => {
      return state.configuration
    }
  }
})
