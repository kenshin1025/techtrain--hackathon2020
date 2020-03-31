export const state = () => ({
  hour: 7,
  minute: 0,
  time: "07:00"
})

export const mutations = {
  updateHour(state, newHour) {
    state.hour = newHour
  },
  updateMinute(state, newMinute) {
    state.minute = newMinute
  },
  updateTime(state, time) {
    state.time = time
  }
}

export const actions = {
  setWakeupTime(context, time) {
    let hour = Number(time[0]+time[1])
    let minute = Number(time[3]+time[4])
    context.commit("updateHour", hour)
    context.commit("updateMinute", minute)
    context.commit("updateTime", time)
  }
}
