const mongoose = require('mongoose');

const ListModel = mongoose.model('List', new mongoose.Schema({ 
    title: String, 
    description: String
}));

module.exports = mongoose.model(ListModel)