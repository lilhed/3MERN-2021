const List = require('../models/list_model.js');

module.exports = {
    create: (req, res) => {
        addCors(res);
        if(!req.body) {
            return res.status(400).send({
                message: "Create: List can not be empty"
            });
        }

        const list = new List({
            title: req.body.title,
            description: req.body.description
        });

        list.save()
            .then(data => {
                res.send(data);
            }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the list."
            });
        });
    },

    readAll: (req, res) => {
        addCors(res);
        List.find()
            .then(lists => {
                res.send(lists);
            }).catch(err => {
            res.status(500).send({
                message: err.message || "Read all: Some error occurred while retrieving lists."
            });
        });
    },

    read: (req, res) => {
        addCors(res);
        List.findById(req.params.listId)
            .then(list => {
                if(!list) {
                    return res.status(404).send({
                        message: "Read: List not found with id " + req.params.listId
                    });
                }
                res.send(list);
            }).catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Read: List not found with id " + req.params.listId
                });
            }
            return res.status(500).send({
                message: "Read: Error retrieving list with id " + req.params.listId
            });
        });
    },

    update: (req, res) => {
        addCors(res);
        if(!req.body) {
            return res.status(400).send({
                message: "Update: List can not be empty"
            });
        }

        List.findByIdAndUpdate(req.params.listId, {
            title: req.body.title,
            description: req.body.description
        }, {new: true})
            .then(list => {
                if(!list) {
                    return res.status(404).send({
                        message: "Update: List not found with id " + req.params.listId
                    });
                }
                res.send(list);
            }).catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Update: List not found with id " + req.params.listId
                });
            }
            return res.status(500).send({
                message: "Update: Error updating list with id " + req.params.listId
            });
        });
    },

    delete: (req, res) => {
        addCors(res);
        List.findByIdAndRemove(req.params.listId)
            .then(list => {
                if(!list) {
                    return res.status(404).send({
                        message: "Delete: List not found with id " + req.params.listId
                    });
                }
                res.send({message: "Delete: List deleted successfully!"});
            }).catch(err => {
            if(err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Delete: List not found with id " + req.params.listId
                });
            }
            return res.status(500).send({
                message: "Delete: Could not delete list with id " + req.params.listId
            });
        });
    }
}

function addCors(res){
    res.set({
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Allow-Credentials': false,
        'Access-Control-Allow-Methods': 'GET, POST',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept',
    });
}