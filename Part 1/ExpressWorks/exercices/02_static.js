const express = require('express');
const path = require('path');
const app = express();

const port = process.argv[2];
const site = process.argv[3];

app.use(express.static(site|| path.join(__dirname, 'public')));

app.listen(port);