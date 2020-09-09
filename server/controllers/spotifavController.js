const db = require('../models/spotifavModels');

const spotifavController = {};

spotifavController.loginUser = (req, res, next) => {
  // Grab username and password from request body
  const username = req.body.username;
  const password = req.body.password;
  const values = [username, password];
  const loginQuery = 'SELECT * FROM users WHERE username = $1 AND password = $2';
  // Query database to see if username and password match
  db.query(loginQuery, values, (err, user) => {
    if (err || !user["rows"][0]) {
      return next({
        log: 'Express error handler caught unknown middleware error in spotifavController.loginUser',
        message: { err: 'An error occurred' }
      });
    }
    // Else login user
    res.locals.currentUser = user["rows"];
    // Set cookie to show user is logged in
    res.cookie('user', 'loggedIn', { httpOnly: true });
    return next();
  })
    .catch(err => {
      return next({
        log: `error in spotifavController.loginUser: ${err}`,
        message: { err: 'An error occurred' }
      });
  });
};

spotifavController.signupUser = (req, res, next) => {
  // Grab new username and password from request body
  const username = req.body.username;
  const password = req.body.password;
  const values = [username, password];
  const signupQuery = 'INSERT INTO users(username, password) VALUES ($1, $2) RETURNING *';
  db.query(signupQuery, values, (err, user) => {
    if (err || !user["rows"][0]) {
      return next({
        log: 'Express error handler caught unknown middleware error in spotifavController.signupUser',
        message: { err: 'An error occurred' }
      });
    }
    // Else sign them up
    res.locals.currentUser = user["rows"];
    // Set cookie to show they are logged in
    res.cookie('user', 'loggedIn', { httpOnly: true });
    return next();
  })
  .catch(err => {
    return next({
      log: `error in spotifavController.signinUser: ${err}`,
      message: { err: 'An error occurred' }
    });
  });
};

module.exports = spotifavController;