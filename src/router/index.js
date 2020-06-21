import Vue from 'vue'
import Router from 'vue-router'
/**
 * 重写路由的push方法，自刷新允许不报错
 */
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
Vue.use(Router)

export default new Router({
  routes: [
    // 主页
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
    // 关于我们
    {
      path: '/aboutus',
      redirect: '/aboutus/about',
      name: 'AboutUs',
      component: () => import('@/views/AboutUs/index.vue'),
      children: [
        {
          path: '/aboutus/about',
          name: 'aboutUsProfile',
          component: () => import('@/views/AboutUs/about.vue'),
        }
      ]
    }, 
    // 产品技术
    {
      path: '/prod',
      redirect: '/prod/show',
      name: 'Prod',
      component: () => import('@/views/ProdTechnology/index.vue'),
      children: [
        {
          path: '/prod/show',
          name: 'prodShow',
          component: () => import('@/views/ProdTechnology/show.vue'),
        }, {
          path: '/prod/list',
          name: 'prodList',
          component: () => import('@/views/ProdTechnology/list.vue'),
        },{
          path: '/prod/introduction/:id',
          name: 'prodIntroduction',
          component: () => import('@/views/ProdTechnology/introduction.vue'),
        }
      ]
    },
    // 应用领域
    {
      path: '/apparea',
      redirect: '/apparea/all',
      name: 'Apparea',
      component: () => import('@/views/Apparea/index.vue'),
      children: [
        {
          path: '/apparea/all',
          name: 'appareaAll',
          component: () => import('@/views/Apparea/all.vue'),
        }, {
          path: '/apparea/introduction',
          name: 'appareaIntroduction',
          component: () => import('@/views/Apparea/introduction.vue'),
        }
      ]
    },
    // 新闻资讯
    {
      path: '/news',
      redirect: '/news/all',
      name: 'News',
      component: () => import('@/views/News/index.vue'),
      children: [
        {
          path: '/news/all',
          name: 'newsAll',
          component: () => import('@/views/News/all.vue'),
        }, {
          path: '/news/details',
          name: 'newsDetails',
          component: () => import('@/views/News/details.vue'),
        }
      ]
    },
    // 联系我们
    {
      path: '/contactus',
      redirect: '/contactus/contact',
      name: 'ContactUs',
      component: () => import('@/views/ContactUs/index.vue'),
      children: [
        {
          path: '/contactus/contact',
          name: 'contactUsContact',
          component: () => import('@/views/ContactUs/contact.vue'),
        }
      ]
    }, 
  ]
})
