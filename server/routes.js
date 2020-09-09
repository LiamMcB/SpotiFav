const express = require('express');
const spotifavController = require('./controllers/spotifavController');

const router = express.Router();

// Verifies users login information
router.post('/login', spotifavController.loginUser, (req, res) => {
  const currentUser = res.locals.currentUser;
  res.status(200);
  res.json(currentUser);
});

module.exports = router;