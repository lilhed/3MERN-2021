import {addTodo,getTodo} from '../controllers/todoController'

const routes = (app) => {
    app.route("/todo")
        .get((req, res, next) => {
                // middleware
                console.log(`Request from : ${req.originalUrl}`)
                console.log(`Request type : ${req.method}`)
                next()
            },getTodo)

        .post(addTodo);

    app.route('/todo/:todoID')
        .put((req, res) =>
            res.send("PUT Request sccessfull!"))

        .delete((req, res) =>
            res.send("DELETE Request sccessfull!"));




}

export default routes