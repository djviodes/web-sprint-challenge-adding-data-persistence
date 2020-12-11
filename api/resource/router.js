const router = require("express").Router();

const Resources = require("./model");

router.get("/", (req, res) => {
  Resources.find()
    .then((resources) => {
      for (let i in resources) {
        if (resources[i].completed === 0) {
          resources[i].completed = false;
        } else {
          resources[i].completed = true;
        }
      }
      res.status(200).json(resources);
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
        stack: err.stack,
      });
    });
});

router.post("/", (req, res) => {
  const newResource = req.body;
  Resources.create(newResource)
    .then((resource) => {
      if (resource[0].completed === 0) {
        resource[0].completed = false;
      } else {
        resource[0].completed = true;
      }
      res.status(201).json(resource[0]);
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
        stack: err.stack,
      });
    });
});

module.exports = router;
