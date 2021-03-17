const express = require('express');

const todoRouter = require('./routes/todo');

const app = express();
const port = process.argv[2] | 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/todos', todoRouter);

app.listen(port, () => {
  console.log(`TODO server listening on ${port}`);
});
