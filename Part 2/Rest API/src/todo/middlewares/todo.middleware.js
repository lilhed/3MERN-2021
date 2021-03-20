const boom = require('@hapi/boom');
const TodoService = require('../service/todo.service');


exports.todoExist = async(req, res, next) => {
    try {
        const todo = await TodoService.findById(req.query.id);
        return (todo) ?
            next() :
            next(boom.badRequest(`There is no todo with ID '${req.query.id}'.`));
    } catch (err) {
        return next(err.isBoom ? err : boom.internal(err.name));
    }
}