import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const login = () => import('views/login')
const index = () => import('views/index')
const blogList = () => import('components/pages/blogList')
const newsList = () => import('components/pages/newsList')
const redact = () => import('components/pages/redact')

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/login',
      name: 'login',
      component: login
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
        },
        {
          path: '/newsList',
          name: 'newsList',
          component: newsList
        },
        {
          path: '/blogList/redact',
          component: redact
        },
        {
          path: '/newsList/redact',
          component: redact
        }
      ]
    }
  ]
})
