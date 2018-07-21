const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/freeme', require('./freeme-router'));
app.use('/api/digest', require('./digest-router'));

module.exports = app;
