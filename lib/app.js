const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(_dirname, 'plublic')));
app.use('/cats', require('./controllers/cats'));

module.exports = app;
