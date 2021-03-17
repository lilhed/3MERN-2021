const Todo = require('../models/todo_model.js');

module.exports = {
    create: (req, res) => {
        if(!req.body) {
            return res.status(400).send({
                message: "Create: Todo can not be empty"
            });
        }

        const todo = new Todo({
            title: req.body.title,
            description: req.body.description ,
            priority: req.body.priority,
            done: req.body.done,
            creation: req.body.creation,
            deadline: req.body.deadline
        });

        todo.save()
            .then(data => {
                res.send(data);
            }).catch(err => {
            res.status(500).send({
                message: err.message || "Create: Some error occurred while creating the Todo."
            });
        });
    },

    readAll: (req, res) => {
        Todo.find()
            .then(todos => {
                res.send(todos);
            }).catch(err => {
            res.status(500).send({
                message: err.message || "Read all: Some error occurred while retrieving Todos."
            });
        });
    },

    read: (req, res) => {
        Todo.findById(req.params.todoId)
            .then(todo => {
                if(!todo) {
                    return res.status(404).send({
                        message: "Read: Todo not found with id " + req.params.todoId
                    });
                }
                res.send(todo);
            }).catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Read: Todo not found with id " + req.params.todoId
                });
            }
            return res.status(500).send({
                message: "Read: Error retrieving Todo with id " + req.params.todoId
            });
        });
    },

    update: (req, res) => {
        if(!req.body) {
            return res.status(400).send({
                message: "Update: Todo can not be empty"
            });
        }

        Todo.findByIdAndUpdate(req.params.todoId, {
            title: req.body.title,
            description: req.body.description ,
            priority: req.body.priority,
            done: req.body.done,
            creation: req.body.creation,
            deadline: req.body.deadline
        }, {new: true})
            .then(todo => {
                if(!todo) {
                    return res.status(404).send({
                        message: "Update: Todo not found with id " + req.params.todoId
                    });
                }
                res.send(todo);
            }).catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Update: Todo not found with id " + req.params.todoId
                });
            }
            return res.status(500).send({
                message: "Update: Error updating Todo with id " + req.params.todoId
            });
        });
    },

    delete: (req, res) => {
        Todo.findByIdAndRemove(req.params.todoId)
            .then(todo => {
                if(!todo) {
                    return res.status(404).send({
                        message: "Delete: Todo not found with id " + req.params.todoId
                    });
                }
                res.send({message: "Delete: Todo deleted successfully!"});
            }).catch(err => {
            if(err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Delete: Todo not found with id " + req.params.todoId
                });
            }
            return res.status(500).send({
                message: "Delete: Could not delete Todo with id " + req.params.todoId
            });
        });
    }
}