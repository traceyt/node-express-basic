"use strict";

import express from 'express';
var routes = require('./routes/api')
var app = express();

app.use('/api', routes);

export default app;