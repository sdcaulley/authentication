const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const users = require('./routes/user-route');

//set up middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//set up routes
app.use('/', users);

module.exports = app;
