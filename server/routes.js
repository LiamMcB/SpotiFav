const express = require('express');
const spotifavController = require('./controllers/spotifavController');

const router = express.Router();

// Verifies users login information via api/login route
router.post('/login', spotifavController.loginUser, (req, res) => {
  const currentUser = res.locals.currentUser;
  res.status(200);
  res.json(currentUser);
});

// Lets user signup via api/signup route
router.post('/signup', spotifavController.signupUser, (req, res) => {
  const currentUser = res.locals.currentUser;
  res.status(200);
  res.json(currentUser);
});

module.exports = router;