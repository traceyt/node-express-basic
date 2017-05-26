const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', function(req, res) {
    res.send('got a request from the server');
});

app.listen(PORT, function() {
    console.log('listening for requests');
});