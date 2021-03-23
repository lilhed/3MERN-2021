//EXERCICE 8
'use strict'
const express = require('express')
const fs = require('fs')
const app = express()
const port = process.argv[2]
const pathToFile = process.argv[3]

app.get('/books', (req, res) => {
  fs.readFile(pathToFile, (err, data) => {
    let books
    if(err) {
      res.sendStatus(500)
    }
    try {
      books = JSON.parse(data)
    }
    catch(err) {
      res.sendStatus(500)
    }
    res.json(books)
  })
})
app.listen(port)