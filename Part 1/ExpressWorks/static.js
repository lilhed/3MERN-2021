const express = require('express');
const path = require('path');


// config
const port = process.argv[2];
const app = express();

app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));


// listener
app.listen(port, () => console.log('Listening on localhost:' + port));