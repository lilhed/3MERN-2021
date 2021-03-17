const RequestMiddleware = require('../authorization/middlewares/request.validation');

const ListController  = require('./controllers/list.controller');
const ListMiddleware = require('./middlewares/list.middleware');

module.exports = (app) => {
    
    // GET ALL LISTS
    app.get('/lists', [
        ListController.getAll
    ]);

    // GET LIST BY ID
    app.get('/list', [
        RequestMiddleware.queryParametersNeeded("id", "string"),
        ListMiddleware.listExist,
        ListController.getById
    ]);

    // CREATE A LIST
    app.post('/list', [
        RequestMiddleware.bodyParametersNeeded([ "Title", "Description" ], "string"),
        ListController.create
    ]);

    // UPDATE A LIST
    app.patch('/list', [
        RequestMiddleware.queryParametersNeeded("id", "string"),
        ListMiddleware.listExist,
        ListController.update
    ]);

    // DELETE A LIST
    app.delete('/list', [
        RequestMiddleware.queryParametersNeeded("id", "string"),
        ListMiddleware.listExist,
        ListController.delete
    ]);



}