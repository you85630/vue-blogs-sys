import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const login = () => import('views/login')
const notfound = () => import('views/notfound')
const sys = () => import('views/index')
const blogList = () => import('components/pages/blogList')
const newsList = () => import('components/pages/newsList')
const redact = () => import('components/pages/redact')
const newsredact = () => import('components/pages/newsredact')

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/sys'
    },
    {
      path: '*',
      component: notfound
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
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: '/sys/blogList',
          name: 'blogList',
          component: blogList,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/sys/newsList',
          name: 'newsList',
          component: newsList,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/sys/blogList/redact',
          component: redact,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/sys/newsList/newsredact',
          component: newsredact,
          meta: {
            requireAuth: true
          }
        }
      ]
    }
  ]
})

// 验证 token，存在才跳转
router.beforeEach((to, from, next) => {
  let login = localStorage.getItem('login')
  if (to.meta.requireAuth) {
    if (!login) {
      next({
        path: '/sys/login',
        query: { redirect: to.fullPath }
      })
    }
  }
  next()
})

export default router
