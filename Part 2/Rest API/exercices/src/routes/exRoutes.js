import {addNewList, getLists} from "../controllers/listController";
import {addNewTodo, getTodos} from "../controllers/todoController";

const routes = (app) => {
    app.route('/list')
        .get( (req, res, next) => {
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request from: ${req.method}`)
            next();
        }, getLists)

        .post(addNewList);

    app.route('/list/:listId')
        .put( (req, res) =>
            res.send('Requête PUT réussie')
        )
        .delete((req, res) =>
            res.send('Requête DELETE réussie')
        );

    app.route('/list/todo')
        .get(getTodos)
        .post(addNewTodo);

    app.route('/list/todo/:todoId')
        .put( (req, res) =>
            res.send('Requête PUT réussie')
        )
        .delete( (req, res) =>
            res.send('Requête DELETE réussie')
        );
}

export default routes;
