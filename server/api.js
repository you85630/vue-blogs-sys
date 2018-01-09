const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
const db = require('./db')

// 创建 application/x-www-form-urlencoded 编码解析
const urlencodedParser = bodyParser.urlencoded({
  extended: false
})

// 登录
router.post('/api/login', urlencodedParser, (req, res) => {
  const { username, password } = req.body
  db.getLogin.findOne({ username, password }, (err, doc) => {
    if (err) {
      res.send(err)
    }
    if (!doc) {
      res.send({
        code: 400,
        message: '账号不存在'
      })
    } else if (doc.password !== password) {
      res.send({
        code: 400,
        message: '密码输入错误'
      })
    } else if (doc.password === password) {
      res.send({
        code: 200,
        message: '登录成功',
        info: {
          token: 'SFSDFS21F32DSFSDF4234FSD4F53SD4F'
        }
      })
    }
  })
})
// 获取文章
router.get('/api/blogslist', (req, res) => {
  db.getBlogs.find({}, (err, doc) => {
    if (err) {
      res.send(err)
    } else {
      res.send(doc)
    }
  })
})
// 获取广告
router.get('/api/newslist', (req, res) => {
  db.getNews.find({}, (err, doc) => {
    if (err) {
      res.send(err)
    } else {
      res.send(doc)
    }
  })
})
// 增加文章
router.post('/api/blogslist', urlencodedParser, (req, res) => {
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
})
// 增加广告
router.post('/api/newslist', urlencodedParser, (req, res) => {
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
})
// 修改文章
router.post('/api/upblogslist', urlencodedParser, (req, res) => {
  const key = {
    _id: req.body._id
  }
  const upDate = {
    $set: {
      _id: req.body._id,
      title: req.body.title,
      label: req.body.label,
      read: req.body.read,
      cover: req.body.cover,
      message: req.body.message,
      info: req.body.info
    }
  }
  db.getBlogs.update(key, upDate, err => {
    if (err) {
      res.send(err)
    } else {
      res.send()
    }
  })
})
// 修改广告
router.post('/api/upnewslist', urlencodedParser, (req, res) => {
  const key = {
    _id: req.body._id
  }
  const upDate = {
    $set: {
      _id: req.body._id,
      title: req.body.title,
      label: req.body.label,
      read: req.body.read,
      message: req.body.message
    }
  }
  db.getNews.update(key, upDate, err => {
    if (err) {
      res.send(err)
    } else {
      res.send()
    }
  })
})
// 删除文章
router.post('/api/removeblogslist', urlencodedParser, (req, res) => {
  const key = {
    _id: req.body._id
  }
  db.getBlogs.remove(key, err => {
    if (err) {
      res.send(err)
    } else {
      res.send()
    }
  })
})
// 删除广告
router.post('/api/removenewslist', urlencodedParser, (req, res) => {
  const key = {
    _id: req.body._id
  }
  db.getNews.remove(key, err => {
    if (err) {
      res.send(err)
    } else {
      res.send()
    }
  })
})
module.exports = router
