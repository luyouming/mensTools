import Vue from 'vue'
import Vuex from 'vuex'
import news from './modules/news'

//挂载Vuex
Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
    modules: {
        news
    }
})

export default store