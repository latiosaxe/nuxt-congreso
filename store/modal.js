const empty = {
  name: '',
  job: '',
  image: '',
  info: ''
}

export const state = () => ({
  modal: {
    active: false,
    data: empty
  }
})

export const mutations = {
  changeModal(state, val) {
    state.modal.active = val
  },
  fillModal(state, val) {
    state.modal.data = val
  },
  clearModal(state) {
    state.modal.data = empty
  }
}