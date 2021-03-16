const express = require('express');
const fs = require('fs');


// config
const port = process.argv[2];
const app = express();


// api endpoints
app.get('/books', (req, res) => {
  fs.readFile(process.argv[3], (err, file) => {
    res.json(JSON.parse(file));
  });
});


// listener
app.listen(port, () => console.log('Listening on localhost:' + port));