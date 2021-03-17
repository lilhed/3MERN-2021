const express = require('express')
const app = express()
const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended: false}))


app.get('/form', function (req, res) {
    res.end('<form><input name="str"/></form>')
})

app.post('/form', (req, res) => {
  res.end(req.body.str.split('').reverse().join(''))
});
app.listen(process.argv[2])
