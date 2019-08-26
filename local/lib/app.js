const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const LocalStrategy = require('passport-local').Strategy;
const users = require('./routes/users');
const User = require('./models/user-schema');
const { dburi } = require('../config');

//set up session store for MongoDB
let store = new MongoDBStore({
  uri: dburi,
  collection: 'mySessions'
}, function(err) {
  console.log('session store error:', err);
});

store.on('error', (err) => {
  console.log('session storage error: ', err);
});

//set up middleware
app.use(cors());
app.use(session({
  name: 'session-id',
  secret: '123-456-789',
  //store: store,
  saveUninitialized: true,
  resave: true
}));
app.use(passport.initialize());
app.use(passport.session());

//configure passport
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/users', users);

module.exports = app;
