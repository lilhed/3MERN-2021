const express = require('express')

const router = express.Router()

const ListController = require('../controllers/list')

router.post('/', (req, res) => {
    const list = req.body

    if(!list){
        return res.status(400).send('Invalid Data Format')
    }

    return ListController.create(list).then(() => {
        if(req.body && req.body.redirect){
            return res.redirect(req.body.redirect)
        }

        return res.json({
            'success': true,
            'list': list
        })

        return res.status(200).end()
    }).catch((err) => {
        return res.json({
            'success': false
        })
        return res.status(err.code || 500).send(err)
    })
})

router.get('/', (req, res) => {
    return ListController.read(null).then((data) => {
        return res.json(data)
    })
})

router.get('/:_id', (req, res) => {
    const listId = req.params._id

    if(!listId){
        return res.status(400).send('Invalid List ID')
    }

    return ListController.read(listId).then((data) => {
        return res.json(data)
    })
})

router.put('/:_id', (req, res) => {
    const listId = req.params._id
    const list = req.body

    if(!listId){
        return res.status(400).send('Invalid List ID')
    }

    if(!list){
        return res.status(400).send('Invalid List Schema')
    }

    return ListController.update(listId, list).then(() => {
        return res.status(200).end()
    })
})

router.delete('/:_id', (req, res) => {
    const listId = req.params._id

    if(!listId){
        return res.status(400).send('Invalid List ID')
    }

    return ListController.delete(listId).then(() => {
        return res.status(200).end()
    })
})

module.exports = router
