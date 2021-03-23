//EXERCICE 6
'use strict'
const express = require('express')
const crypto = require('crypto')
const port = process.argv[2]
const app = express()

app.put('/message/:id', (req, res) => {
  const id = req.params.id
  res.send(
    crypto.createHash('sha1')
      .update(new Date()
      .toDateString() + id)
      .digest('hex')
    )
})
app.listen(port)