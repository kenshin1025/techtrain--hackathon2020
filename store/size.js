export const state = () => ({
  size: 100
})

export const mutations = {
  addSize(state, size) {
    state.size += size
  },
}

export const actions = {
  okita(context) {
    context.commit('addSize', 2)
  }
}
