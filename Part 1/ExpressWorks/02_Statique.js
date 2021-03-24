const express = require('express');
const app = express();
const path = require('path');
const [ ,, port, pagePath ] = process.argv;

app.use(express.static(pagePath || path.join(__dirname, '/public')));
app.listen(port);