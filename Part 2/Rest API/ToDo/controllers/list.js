const ListModel = require('../models/list')

module.exports = {
    create: (data) => {
        return new Promise((resolve, reject) => {
            const newList = new ListModel(data)

            return newList.save((err, list) => {
                if(err){
                    return reject(err)
                }

                return resolve(list)
            })
        })
    },
    read: (_id) => {
        return new Promise((resolve, reject) => {
            const filter = {}

            if(_id){
                filter._id = _id
            }

            return ListModel.find(filter).populate('todos').exec((err, list) => {
                if(err){
                    return reject(err)
                }

                if(_id){
                    return resolve(list[0])
                }

                return resolve(list)
            })
        })
    },
    update: (_id, data) => {
        return new Promise((resolve, reject) => {
            return ListModel.findOne({_id}, (err, list) => {
                if(err){
                    return reject(err)
                }

                if(!list){
                    return reject(new Error('List does not exist'))
                }

                return ListModel.updateOne({_id}, {$set: data}, (updateErr, updateList) => {
                    if(updateErr){
                        return reject(updateErr)
                    }

                    return resolve(updateList)
                })
            })
        })
    },
    delete: (_id) => {
        return new Promise((resolve, reject) => {
            return ListModel.deleteOne({_id}, (err) => {
                if(err){
                    return reject(err)
                }

                return resolve(true)
            })
        })
    }
}
