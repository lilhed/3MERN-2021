const RequestMiddleware = require('../authorization/middlewares/request.validation');

const TodoController  = require('./controllers/todo.controller');
const TodoMiddleware = require('./middlewares/todo.middleware');

module.exports = (app) => {
    
    // GET ALL TODOS
    app.get('/todos', [
        TodoController.getAll
    ]);

    // GET TODO BY ID
    app.get('/todo', [
        RequestMiddleware.queryParametersNeeded("id", "string"),
        TodoMiddleware.todoExist,
        TodoController.getById
    ]);

    // CREATE A TODO
    app.post('/todo', [
        RequestMiddleware.bodyParametersNeeded([ "Title", "Description" ], "string"),
        RequestMiddleware.bodyParametersNeeded([ "Priority" ], "integer"),
        RequestMiddleware.bodyParametersNeeded([ "Done" ], "boolean"),
        RequestMiddleware.parseDate("body", "Creation"),
        RequestMiddleware.parseDate("body", "Deadline"),
        TodoController.create
    ]);

    // UPDATE A TODO
    app.patch('/todo', [
        RequestMiddleware.queryParametersNeeded("id", "string"),
        TodoMiddleware.todoExist,
        TodoController.update
    ]);

    // DELETE A TODO
    app.delete('/todo', [
        RequestMiddleware.queryParametersNeeded("id", "string"),
        TodoMiddleware.todoExist,
        TodoController.delete
    ]);



}