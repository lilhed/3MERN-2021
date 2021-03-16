const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const port = process.argv[2]

app.use(bodyParser.urlencoded({extended: false}))

app.post('/form', (req, res) => {
  const str = req.body.str;
  const back_str = str.split('').reverse().join('');
  res.send(back_str);
})

app.listen(port)