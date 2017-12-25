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

const getBlogsSchema = new mongoose.Schema({
  title: String,
  label: String,
  time: Date,
  read: Number,
  cover: String,
  message: String,
  info: String
})
const getNewsSchema = new mongoose.Schema({
  title: String,
  time: Date,
  label: String,
  read: Number,
  message: String
})

const Model = {
  getBlogs: mongoose.model('getBlogs', getBlogsSchema),
  getNews: mongoose.model('getNews', getNewsSchema)
}

module.exports = Model
