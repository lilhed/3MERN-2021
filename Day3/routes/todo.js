const express = require('express');

const router = express.Router();

const TodoController = require('../controllers/todo');


/* CREATE TODOS listing. */
router
  .post('/', (req, res) => {
    const todo = req.body;

    if (!todo) {
      return res.status(400).send('Invalid data format');
    }

    return TodoController
      .create(todo, (err, created) => {
        if (err) {
          return res.status(err.code || 500).send(err);
        }
        return res.status(200).send(created);
      });
  });

/* READ TODOS listing. */
router
  .get('/', (req, res) => {
    return TodoController.read((err, datas) => {
      if (err) {
        return res.status(err.code || 500).send(err);
      }
      if (!datas || !datas.length) {
        return res.status(204).end();
      }
      return res.status(200).send(datas);
    });
  });

module.exports = router;