const mongoose = require('mongoose');

const URL = process.argv[3] || 'mongodb://localhost:27017/todoList';

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;