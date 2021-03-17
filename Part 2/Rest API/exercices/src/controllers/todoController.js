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
    Todo.find({}, (err, list) => {
        if (err) {
            res.send(err);
        }
        res.json(list);
    });
};