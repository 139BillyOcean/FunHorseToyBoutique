const express = require('express');
const app = express();
const port = 3000;
const controller = require('./controller.js');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const { verify, signUp } = require('./auth.js');
var session = require('express-session');

var SQLiteStore = require('connect-sqlite3')(session);

const path = require('path');

app.use(express.static('./client/dist'));
app.use('/product/:productId', express.static('./client/dist'));
app.use('/signin/', express.static('./client/dist'));
app.use('/listproduct/', express.static('./client/dist'));
app.use('/viewcart/', express.static('./client/dist'));
app.use('/accountoverview/', express.static('./client/dist'));
app.use(express.json());
app.use(express.static('./client/dist'));

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
    console.log('Adding session');
    cb(null, { username: user.username });
  });
});

passport.deserializeUser((user, cb) => {
  process.nextTick(() => {
    console.log('Attaching to request');
    return cb(null, user);
  });
});

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.get('/home', controller.getAllProducts);
app.get('/home/search/:searchTerm', controller.getSearchResults);
app.get('/overview/:objectId', controller.getSingleProduct);
app.get('/overview/user/:userId', controller.getSingleUser);
app.get('/home/search', controller.getSearchResults);
app.get('/users', controller.getCurrentUser);

app.get('/logout', function(req, res, next) {
  console.log('Logging out');
  req.logout();
  res.redirect('/');
});
app.post('/createListing', controller.createListing);
app.post('/signup', signUp);
app.post('/users', controller.addNewUser);
app.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/'
}));
app.post('/adduser', controller.createUser);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
