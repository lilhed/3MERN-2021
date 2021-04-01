'use strict'
const express = require('express')
const app = express()
const path = process.argv[3] || path.join(__dirname, 'public')

app.use(express.static(path))
app.listen(process.argv[2])