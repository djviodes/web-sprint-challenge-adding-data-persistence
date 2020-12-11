const router = require("express").Router();

const Tasks = require("./model");

router.get("/", (req, res) => {
  Tasks.find()
    .then((tasks) => {
      for (let i in tasks) {
        if (tasks[i].completed === 0) {
          tasks[i].completed = false;
        } else {
          tasks[i].completed = true;
        }
      }
      res.status(200).json(tasks);
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
        stack: err.stack,
      });
    });
});

router.post("/", (req, res) => {
  const newTask = req.body;
  if (!newTask.project_id || !newTask.description) {
    res.status(400).json({
      message: "Please provide a project_id and description",
    });
  } else {
    Tasks.findById(newTask.project_id).then((data) => {
      if (data.length > 0) {
        Tasks.create(newTask)
          .then((task) => {
            if (task[0].completed === 0) {
              task[0].completed = false;
            } else {
              task[0].completed = true;
            }
            res.status(201).json(task[0]);
          })
          .catch((err) => {
            res.status(500).json({
              message: err.message,
              stack: err.stack,
            });
          });
      } else {
          res.status(404).json({
              message: `Could not find project #${data.project_id}`
          })
      }
    });
  }
});

module.exports = router;
