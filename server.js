const express = require('express');
const server = express();

const userRouter = require('./users/userRouter.js');

const postRouter = require('./posts/postRouter.js');

server.use(logger);
server.use('/api/users', userRouter);
server.use('/api/posts', postRouter);
// server.use(validateUserId());
// server.use(validateUser());
// server.use(validatePost());

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {
  const method = req.method;
  const endpoint = req.originalUrl;
  
  console.log(`${method} to ${endpoint}`);
  next();
};
  


// function validateUserId(id) {
//   return function (req, res, next) {
//     if (!id) {
//       res.status(400).json({message: "invalid user id"});
//     } else {
//       req.user = id;
//     }
//     next();
//   };
// };



// function validateUser() {
//   return function (req, res, next) {
//     const { name } = req.body;
//     if (!body) {
//       res.status(400).json({ message: "missing user data" });
//     } if (!name) {
//       res.status(400).json({ message: "missing required name field" });
//     } else {

//       // res.status(201).json(return here???)
//     }
//     next();
//   };
// };

// function validatePost() {
//   return function (req, res, next) {
//     const { text } = req.body;
//     if (!body) {
//       res.status(400).json({message: "missing post data"})
//     } if (!text) {
//       res.status(400).json({ message: "missing required text field"})
//     } else {
//       // res.status(201).json(???)
//     }
//   }
// }

module.exports = server;
