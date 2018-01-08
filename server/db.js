const mongoose = require('mongoose')
const db = mongoose.connection

// 连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/nodeDemo', {
  useMongoClient: true
})

db.on('error', () => {
  console.log('数据库连接出错')
})

db.once('open', () => {
  console.log('数据库已连接')
})

const getLoginSchema = new mongoose.Schema({
  username: String,
  password: String
})

const getBlogsSchema = new mongoose.Schema({
  title: String,
  label: String,
  time: String,
  read: Number,
  cover: String,
  message: String,
  info: String
})
const getNewsSchema = new mongoose.Schema({
  title: String,
  time: String,
  label: String,
  read: Number,
  message: String
})

const Model = {
  getLogin: mongoose.model('login', getLoginSchema),
  getBlogs: mongoose.model('blogslist', getBlogsSchema),
  getNews: mongoose.model('newslist', getNewsSchema)
}

module.exports = Model
