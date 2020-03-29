import firebase from "~/plugins/firebase.js";
export const state = () => ({
  token: "",
  isLogin: false
})

export const mutations = {
  setToken (state, payload) {
    state.token = payload
  },
  setIsLogin (state, bool) {
    state.isLogin = bool
  }
}

export const actions = {
  loginCheck ({ commit }) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        commit('setIsLogin', true)
      } else {
        commit('setIsLogin', false)
      }
    });
  }
}
