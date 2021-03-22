const express = require('express')
const path = require('path')
const app = express()

app.listen(process.argv[2])

app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))

