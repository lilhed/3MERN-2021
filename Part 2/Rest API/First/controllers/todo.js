const TodoModel = require('../models/todo');

module.exports = {
    create: (data, callback) => {
        const newTodo = new TodoModel(data);

        return newTodo.save((err, todo) => {
            if(err) return callback(err);

            return callback(null, todo);
        });
    },
    read: (callback) => {
        return TodoModel.find({}, (err, todo) => {
            if(err) return callback(err);

            return callback(null, todo);
        });
    }
};
