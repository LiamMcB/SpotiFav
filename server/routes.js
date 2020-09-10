const express = require('express');
const spotifavController = require('./controllers/spotifavController');

const router = express.Router();

// Verifies users login information via api/login route
router.post('/login', spotifavController.loginUser, (req, res) => {
  console.log("error after controller")
  const currentUser = res.locals.loggedUser;
  console.log(currentUser);
  res.status(200);
  res.json(currentUser);
});

// Lets user signup via api/signup route
router.post('/signup', spotifavController.signupUser, (req, res) => {
  const currentUser = res.locals.signedUser;
  res.status(200);
  res.json(currentUser);
});

module.exports = router;