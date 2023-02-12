const express = require('express')
const app = express()
var mongoose = require('mongoose')
const port = 3000
var cors = require('cors')
const router = require('./routers/blog')
var bodyParser = require('body-parser')

mongoose.connect('mongodb://127.0.0.1:27017/BlogsDB', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, (err) => {
    if (err) throw err
    console.log('Connected dataBase');
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(router)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})