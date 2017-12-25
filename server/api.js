const express = require('express')
const router = express.Router()
const db = require('./db')

// 获取文章
router.get('/getBlogs', (req, res) => {
  db.getBlogs.find({}, (err, doc) => {
    if (err) {
      res.send(err)
    } else {
      res.send(doc)
    }
  })
})
// 获取广告
router.get('/getNews', (req, res) => {
  db.getNews.find({}, (err, doc) => {
    if (err) {
      res.send(err)
    } else {
      res.send(doc)
    }
  })
})

module.exports = router
