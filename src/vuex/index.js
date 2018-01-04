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
    blogList: [
      {
        title:
          '1标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
        label: 'vue jquery angular mongoose',
        time: '2017-10-12 12:30',
        read: '1234123412341234',
        cover: '1封面',
        message: '1简介',
        info: '1内容'
      },
      {
        title: '2标题',
        label: '2标签',
        time: '2时间',
        read: '3456',
        cover: '2封面',
        message: '2简介',
        info: '2内容'
      }
    ],
    newsTitle: {
      title: '标题',
      label: '标签',
      time: '发布时间',
      read: '阅读量',
      cover: '封面',
      message: '简介',
      info: '内容'
    },
    newsList: [
      {
        title:
          '2222222标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
        label: 'vue jquery angular mongoose',
        time: '2017-10-12 12:30',
        read: '1234123412341234',
        cover: '1封面',
        message: '1简介',
        info: '1内容'
      },
      {
        title: '2标题',
        label: '2标签',
        time: '2时间',
        read: '3456',
        cover: '2封面',
        message: '2简介',
        info: '2内容'
      }
    ],
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
    getBlogs: ({ commit }, key) => {
      api.get('/getBlogs').then(res => {
        commit('GET_BLOGS', res.data)
      })
    },
    // 获取新闻
    getNews: ({ commit }, key) => {
      api.get('/getNews').then(res => {
        commit('GET_NEWS', res.data)
      })
    },
    // 编辑新增
    pushList: ({ commit }, key) => {
      api.post('/getBlogs').then(res => {
        commit('PUSH_LIST', res.data)
      })
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
      let list = router.currentRoute.query.list
      let key = parseInt(router.currentRoute.query.key)
      let add = router.currentRoute.query.name
      if (list === 'blogList') {
        // 修改
        state.blogList.splice(key, key + 1, state.redact)
      } else if (list === 'newsList') {
        state.newsList.splice(key, key + 1, state.redact)
      } else if (add === 'blogList') {
        // 添加
        state.redact.read = '1'
        let time = moment().format('YYYY-MM-DD HH:mm')
        console.log(time)
        state.redact.time = time
        state.blogList.push(state.redact)
      } else if (add === 'newsList') {
        state.newsList.push(state.redact)
      }
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
