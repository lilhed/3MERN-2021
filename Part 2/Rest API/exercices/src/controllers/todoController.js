import mongoose from "mongoose";
import { TodoSchema } from "../models/todoModel";

const Todo = mongoose.model('Todo', TodoSchema)

export const addNewTodo = (req, res) => {
    let newTodo = new Todo(req.body);

    newTodo.save((err, todo) => {
        if (err) {
            res.send(err);
        }
        res.json(todo);
    });
};

export const getTodos = (req, res) => {
    Todo.find({}, (err, todo) => {
        if (err) {
            res.send(err);
        }
        res.json(todo);
    });
};

export const getTodoWithID = (req, res) => {
    Todo.findById(req.params.todoId, (err, todo) => {
        if (err) {
            res.send(err);
        }
        res.json(todo);
    });
};

export const UpdateTodo = (req, res) => {
    Todo.findByIdAndUpdate({ _id: req.params.todoId }, req.body, { new: true }, (err, todo) => {
        if (err) {
            res.send(err);
        }
        res.json(todo);
    });
};

export const DeleteTodo = (req, res) => {
    Todo.remove({ _id: req.params.todoId }, (err) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Supression de la todo réussie'});
    });
};