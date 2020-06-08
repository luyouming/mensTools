// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible'
import './assets/CommonCss/base.css'
import filters from './filter/index.js'
import api from './api/requestAPI.js'
import ElementUI from 'element-ui'
import messageBox from './components/MessageBox/messageBox.js'
import 'element-ui/lib/theme-chalk/index.css'
import store from "./store"

// 使用element-ui 开发本项目
Vue.use(ElementUI)

Vue.config.productionTip = false

// 在原型上挂封装好的axios
Vue.prototype.$api = api

// 弹窗复用性极高 挂在原型上
Vue.prototype.$messageBox = messageBox

// 注册一些全局使用的filter
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
