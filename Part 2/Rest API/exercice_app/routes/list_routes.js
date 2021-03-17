module.exports = (app) => {
    const lists = require('../controllers/list_controller.js');

    app.post('/lists', lists.create);

    app.get('/lists', lists.readAll);

    app.get('/lists/:listId', lists.read);

    app.put('/lists/:listId', lists.update);

    app.delete('/lists/:listId', lists.delete);
}