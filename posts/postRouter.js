const express = require('express');
const postDb = require('./postDb.js');

const router = express.Router();

router.get('/', (req, res) => {
  // do your magic!
  postDb.get()
    .then(post => {
      res.status(200).json(post);
    });
});

router.get('/:id', (req, res) => {
  // do your magic!
  postDb.getById(req.params.id)
    .then(post => {
      res.status(200).json(post);
  })

});

router.delete('/:id', (req, res) => {
  // do your magic!
  postDb.remove(req.params.id)
    .then(count => { res.status(200).json(count) });
});

router.put('/:id', (req, res) => {
  // do your magic!
});

// custom middleware

function validatePostId(req, res, next) {
  // do your magic!
}

module.exports = router;
