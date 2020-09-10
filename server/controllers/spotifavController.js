const db = require('../models/spotifavModels');
const credentials = require('../models/spotifyKey');
const SpotifyWebApi = require('spotify-web-api-node');

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
    res.locals.loggedUser = user["rows"][0];
    // Set cookie to show user is logged in
    // res.cookie('user', 'loggedIn', { httpOnly: true });
    return next();
  });
  //   .catch(err => {
  //     console.log("made it into err");
  //     return next({
  //       log: `error in spotifavController.loginUser: ${err}`,
  //       message: { err: 'An error occurred' }
  //     });
  // });
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
    res.locals.signedUser = user["rows"][0];
    // Set cookie to show they are logged in
    // res.cookie('user', 'loggedIn', { httpOnly: true });
    return next();
  });
  // .catch(err => {
  //   return next({
  //     log: `error in spotifavController.signinUser: ${err}`,
  //     message: { err: 'An error occurred' }
  //   });
  // });
};

spotifavController.getFavs = (req, res, next) => {
  // Get user_id from request body
  const userId = req.body.user_id;
  // Put into values array
  const values = [userId];
  // Query to get all songs in songs with that user_id
  const favsQuery = 'SELECT * FROM songs WHERE user_id = $1';
  db.query(favsQuery, values, (err, songs) => {
    if (err) {
      return next({
        log: 'Express error handler caught unknown middleware error in spotifavController.getFavs',
        message: { err: 'An error occurred' }
      });
    }
    // Get songs and store in res.locals
    res.locals.favSongs = songs["rows"];
    return next();
  });
}

spotifavController.getToken = (req, res, next) => {
  // Get client id and secret key
  const clientId = credentials.clientId;
  const secret = credentials.clientSecret;

  const spotifyApi = new SpotifyWebApi({
    clientId: clientId,
    clientSecret: secret
  });

  // Retrieve an access token
  spotifyApi.clientCredentialsGrant()
    .then(data => {
      // console.log('The access token expires in ' + data.body['expires_in']);
      // console.log('The access token is ' + data.body['access_token']);

      // Save the access token so that it's used in future calls
      spotifyApi.setAccessToken(data.body['access_token']);
      res.locals.token = data.body['access_token'];
      res.locals.spotifyApi = spotifyApi;
      return next();
    })
    .catch(err => {
      return next({
        log: 'Express error handler caught unknown middleware error in spotifavController.getToken',
        message: { err: 'An error occurred: ' + err }
      });
    });
}

spotifavController.search = (req, res, next) => {
  // Get token and api from previous middleware
  const authorization = res.locals.token;
  const spotifyApi = res.locals.spotifyApi;
  // Get query string from request query
  const song = req.body.song;
  const artist = req.body.artist;
  const query = `track:${song} artist:${artist}`;
  // Search for tracks with query string
  spotifyApi.searchTracks(query)
    .then(data => {
      res.locals.track = data.body;
      return next();
    })
    .catch(err => {
      return next({
        log: 'Express error handler caught unknown middleware error in spotifavController.search',
        message: { err: 'An error occurred: ' + err }
      });
    });
}

spotifavController.addFav = (req, res, next) => {
  // Get song from request body
  const song = req.body.song;
  const artist = req.body.artist;
  const album = req.body.album;
  const userId = req.body.user_id;
  const values = [userId, song, artist, album];
  // Query to add to songs table
  const addQuery = 'INSERT INTO songs(user_id, song, artist, album) VALUES($1, $2, $3, $4) RETURNING *';
  // Add to table
  db.query(addQuery, values, (err, song) => {
    if (err) {
      return next({
        log: 'Express error handler caught unknown middleware error in spotifavController.addFav',
        message: { err: 'An error occurred: ' + err }
      })
    }
    // Store new song in res.locals
    res.locals.newFav = song["rows"][0];
    return next();
  })
}

module.exports = spotifavController;