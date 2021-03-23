//EXERCICE 5
'use strict'
const express = require('express')
const stylus = require('stylus')
const app = express()
const path = process.argv[3] || path.join(__dirname, 'public')

app.use(stylus.middleware(path))
app.use(express.static(path))
app.listen(process.argv[2])