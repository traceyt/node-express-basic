import express from 'express';
var routesHello = require('./routes/hello')
var app = express();

app.use('/hello', routesHello);

export default app;