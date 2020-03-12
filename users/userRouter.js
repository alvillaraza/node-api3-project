const express = require("express");
const server = express();
const userDb = require("./userDb.js");

const router = express.Router();

// server.use(validateUserId());
// server.use(validateUser());
// server.use(validatePost());

server.use(express.json());

router.post("/", validateUser, (req, res) => {
  const name = req.body;

  userDb
    .insert(name)
    .then(randoUser => {
      res.status(201).json({ randoUser: name });
    })
    .catch(error => {
      // log error to database
      console.log(error);
      res.status(500).json({ message: "Error" });
    });
});

router.post("/:id/posts", (req, res) => {
  const text = req.body;
  // const post = req.body;
  const id = req.params.id;

  userDb
    .insert(text)
    .then(something => {
      res.status(201).json({message: "success"});
    })
    .catch(error => {
      // log error to database
      console.log(error);
      res.status(500).json({ message: "Error" });
    });
});

router.get("/", (req, res) => {
  userDb.get().then(users => {
    res.status(200).json(users);
  });
});

router.get("/:id", (req, res) => {
  userDb.getById(req.params.id).then(user => {
    res.status(200).json(user);
  });
});

router.get("/:id/posts", (req, res) => {
  userDb.getUserPosts(req.params.id).then(user => {
    if (user) {
      res.status(200).json(user);
    }
  });
});

router.delete("/:id", (req, res) => {
  userDb.remove(req.params.id).then(count => {
    res.status(200).json(count);
  });
});

router.put("/:id", (req, res) => {
  // do your magic! check this
  userDb
    .update(req.params.id, req.body)
    .then(updateUser => {
      if (updateUser) {
        res.status(200).json(updateUser);
      }
    })
    .catch(error => {
      // log error to database
      console.log(error);
      res.status(500).json({ message: "Error" });
    });
});

//custom middleware

function validateUserId(req, res, next) {
  // const id = req.param.id;
  // do your magic!
  // if (!id) {
  //   res.status(400).json({message: "invalid user id"});
  // } else {
  //   req.user = id;
  // }
  // next();
}

function validateUser(req, res, next) {
  // console.log(req.name);
  // // do your magic!
  const {name} = req.body;
  // console.log(req.body);
    if (!req.body) {
      res.status(400).json({ message: "missing user data" });
    } if (!name) {
      res.status(400).json({ message: "missing required name field" });
    }
  next();
}

function validatePost(req, res, next) {
  // do your magic! check if ths works!
  //   const { text } = req.body;
  //   if (!body) {
  //     res.status(400).json({message: "missing post data"})
  //   } if (!text) {
  //     res.status(400).json({ message: "missing required text field"})
  // }
  // next();
}

module.exports = router;
