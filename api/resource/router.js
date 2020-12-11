const router = require('express').Router();

const Resources = require('./model');

router.get('/', (req, res) => {
    Resources.find()
        .then(resources => {
            for (let i in resources) {
                if (resources[i].completed === 0) {
                    resources[i].completed = false
                } else {
                    resources[i].completed = true
                }
            }
            res.status(200).json(resources)
        })
        .catch(err => {
            res.status(500).json({
                message: err.message,
                stack: err.stack
            });
        });
});

router.post('/', (req, res) => {
    const newResource = req.body;
    Resources.create(newResource)
        .then(resource => {
            for (let i in resource) {
                if (resource[i].completed === 0) {
                    resource[i].completed = false
                } else {
                    resource[i].completed = true
                }
            }
            res.status(201).json(resource)
        })
        .catch(err => {
            res.status(500).json({
                message: err.message,
                stack: err.stack
            });
        });
});

module.exports = router;