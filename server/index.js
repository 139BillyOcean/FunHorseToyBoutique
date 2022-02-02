const express = require('express');
const app = express();
const port = 3000;
const controller = require('./controller.js');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const { verify, signUp } = require('./auth.js');
var session = require('express-session');
var db = require('../database/dbAuth');

var SQLiteStore = require('connect-sqlite3')(session);

const path = require('path');

app.use(express.static('./client/dist'));
app.use('/product/:productId', express.static('./client/dist'));
app.use('/signin/', express.static('./client/dist'));
app.use('/listproduct/', express.static('./client/dist'));
app.use('/viewcart/', express.static('./client/dist'));
app.use('/accountoverview/', express.static('./client/dist'));
app.use(express.json());

app.use(session({
  secret: 'blue ocean',
  resave: false,
  saveUninitialized: false,
  store: new SQLiteStore({ db: 'sessions.db', dir: './var/db' })
}));
app.use(passport.authenticate('session'));

passport.use(new LocalStrategy(verify));

passport.serializeUser((user, cb) => {
  process.nextTick(() => {
    cb(null, { username: user.username });
  });
});

passport.deserializeUser((user, cb) => {
  process.nextTick(() => {
    return cb(null, user);
  });
});

app.use(passport.initialize());
app.use(passport.session());

app.get('/home', controller.getAllProducts);
app.get('/home/search/:searchTerm', controller.getSearchResults);
app.get('/overview/:objectId', controller.getSingleProduct);
app.get('/overview/user/:userId', controller.getSingleUser);
app.get('/home/search', controller.getSearchResults);
app.get('/users', controller.getCurrentUser);

app.get('/authenticate', (req, res) => {
  let user = req.user;
  res.send(user);
});

app.post('/createListing', controller.createListing);
app.post('/adduser', controller.createUser);
app.post('/signup', signUp);
app.post('/users', controller.addNewUser);

app.post('/login', passport.authenticate('local', {
  failureRedirect: '/login-failure',
  successRedirect: '/login-success'
}), (err, req, res, next) => {
  if (err) {
    next(err);
  }
});

app.get('/logout', function(req, res, next) {
  req.logout();
  res.redirect('/');
});

app.get('/login-success', (req, res, next) => {
  res.status(200).send('Passed');
});

app.get('/login-failure', (req, res, next) => {
  res.status(500).send('Failed');
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
