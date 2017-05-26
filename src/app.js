import express from 'express';
const app = express();

app.get('/', function(req, res) {
    res.send('got a request from the server for requests again!!');
});

export default app;