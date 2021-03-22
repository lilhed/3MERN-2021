require('dotenv').config({path: './config.env'});

const express = require('express');
const cors = require('cors');

const connectDB = require('./database/connect');
const todoRouter = require('./routes/todo');

const port = process.argv[2] | 9000;
const app = express();
connectDB();

var corsOpts = {
  origin: ['http://localhost:3000'],
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE']
};

app.use(cors(corsOpts));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/todos', todoRouter);

app.listen(port, () => {
  console.log(`TODO server listening on ${port}`);
});