const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
const db = require('./db')

// 创建 application/x-www-form-urlencoded 编码解析
const urlencodedParser = bodyParser.urlencoded({
  extended: false
})

// 获取文章
router.get('/blogslist', (req, res) => {
  db.getBlogs.find({}, (err, doc) => {
    if (err) {
      res.send(err)
    } else {
      res.send(doc)
    }
  })
})
// 获取广告
router.get('/newslist', (req, res) => {
  db.getNews.find({}, (err, doc) => {
    if (err) {
      res.send(err)
    } else {
      res.send(doc)
    }
  })
})
// 提交
router.post('/blogslist', urlencodedParser, (req, res) => {
  const blogslist = [
    {
      title: req.body.title,
      label: req.body.label,
      time: req.body.time,
      read: req.body.read,
      cover: req.body.cover,
      message: req.body.message,
      info: req.body.info
    }
  ]
  db.getBlogs.create(blogslist, err => {
    if (err) {
      res.send(err)
    } else {
      res.send()
    }
  })
  const key = { _id: req.body._id }
  db.getBlogs.updata(blogslist, key, err => {
    if (err) {
      res.send(err)
    } else {
      res.send()
    }
  })
})
// 提交
router.post('/newsList', urlencodedParser, (req, res) => {
  const newsList = [
    {
      title: req.body.title,
      label: req.body.label,
      time: req.body.time,
      read: req.body.read,
      message: req.body.message
    }
  ]
  db.getNews.create(newsList, err => {
    if (err) {
      res.send(err)
    } else {
      res.send()
    }
  })
  const key = { _id: req.body._id }
  db.getBlogs.find(key, (err, docs) => {
    console.log(docs)
    if (err) {
      res.send(err)
    } else {
      res.send()
    }
  })
})

module.exports = router
