const mongoose = require('mongoose');

const todo = new mongoose.Schema({
    title: String,
    description: String,
    priority: Number,
    done: Boolean,
    creation: Date,
    deadline: Date
});

module.exports = mongoose.model('ToDo', todo)