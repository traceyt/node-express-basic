var express = require('express')
var router = express.Router();

// define the home page route
router.get('/', function(req, res) {
    res.send('Hello world!!! This is the top level route.')
});

// define another route just for fun
router.get('/list', function(req, res) {
    res.send('Hello world list!!! This is the list route.')
});

module.exports = router