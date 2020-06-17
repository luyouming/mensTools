import Vue from 'vue'
import Vuex from 'vuex'
import news from './modules/news'
import prod from './modules/prod'

//挂载Vuex
Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
    modules: {
        news,
        prod
    }
})

export default store