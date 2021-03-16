const express = require('express');


// config
const port = process.argv[2];
const app = express();


// api endpoints
app.get('/home', (req, res) => res.send('Hello World!'));


// listener
app.listen(port, () => console.log('Listening on localhost:' + port));