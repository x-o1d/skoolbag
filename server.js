const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

var apiEndpoints = require('./src_api/endpoints')

app.listen(8000, () => {
    console.log('Starting server..');
})

app.use(cors());
app.use(bodyParser.json());

app.use('/api', apiEndpoints);

mongoose.connect('mongodb://localhost/schools')
.then(() => {
    console.log('Connected to MongoDB');
}, (err) => {
    console.log('MongoDB connection failed: ' + err);
    process.exit(1);
})
