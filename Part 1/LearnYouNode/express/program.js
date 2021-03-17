const express = require('express')
const app = express()
const filePath = process.argv[3] 
const port = process.argv[2]

app.use(express.static(filePath))
app.listen(port)
