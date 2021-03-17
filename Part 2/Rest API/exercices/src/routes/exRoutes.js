import {addNewList, DeleteList, getLists, getListWithID, UpdateList} from "../controllers/listController";
import {addNewTodo, DeleteTodo, getTodos, getTodoWithID, UpdateTodo} from "../controllers/todoController";

const routes = (app) => {
    app.route('/list')
        .get( (req, res, next) => {
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request from: ${req.method}`)
            next();
        }, getLists)

        .post(addNewList);

    app.route('/list/:listId')
        .get(getListWithID)

        .put(UpdateList)

        .delete(DeleteList)

    app.route('/todo')
        .get(getTodos)

        .post(addNewTodo);

    app.route('/todo/:todoId')
        .get(getTodoWithID)

        .put(UpdateTodo)

        .delete(DeleteTodo);
}

export default routes;
