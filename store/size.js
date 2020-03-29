export const state = () => ({
  size: 100,
  update: 0,
})

export const mutations = {
  addSize(state, size) {
    state.size += size
  },
  update(state, now) {
    state.update = now
  },
}

export const actions = {
  okita(context) {
    context.commit('addSize', 2)
    context.commit('update', Date.now())
  }
}
