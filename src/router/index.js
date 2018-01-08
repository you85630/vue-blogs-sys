import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const login = () => import('views/sys/login')
const sys = () => import('views/sys/index')
const blogList = () => import('components/sys/pages/blogList')
const newsList = () => import('components/sys/pages/newsList')
const redact = () => import('components/sys/pages/redact')
const newsredact = () => import('components/sys/pages/newsredact')

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/sys'
    },
    {
      path: '/sys/login',
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
