const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const School = require('./db/schools');

router.post('/schools', (req, res) => {
    // create new school document
    School.create(req.body, (err, school) => {
        if(err) {
            console.log(err);
        }
        res.status(200).json({id: school._id});
    });
})

router.get('/schools', (req, res) => {
    // retrieve all schools from the database
    School.find({}, (err, schools) => {
        if(err) {
            console.log(err);
        }
        res.status(200).json(schools);
    })

});

module.exports = router;
