"use strict";
import localConfig from '../.local.config/app.config';
import express from 'express';

// still trying to figure out why this break when in dev mode
//import appInsights from "applicationinsights";
//appInsights.setup(localConfig.appinsightsAPIKey);
//appInsights.start();

var routes = require('./routes/api')
var app = express();


app.use('/api', routes);

export default app;