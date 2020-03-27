export const state = () => ({
  hour: 0,
  minute: 0
})

export const mutations = {
  updateHour(state, newHour) {
    state.hour = newHour
  },
  updateMinute(state, newMinute) {
    state.minute = newMinute
  }
}

export const actions = {
  setNowTime(context) {
    let today = new Date()
    context.commit('updateHour', today.getHours())
    context.commit('updateMinute', today.getMinutes())
  }
}
