const express = require('express')

const router = express.Router({mergeParams: true})

const TodoController = require('../controllers/todo')

router.post('/', (req, res) => {
    const todo = req.body
    const listId = req.params && req.params.list_id

    if(!todo){
        return res.status(400).send('Invalid Data Format')
    }

    if(!listId){
        return res.status(400).send('Invalid List ID')
    }

    todo.list = listId

    return TodoController.create(todo, listId).then(() => {
        if(req.body && req.body.redirect){
            return res.redirect(req.body.redirect)
        }

        return res.status(200).end()
    }).catch((err) => {
        return res.status(err.code || 500).send(err)
    })
})

router.put('/:_id', (req, res) => {
    const todoId = req.params._id
    const todo = req.body

    if(!todoId){
        return res.status(400).send('Invalid Todo ID')
    }

    if(!todo){
        return res.status(400).send('Invalid Todo Schema')
    }

    return TodoController.update(todoId, todo).then(() => {
        return res.status(200).end()
    })
})

router.delete('/:_id', (req, res) => {
    const todoId = req.params._id

    if(!todoId){
        return res.status(400).send('Invalid Todo ID')
    }

    return TodoController.delete(todoId).then(() => {
        return res.status(200).end()
    })
})

module.exports = router
