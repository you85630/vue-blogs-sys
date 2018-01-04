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
  console.log(req.body)
  // const blogslist = [
  //   {
  //     title: req.body,
  //     label: req.body,
  //     time: req.body,
  //     read: req.body,
  //     cover: req.body,
  //     message: req.body,
  //     info: req.body
  //   }
  // ]
  // db.newsList.create(blogslist, err => {
  //   if (err) {
  //     res.send(err)
  //   }
  // })
})

module.exports = router
