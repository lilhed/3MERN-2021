module.exports = (app) => {
    const todos = require('../controllers/todo_controller.js');

    app.post('/todo', todos.create);

    app.get('/todo', todos.readAll);

    app.get('/todo/:todoId', todos.read);

    app.put('/todo/:todoId', todos.update);

    app.delete('/todo/:todoId', todos.delete);
}