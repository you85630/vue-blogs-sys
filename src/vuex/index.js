import Vue from 'vue'
import Vuex from 'vuex'

// import * as types from './types'

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
    redact: {
      title: '',
      label: '',
      time: '',
      cover: '',
      message: '',
      info: ''
    }
  },
  getters: {
    leftNav: state => state.leftNav,
    blogTitle: state => state.blogTitle,
    blogList: state => state.blogList,
    newsTitle: state => state.newsTitle,
    newsList: state => state.newsList,
    redact: state => state.redact
  },
  actions: {},
  mutations: {}
})
