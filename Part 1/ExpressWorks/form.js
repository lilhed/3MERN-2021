const bodyparser = require('body-parser');
const express = require('express');
const path = require('path');


// config
const port = process.argv[2];
const app = express();

app.use(bodyparser.urlencoded({extended: false}));

app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'pug');


// api endpoints
app.post('/form', (req, res) => {
  const str = req.body.str.split('').reverse().join('');
  res.send(str);
});


// listener
app.listen(port, () => console.log('Listening on localhost:' + port));