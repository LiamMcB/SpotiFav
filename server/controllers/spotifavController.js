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
    return next();
  });
};

module.exports = spotifavController;