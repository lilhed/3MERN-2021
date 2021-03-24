const UserModel = require('../models/user')

module.exports = {
  login: (email, password) => {
    return new Promise((resolve, reject) => {
      return UserModel.findOne({
        email: email
      }).exec((err, user) => {
        if (err) {
          return reject(err)
        }

        user.validatePassword(password).then((success) => {
          if (success) {
            return resolve(user)
          }

          return resolve(false)
        })
      })
    })
  },
  create: (data) => {
    return new Promise((resolve, reject) => {
      const newUser = new UserModel(data)

      return newUser.save((err, user) => {
        if (err) {
          return reject(err)
        }

        return resolve(user)
      })
    })
  },
  read: (_id) => {
    return new Promise((resolve, reject) => {
      return UserModel.find({ '_id': _id }).populate('lists').exec((err, user) => {
        if (err) {
          return reject(err)
        }

        user = JSON.parse(JSON.stringify(user));

        user.forEach(obj => {
          obj.id = obj._id;
          delete obj._id;
        });

        return resolve(user[0])
      })
    })
  },
  update: (_id, data) => {
    return new Promise((resolve, reject) => {
      return UserModel.findOne({ _id }, (err, user) => {
        if (err) {
          return reject(err)
        }

        if (!user) {
          return reject(new Error('User does not exist'))
        }

        return UserModel.updateOne({ _id }, { $set: data }, (updateErr, updateUser) => {
          if (updateErr) {
            return reject(updateErr)
          }

          return resolve(updateUser)
        })
      })
    })
  },
  delete: (_id) => {
    return new Promise((resolve, reject) => {
      return UserModel.deleteOne({ _id }, (err) => {
        if (err) {
          return reject(err)
        }

        return resolve(true)
      })
    })
  }
}
