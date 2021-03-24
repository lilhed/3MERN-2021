const TodoModel = require('../models/todo')
const ListController = require('./list')

module.exports = {
  create: (data, listId) => {
    return new Promise((resolve, reject) => {
      const newTodo = new TodoModel(data)

      return newTodo.save((err, todo) => {
        if (err) {
          return reject(err)
        }

        return ListController.read(listId).then((list) => {
          list.todos.push(newTodo)
          list.save()

          return resolve(todo)
        }).catch(() => {
          return reject(new Error('List does not exist'))
        })
      })
    })
  },
  read: (_id) => {
    return new Promise((resolve, reject) => {
      const filter = {}

      if (_id) {
        filter._id = _id
      }

      return TodoModel.find(filter, (err, todo) => {
        if (err) {
          return reject(err)
        }

        if (_id) {
          return resolve(todo[0])
        }

        return resolve(todo)
      })
    })
  },
  update: (_id, data) => {
    return new Promise((resolve, reject) => {
      return TodoModel.findOne({ _id }, (err, todo) => {
        if (err) {
          return reject(err)
        }

        if (!todo) {
          return reject(new Error('Todo does not exist'))
        }

        return TodoModel.updateOne({ _id }, { $set: data }, (updateErr, updateTodo) => {
          if (updateErr) {
            return reject(updateErr)
          }

          return resolve(updateTodo)
        })
      })
    })
  },
  delete: (_id) => {
    return new Promise((resolve, reject) => {
      return TodoModel.deleteOne({ _id }, (err) => {
        if (err) {
          return reject(err)
        }

        return resolve(true)
      })
    })
  }
}
