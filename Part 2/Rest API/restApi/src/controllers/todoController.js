import mongoose from 'mongoose'
import {
    TodoSchema
} from '../models/todoModel'

const Todo = mongoose.model('Todo', TodoSchema)

export const addTodo = (req, res) => {
    let newTodo = new Todo(req.body)
    newTodo.save((err, todo) => {
        if (err) {
            err.send(err)
        }
        res.json(todo)
    })
}
export const getTodo = (req, res) => {
    Todo.find({}, (err, todo) => {
        if (err) {
            err.send(err)
        }
        res.json(todo)
    })
}