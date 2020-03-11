const express = require('express');
const userDb = require('./userDb.js');

const router = express.Router();

router.post('/', (req, res) => {
  const name = req.body;
  const newUser = req.body;

  userDb.insert(newUser)
    .then(user => {
    if (!name) {
      res.status(400).json({ message: "Please provide name for user" });
      }
      res.status(201).json(user);
  })
});

router.post('/:id/posts', (req, res) => {
  // do your magic!
});

router.get('/', (req, res) => {
  userDb.get()
    .then(users => {
      res.status(200).json(users);
    });
});

router.get('/:id', (req, res) => {
  userDb.getById(req.params.id)
    .then(user => {
      res.status(200).json(user);
  })
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
  userDb.getUserPosts(req.params.id)
    .then(user => {
      if (user) {
        res.status(200).json(user);
    }
  })
});

router.delete('/:id', (req, res) => {
  // do your magic!
  userDb.remove(req.params.id)
    .then(count => { res.status(200).json(count) });
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
