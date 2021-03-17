const mongoose = require('mongoose');

const list = new mongoose.Schema({
    title: String,
    description: String
});

module.exports = mongoose.model('List', list)