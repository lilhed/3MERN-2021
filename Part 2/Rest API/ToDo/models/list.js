const mongoose = require('mongoose')

const { Schema } = mongoose;

const ListSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User',
    required: true
  },
  todos: [
    {
      type: Schema.ObjectId,
      ref: 'Todo'
    }
  ]
})

module.exports = mongoose.model('List', ListSchema)
