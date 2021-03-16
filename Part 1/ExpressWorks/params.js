const express = require('express');
const crypto = require('crypto');

// config
const port = process.argv[2];
const app = express();


// api endpoints
app.put('/message/:id', (req, res) => {
  res.send(
    require('crypto')
      .createHash('sha1')
      .update(new Date().toDateString() + req.query.id)
      .digest('hex')
  );
});


// listener
app.listen(port, () => console.log('Listening on localhost:' + port));