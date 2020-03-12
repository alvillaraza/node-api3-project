const express = require('express');
const postDb = require('./postDb.js');

const router = express.Router();

router.get('/', (req, res) => {
  postDb.get()
    .then(post => {
      res.status(200).json(post);
    });
});

router.get('/:id', (req, res) => {
  postDb.getById(req.params.id)
    .then(post => {
      res.status(200).json(post);
  })

});

router.delete('/:id', (req, res) => {
  postDb.remove(req.params.id)
    .then(count => { res.status(200).json(count) });
});

router.put('/:id', (req, res) => {
  // do your magic! this doesn't work***
  // const text = req.body;
  // const changes = req.body;

  // if (!text) {
  //   res.status(400).json({ message: "please provide text for the post" });
  // }
  // postDb.update(req.params.id, changes)
  //   .then(updatedPost => {
  //     if (updatedPost) {
  //       res.status(200).json(updatedPost);
  //   }
  // })
});

// custom middleware

function validatePostId(req, res, next) {
  // do your magic!
 
}

module.exports = router;
