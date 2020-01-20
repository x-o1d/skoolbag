const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const School = require('./db/schools');


/**
 * /schools POST endpoint
 *
 * adds a new school document from the request body
 * to the database
 *
 * req.body SCHEMA {
 *   name: String,
 *   address: {
 *       street: String,
 *       suburb: String,
 *       postcode: Number,
 *       state: String
 *   },
 *   students: Number
 }
 */
router.post('/schools', (req, res) => {
    // create new school document
    School.create(req.body, (err, school) => {
        if(err) {
            console.log(err);
            res.status(500).json(err);
        }
        res.status(200).json({id: school._id});
    });
})


/**
 * /schools GET endpoint
 *
 * retrieves and returns an array of all school documents
 * from the database
 */
router.get('/schools', (req, res) => {
    // retrieve all schools from the database
    School.find({}, (err, schools) => {
        if(err) {
            console.log(err);
            res.status(500).json(err);
        }
        res.status(200).json(schools);
    })

});


/**
 * /schools/:id DELETE endpoint
 *
 * deletes a school document with the specified id
 * from the database
 */
router.delete('/schools/:id', (req, res) => {
    // retrieve all schools from the database
    School.findOneAndDelete({_id: req.params.id}, (err, school) => {
        if(err) {
            console.log(err);
            res.status(500).json(err);
        } else {
            res.sendStatus(204);
        }
    })
});

module.exports = router;
