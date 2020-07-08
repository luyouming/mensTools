import Vue from 'vue'
import Vuex from 'vuex'
import news from './modules/news'
import prod from './modules/prod'
import app from './modules/app'

//挂载Vuex
Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
    modules: {
        news,
        prod,
        app
    }
})

export default store