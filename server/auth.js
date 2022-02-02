var crypto = require('crypto');
var db = require('../database/dbAuth');

const verify = (username, password, cb) => {
  db.get('SELECT rowid AS id, * FROM users WHERE username = ?', [ username ], (err, row) => {
    if (err) {
      return cb(err);
    }
    if (!row) {
      return cb(null, false, { message: 'Incorrect username or password.' });
    }

    crypto.pbkdf2(password, row.salt, 310000, 32, 'sha256', function(err, hashedPassword) {
      if (err) {
        return cb(err);
      }
      if (!crypto.timingSafeEqual(row.hashed_password, hashedPassword)) {
        return cb(null, false, { message: 'Incorrect username or password.' });
      }
      return cb(null, row);
    });
  });
};

const signUp = (req, res, next) => {
  const salt = crypto.randomBytes(16);
  crypto.pbkdf2(req.body.password, salt, 310000, 32, 'sha256', (err, hashedPassword) => {
    if (err) {
      return next(err);
    }
    db.run('INSERT INTO users (username, hashed_password, salt) VALUES (?, ?, ?)', [
      req.body.username,
      hashedPassword,
      salt
    ], (err) => {
      if (err) {
        return next(err);
      }
      const user = {
        username: req.body.username
      };

      req.login(user, (err) => {
        if (err) {
          return next(err);
        }
        res.redirect('/');
      });
    });
  });
};

module.exports.verify = verify;
module.exports.signUp = signUp;