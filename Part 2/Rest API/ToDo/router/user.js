const express = require('express')

const router = express.Router()

const UserController = require('../controllers/user')

router.get('/', (req, res) => {
  return UserController.read(req.user.id).then((data) => {
    return res.json(data)
  })
})

router.put('/', (req, res) => {
  const userId = req.user.id
  const user = req.body

  if (!userId) {
    return res.status(400).send('Invalid User ID')
  }

  if (!user) {
    return res.status(400).send('Invalid User Schema')
  }

  return UserController.update(userId, user).then(() => {
    return res.json({ success: true })
  })
})

router.delete('/', (req, res) => {
  const userId = req.user.id

  if (!userId) {
    return res.status(400).send('Invalid User ID')
  }

  return UserController.delete(userId).then(() => {
    return res.status(200).end()
  })
})

module.exports = router
