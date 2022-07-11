const express = require('express');
const patientsRoute = require('./router/patientsRoute');

const app = express();

app.use(express.json());

app.use('/patients', patientsRoute);

module.exports = app;
