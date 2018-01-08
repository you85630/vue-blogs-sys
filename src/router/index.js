import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const login = () => import('views/login')
const sys = () => import('views/index')
const blogList = () => import('components/pages/blogList')
const newsList = () => import('components/pages/newsList')
const redact = () => import('components/pages/redact')
const newsredact = () => import('components/pages/newsredact')

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/sys'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/sys',
      name: 'sys',
      component: sys,
      children: [
        {
          path: '/sys/blogList',
          name: 'blogList',
          component: blogList
        },
        {
          path: '/sys/newsList',
          name: 'newsList',
          component: newsList
        },
        {
          path: '/sys/blogList/redact',
          component: redact
        },
        {
          path: '/sys/newsList/newsredact',
          component: newsredact
        }
      ]
    }
  ]
})
