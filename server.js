const express = require("express");
const userRouter = require("./users/userRouter.js");
const postRouter = require("./posts/postRouter.js");
const server = express();

server.use(express.json());
server.use(logger);
server.use("/api/users", userRouter);
// server.use("/api/posts", postRouter);

server.get("/", (req, res) => {
  const environment = process.env;
  const port = process.env.PORT || 4220;
  res
    .status(200)
    .json({ api: `<h2>Let's write some middleware!</h2>`, port, environment });
});

//custom middleware
//where should this go???

function logger(req, res, next) {
  const method = req.method;
  const endpoint = req.originalUrl;
  const timeStamp = Date.now();

  console.log(`${method} to ${endpoint} at ${timeStamp}`);
  next();
}

module.exports = server;
