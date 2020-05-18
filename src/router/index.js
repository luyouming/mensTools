import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'HomePage',
      // 利用路由懒加载 + 合并chunk
      component: () =>
        import(/* webpackChunkName: "home" */ '@/views/HomePage/index.vue')
    },
    {
      path: '/aboutus',
      name: 'AboutUs',
      // 利用路由懒加载 + 合并chunk
      component: () =>
        import(/* webpackChunkName: "about" */ '@/views/AboutUs/index.vue')
    }
  ]
})
