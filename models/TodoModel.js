const mongoose = require('mongoose');

const TodoModel = mongoose.model('Todo', new mongoose.Schema({ 
    title: String, 
    description: String,  
    priority: Number, 
    done:Boolean, 
    creation: Date, 
    deadline: Date 
}));

module.exports = mongoose.model(TodoModel)