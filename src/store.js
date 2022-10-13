import { createStore } from 'vuex'
import authService from './services/auth'
const state = () => ({
  currentUser: {}
})
const mutations = {
  setLocaStorage(state, data) {
    const user = {
      name: data.name,
      token: data.token
    }
    localStorage.setItem("user", JSON.stringify(user))
  },
  saveUser (state, data) {
    state.currentUser = data
  }
}

const actions = {
  async login ({commit}, payload) {
    const response = await authService.login(payload)
    if(response.success) {
      commit('setLocaStorage', response.data)
    }
    return response
  },

  async fetchProfile ({commit}) {
    const response = await authService.userProfile()
    if(response.success) {
      commit("saveUser", response.data)
    }
    return response
  }
}

const getters = {
  user: (state) => state.currentUser
}
const store = createStore({
  state,
  mutations,
  actions,
  getters
})
export default store