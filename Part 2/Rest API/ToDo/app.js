const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const SECRET = 'mykey'

require('./database/connect')

const todoRouter = require('./router/todo')
const listRouter = require('./router/list')
const userRouter = require('./router/user')
const homeRouter = require('./router/home')

const app = express()
const port = 8000

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const extractBearerToken = headerValue => {
  if (typeof headerValue !== 'string') {
    return false
  }

  const matches = headerValue.match(/(bearer)\s+(\S+)/i)
  return matches && matches[2]
}

const checkTokenMiddleware = (req, res, next) => {
  const token = req.headers.authorization && extractBearerToken(req.headers.authorization)

  if (!token) {
    return res.status(401).json({ message: 'Error. Need a token' })
  }

  jwt.verify(token, SECRET, (err) => {
    if (err) {
      res.status(401).json({ message: 'Error. Bad token' })
    } else {
      req.user = jwt.decode(token, { complete: false })

      return next()
    }
  })
}

app.use('/', homeRouter)
app.use('/user', checkTokenMiddleware, userRouter)
app.use('/lists', checkTokenMiddleware, listRouter)
app.use('/lists/:list_id/todos', checkTokenMiddleware, todoRouter)

app.use((req, res) => {
  res.status(404).end()
})

app.use((err, res) => {
  res.status(err.status || 500).end()
})

app.listen(port, () => {
  console.log(`Listen on ${port}`)
})

module.exports = app

// mongod --port 27017 --dbpath=./data
