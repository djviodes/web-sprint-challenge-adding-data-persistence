const router = require('express').Router();

const Projects = require('./model');

router.get('/', (req, res) => {
    Projects.find()
        .then(projects => {
            for (let i in projects) {
                if (projects[i].completed === 0) {
                    projects[i].completed = false
                } else {
                    projects[i].completed = true
                }
            }
            res.status(200).json(projects)
        })
        .catch(err => {
            res.status(500).json({
                message: err.message,
                stack: err.stack
            });
        });
});

router.post('/', (req, res) => {
    const newProject = req.body;
    Projects.create(newProject)
        .then(project => {
            for (let i in project) {
                if (project[i].completed === 0) {
                    project[i].completed = false
                } else {
                    project[i].completed = true
                }
            }
            res.status(201).json(project)
        })
        .catch(err => {
            res.status(500).json({
                message: err.message,
                stack: err.stack
            });
        });
});

module.exports = router;