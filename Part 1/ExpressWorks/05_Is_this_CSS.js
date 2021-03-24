const express = require('express');
const app = express();
const stylus = require('stylus');
const path = require('path');
const [ ,, port, pagePath ] = process.argv;

app.use(stylus.middleware(pagePath || path.join(__dirname, '/public')));
app.use(express.static(pagePath || path.join(__dirname, '/public')));

app.listen(port);