//EXERCICE 3
'use strict'
const express = require('express')
const app = express()
const templatePath = process.argv[3]
const port = process.argv[2]

app.set('views', templatePath)
app.set('view engine', 'pug')
app.get('/home', (req, res) => {
  res.render('index', { date: new Date().toDateString()})
})
app.listen(port)