const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const School = require('./db/schools');

router.post('/schools', (req, res) => {
    console.log('here');
    School.create(req.body, (err, school) => {
        if(err) {
            console.log(err);
        }
        res.status(200).json({id: school._id});
    });
})

router.get('/schools', (req, res) => {
    res.status(200).json({status: 'its all good'});
});

module.exports = router;
