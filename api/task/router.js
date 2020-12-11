const router = require('express').Router();

const Tasks = require('./model');

router.get('/', (req, res) => {
    Tasks.find()
        .then(tasks => {
            for (let i in tasks) {
                if (tasks[i].completed === 0) {
                    tasks[i].completed = false
                } else {
                    tasks[i].completed = true
                }
            }
            res.status(200).json(tasks)
        })
        .catch(err => {
            res.status(500).json({
                message: err.message,
                stack: err.stack
            });
        });
});

router.post('/', (req, res) => {
    const newTask = req.body;
    Tasks.create(newTask)
        .then(task => {
            for (let i in task) {
                if (task[i].completed === 0) {
                    task[i].completed = false
                } else {
                    task[i].completed = true
                }
            }
            res.status(201).json(task)
        })
        .catch(err => {
            res.status(500).json({
                message: err.message,
                stack: err.stack
            });
        });
});

module.exports = router;