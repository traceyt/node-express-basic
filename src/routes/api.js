"use strict";

var express = require('express')
var router = express.Router();

// define the home page route
router.get('/', function(req, res) {
    res.send('This is the top level entry point for the rest api.')
});

// define another route just for fun
router.get('/list', function(req, res) {
    res.send('This is another level of the rest api. It would return a list.')
});

module.exports = router;