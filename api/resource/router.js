const router = require('express').Router();

const Resources = require('./model');

router.get('/', (req, res) => {
    Resources.find()
        .then(resources => {
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
            res.status(201).json(resource)
        })
        .catch(err => {
            res.status(500).json({
                message: err.message,
                stack: err.stack
            });
        });
});