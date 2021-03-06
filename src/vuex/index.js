import Vue from 'vue'
import Vuex from 'vuex'

import api from 'assets/js/api'
import * as types from './types'
import router from './../router'
import moment from 'moment'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    login: {},
    msg: '',
    leftNav: [
      {
        title: '博文列表',
        link: '/sys/blogList',
        icon: 'fa-file-text-o'
      },
      {
        title: '公告列表',
        link: '/sys/newsList',
        icon: 'fa-newspaper-o'
      }
    ],
    blogTitle: {
      title: '标题',
      label: '标签',
      time: '发布时间',
      read: '阅读量',
      cover: '封面',
      message: '简介',
      info: '内容'
    },
    newsTitle: {
      title: '标题',
      label: '标签',
      time: '发布时间',
      read: '阅读量',
      cover: '封面',
      message: '简介',
      info: '内容'
    },
    blogList: [],
    newsList: [],
    redact: {}
  },
  getters: {
    login: state => state.login,
    msg: state => state.msg,
    leftNav: state => state.leftNav,
    blogTitle: state => state.blogTitle,
    blogList: state => state.blogList,
    newsTitle: state => state.newsTitle,
    newsList: state => state.newsList,
    redact: state => state.redact
  },
  actions: {
    // 监控路由
    isTab ({ commit }) {
      commit('IS_TAB')
    },
    // 登录
    logIn: ({ commit }) => {
      commit('LOGIN')
    },
    // 获取文章
    blogsList: ({ commit }) => {
      commit('GET_BLOGS')
    },
    // 获取新闻
    newsList: ({ commit }) => {
      commit('GET_NEWS')
    },
    // 编辑新增
    pushList: ({ commit }) => {
      commit('PUSH_LIST')
    },
    // 删除
    removeList: ({ commit }, key) => {
      commit('REMOVE_NEWS_LIST', key)
    },
    searchList: ({ commit }, key) => {
      commit('SEARCH_LIST', key)
    }
  },
  mutations: {
    // 监控路由
    [types.IS_TAB]: state => {
      let list = router.currentRoute.query.list
      let key = parseInt(router.currentRoute.query.key)
      if (list === 'blogList') {
        state.redact = state.blogList[key]
      } else if (list === 'newsList') {
        state.redact = state.newsList[key]
      } else {
        state.redact = {}
      }
    },
    // 登录
    [types.LOGIN] (state) {
      api.post('/api/login', state.login).then(function (res) {
        if (res.data.code === 200) {
          localStorage.setItem('login', res.data.info.token)
          router.push('/sys')
          state.msg = ''
        } else {
          state.msg = res.data.message
        }
      })
      state.login = {}
    },
    // 获取文章
    [types.GET_BLOGS]: (state, res) => {
      api
        .get('/api/blogslist?t=' + moment().format('YYYYMMDDHHmm'))
        .then(res => {
          state.blogList = res.data
        })
    },
    // 获取新闻
    [types.GET_NEWS]: (state, res) => {
      api
        .get('/api/newslist?t=' + moment().format('YYYYMMDDHHmm'))
        .then(res => {
          state.newsList = res.data
        })
    },
    // 编辑新增
    [types.PUSH_LIST]: state => {
      let list = router.currentRoute.query.list
      let key = parseInt(router.currentRoute.query.key)
      let add = router.currentRoute.query.name
      if (list === 'blogList') {
        // 修改文章
        state.blogList.splice(key, 1, state.redact)
        api.post('/api/upblogslist', state.redact)
      } else if (list === 'newsList') {
        // 修改广告
        state.newsList.splice(key, 1, state.redact)
        api.post('/api/upnewslist', state.redact)
      } else if (add === 'blogList') {
        state.redact.read = '1'
        state.redact.time = moment().format('YYYY-MM-DD HH:mm')
        // 添加文章
        state.blogList.push(state.redact)
        api.post('/api/blogslist', state.redact)
      } else if (add === 'newsList') {
        state.redact.read = '1'
        state.redact.time = moment().format('YYYY-MM-DD')
        // 添加广告
        state.newsList.push(state.redact)
        api.post('/api/newslist', state.redact)
      }
      router.go(-1)
    },
    // 删除
    [types.REMOVE_NEWS_LIST]: (state, key) => {
      let name = router.currentRoute.name
      if (name === 'blogList') {
        api.post('/api/removeblogslist', state.blogList[key])
        state.blogList.splice(key, 1)
      } else if (name === 'newsList') {
        api.post('/api/removenewslist', state.newsList[key])
        state.newsList.splice(key, 1)
      }
    },
    // 搜索
    [types.SEARCH_LIST]: (state, key) => {
      let name = router.currentRoute.name
      if (name === 'blogList') {
        if (key === '') {
          api
            .get('/api/blogslist?t=' + moment().format('YYYYMMDDHHmm'))
            .then(res => {
              state.newsList = res.data
            })
        } else {
          state.blogList = state.blogList.filter(e => e.title === key)
        }
      } else if (name === 'newsList') {
        if (key === '') {
          api
            .get('/api/newslist?t=' + moment().format('YYYYMMDDHHmm'))
            .then(res => {
              state.newsList = res.data
            })
        } else {
          state.newsList = state.newsList.filter(e => e.title === key)
        }
      }
    }
  }
})
