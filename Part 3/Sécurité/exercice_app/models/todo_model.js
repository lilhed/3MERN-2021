const mongoose = require('mongoose');
const User = require('./user_model');

const todo = new mongoose.Schema({
    title: String,
    description: String,
    priority: Number,
    done: Boolean,
    creation: Date,
    deadline: Date,
    _user: User._id
});

module.exports = mongoose.model('ToDo', todo)