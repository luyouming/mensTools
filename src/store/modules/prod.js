import commonInfo from '@/assets/CommonJs/commonInfo'
const state = {
    prodInfo: {},
    prodList: commonInfo.prodList
}
const mutations = {
    SET_PROD_INFO(state, info) {
        state.prodInfo = info
    }
}
const actions = {

}
export default {
    state,
    mutations,
    actions
}