const express = require('express');
const path = require('path'); 
const bodyParser = require('body-parser');
const routes = require('./routes/index.js');

const app = Express();

// The process.env.PORT means that Heroku can set the port itself 

app.set('port', process.env.PORT || 3000)
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(routes)

module.exports = app;
