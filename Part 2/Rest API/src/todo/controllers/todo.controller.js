const boom = require('@hapi/boom');
const TodoService = require('../service/todo.service');


exports.getAll = async(req, res, next) => {
    try {
        const todos = await TodoService.findAll();
        return (todos) ?
            res.status(200).json(todos) :
            next(boom.badRequest("Fail to load todos."));
    } catch (err) {
        return next(err.isBoom ? err : boom.internal(err.name));
    }
}

exports.getById = async(req, res, next) => {
    try {
        const todo = await TodoService.findById(req.query.id);
        return (todo) ?
            res.status(200).json(todo) :
            next(boom.badRequest("This todo does not exist."));
    } catch (err) {
        return next(err.isBoom ? err : boom.internal(err.name));
    }
}

exports.create = async(req, res, next) => {
    try {
        const todo = await TodoService.create(req.body);
        return (todo) ? 
            res.status(201).json(todo) :
            next(boom.badRequest("Fail to create todo."));
    } catch (err) {
        return next(err.isBoom ? err : boom.internal(err.name));
    }
}

exports.update = async(req, res, next) => {
    try {
        const todo = await TodoService.update(req.query.id, req.body);
        return (todo) ? 
            res.status(204).json(todo) :
            next(boom.badRequest("Fail to update todo."));
    } catch (err) {
        return next(err.isBoom ? err : boom.internal(err.name));
    }
}

exports.delete = async(req, res, next) => {
    try {
        const deleted = await TodoService.remove(req.query.id);
        return (deleted) ?
            res.status(204).json({ deleted: true }) : 
            next(boom.badRequest("Fail to delete todo."));
    } catch (err) {
        return next(err.isBoom ? err : boom.internal(err.name));
    }
}
