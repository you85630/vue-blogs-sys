import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const login = () => import('views/login')
const index = () => import('views/index')
const blogList = () => import('components/pages/blogList')

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      children: [
        {
          path: '/blogList',
          name: 'blogList',
          component: blogList
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
