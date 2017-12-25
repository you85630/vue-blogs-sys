import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const HelloWorld = () => import('views/HelloWorld')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
