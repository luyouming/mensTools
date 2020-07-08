import axios from 'axios'
const state = {
}
const mutations = {
}
const actions = {
  submitFeedBack(state, params) {
    return axios.post('http://szmeitu123.gotoip11.com/server/api/User/AddFeedBack', params)
  }
}
export default {
  state,
  mutations,
  actions
}