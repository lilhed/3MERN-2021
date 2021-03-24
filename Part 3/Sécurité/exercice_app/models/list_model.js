const mongoose = require('mongoose');
const User = require('./user_model');

const list = new mongoose.Schema({
    title: String,
    description: String,
    _user: User._id
});

module.exports = mongoose.model('List', list)