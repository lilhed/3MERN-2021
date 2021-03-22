const express = require('express');

require('./database/connect');
const todoRouter = require('./routes/todo');

const app = express();
const port = process.argv[2] | 9000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/todos', todoRouter);

app.listen(port, () => {
  console.log(`TODO server listening on ${port}`);
});