const express = require('express');

require('./config/database-config.js');
const todoRouter = require('./routes/todo');

const app = express();
const port = process.argv[2] | 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/todos', todoRouter);

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});














