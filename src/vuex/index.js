import Vue from 'vue'
import Vuex from 'vuex'

import api from 'assets/js/api'
import * as types from './types'
import router from './../router'
import moment from 'moment'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    leftNav: [
      {
        title: '博文列表',
        link: '/blogList',
        icon: 'fa-file-text-o'
      },
      {
        title: '公告列表',
        link: '/newsList',
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
    leftNav: state => state.leftNav,
    blogTitle: state => state.blogTitle,
    blogList: state => state.blogList,
    newsTitle: state => state.newsTitle,
    newsList: state => state.newsList,
    redact: state => state.redact
  },
  actions: {
    // 获取文章
    blogsList: ({ commit }) => {
      api.get('/blogslist').then(res => {
        commit('GET_BLOGS', res.data)
      })
    },
    // 获取新闻
    newsList: ({ commit }) => {
      api.get('/newslist').then(res => {
        commit('GET_NEWS', res.data)
      })
    },
    // 编辑新增
    pushList: ({ commit, state }) => {
      let list = router.currentRoute.query.list
      let key = parseInt(router.currentRoute.query.key)
      let add = router.currentRoute.query.name
      if (list === 'blogList') {
        // 修改文章
        state.blogList.splice(key, 1, state.redact)
        api.post('/blogslist', state.blogList)
      } else if (list === 'newsList') {
        // 修改广告
        state.newsList.splice(key, 1, state.redact)
        api.post('/newsList', state.newsList)
      } else if (add === 'blogList') {
        state.redact.read = '1'
        state.redact.time = moment().format('YYYY-MM-DD HH:mm')
        // 添加文章
        state.blogList.push(state.redact)
        api.post('/blogslist', state.redact)
      } else if (add === 'newsList') {
        state.redact.read = '1'
        state.redact.time = moment().format('YYYY-MM-DD')
        // 添加广告
        state.newsList.push(state.redact)
        api.post('/newsList', state.redact)
      }
      commit('PUSH_LIST')
    },
    // 监控路由
    isTab ({ commit }) {
      commit('IS_TAB')
    }
  },
  mutations: {
    // 获取文章
    [types.GET_BLOGS] (state, res) {
      state.blogList = res
    },
    // 获取新闻
    [types.GET_NEWS] (state, res) {
      state.newsList = res
    },
    // 编辑新增
    [types.PUSH_LIST]: state => {
      router.go(-1)
    },
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
    }
  }
})
