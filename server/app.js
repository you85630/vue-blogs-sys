const express = require('express')
const api = require('./api')
const app = express()

// 端口
app.set('port', process.env.port || 4000)

// CORS跨域配置
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild'
  )
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
  if (req.method === 'OPTIONS') {
    res.send(200)
  } else {
    next()
  }
})

app.use(api)

app.listen(app.get('port'), () => {
  console.log('服务器开启：http://localhost:' + app.get('port'))
})
