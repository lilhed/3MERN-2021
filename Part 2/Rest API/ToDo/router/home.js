const express = require('express')
const jwt = require('jsonwebtoken')
const SECRET = 'mykey'

const router = express.Router()

const UserController = require('../controllers/user')

router.post('/register', (req, res) => {
  const user = req.body

  if (!user) {
    return res.status(400).send('Invalid Data Format')
  }

  return UserController.create(user).then(() => {
    if (req.body && req.body.redirect) {
      return res.redirect(req.body.redirect)
    }

    return res.json({
      'success': true,
      'user': user
    })
  }).catch(() => {
    return res.json({
      'success': false
    })
  })
})

router.post('/login', (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ message: 'Error. Please enter the correct username and password' })
  }

  return UserController.login(req.body.email, req.body.password).then((data) => {
    if (req.body && req.body.redirect) {
      return res.redirect(req.body.redirect)
    }

    if (!data) {
      return res.json({
        'success': false
      })
    }

    const token = jwt.sign({
      id: data.id,
      email: data.email
    }, SECRET, { expiresIn: '3 hours' })

    return res.json({
      access_token: token
    })
  }).catch(() => {
    return res.json({
      'success': false
    })
  })
})

module.exports = router
