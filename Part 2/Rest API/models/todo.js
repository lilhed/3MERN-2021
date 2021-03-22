const mongoose = require('mongoose');

const { Schema } = mongoose;

const TodoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  priority: {
    type: Number,
    required: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
  creation: {
    type: Date,
    default: Date.now,
  },
  deadline: {
    type: Date,
    default: null,
  }
});

module.exports = mongoose.model('Todo', TodoSchema, 'todos');