const express = require('express')
const cors = require('cors')
const path = require('path')

require('./database/connect')

const todoRouter = require('./router/todo')
const listRouter = require('./router/list')

const app = express()
const port = 8000

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: false}))

const staticPath = path.join(__dirname, '/views')
app.use(express.static(staticPath))

app.use('/lists/:list_id/todos', todoRouter)
app.use('/lists', listRouter)

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
