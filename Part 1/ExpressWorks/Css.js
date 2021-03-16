const express = require('express')
const app = express()

const port = process.argv[2]
const file = process.argv[3]

app.use(require('stylus').middleware(file));
app.use(express.static(file));

app.listen(port)