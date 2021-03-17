import {addNewList} from "../controllers/listController";
import {addNewTodo} from "../controllers/todoController";

const routes = (app) => {
    app.route('/list')
        .get( (req, res, next) => {
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request from: ${req.method}`)
            next();
        }, (req, res) => {
            res.send('Requête GET réussie')
        })
        .post(addNewList);

    app.route('/list/:listId')
        .put( (req, res) =>
            res.send('Requête PUT réussie')
        )
        .delete((req, res) =>
            res.send('Requête DELETE réussie')
        );

    app.route('/list/todo')
        .get( (req, res) =>
            res.send('Requête GET réussie')
        )
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
