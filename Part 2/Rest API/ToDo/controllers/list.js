const ListModel = require('../models/list')

module.exports = {
  create: (data) => {
    return new Promise((resolve, reject) => {
      const newList = new ListModel(data)

      return newList.save((err, list) => {
        if (err) {
          return reject(err)
        }

        return resolve(list)
      })
    })
  },
  read: (_id, user_id) => {
    return new Promise((resolve, reject) => {
      const filter = { 'user': user_id }

      if (_id) {
        filter._id = _id
      }

      return ListModel.find(filter).populate('todos').exec((err, list) => {
        if (err) {
          return reject(err)
        }

        list = JSON.parse(JSON.stringify(list));

        list.forEach(obj => {
          obj.id = obj._id;
          delete obj._id;
        });

        if (_id) {
          return resolve(list[0])
        }

        return resolve(list)
      })
    })
  },
  update: (_id, user_id, data) => {
    return new Promise((resolve, reject) => {
      return ListModel.findOne({ '_id': _id, 'user': user_id }, (err, list) => {
        if (err) {
          return reject(err)
        }

        if (!list) {
          return reject(new Error('List does not exist'))
        }

        list.user = user_id

        return ListModel.updateOne({ '_id': _id, 'user': user_id }, { $set: data }, (updateErr, updateList) => {
          if (updateErr) {
            return reject(updateErr)
          }

          return resolve(updateList)
        })
      })
    })
  },
  delete: (_id, user_id) => {
    return new Promise((resolve, reject) => {
      return ListModel.deleteOne({ '_id': _id, 'user': user_id }, (err) => {
        if (err) {
          return reject(err)
        }

        return resolve(true)
      })
    })
  }
}
