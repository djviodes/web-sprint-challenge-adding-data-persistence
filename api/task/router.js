const router = require('express').Router();

const Tasks = require('./model');

router.get('/', (req, res) => {
    Tasks.find()
        .then(tasks => {
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