import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      name: 'Index',
      component: () => import('@/views/HomePage/index.vue'),
      children: [
        {
          path: '/home',
          name: 'Home',
          component: () => import('@/views/HomePage/Home.vue'),
        }
      ]
    },
    {
      path: '/aboutus',
      name: 'AboutUs',
      component: () => import('@/views/AboutUs/index.vue')
    }
  ]
})
