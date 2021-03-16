const express = require('express');


// config
const port = process.argv[2];
const app = express();


// api endpoints
app.get('/search', (req, res) => {
  res.send(req.query);
});


// listener
app.listen(port, () => console.log('Listening on localhost:' + port));