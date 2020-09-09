const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./routes');
const PORT = 3000;

// Parse request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// serve from build folder with route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));

// Serve css
app.use(express.static('public'));

// Route handler
app.use('/api', router);

// Serve index.html as default path
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'))
});

// Handles failed routes
app.use((req, res) => {
  res.send('Route failed');
  res.status(404);
});

// Catch-all error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  // Create errorObj to receive message and overwrite defaults
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log("Server listening on port", PORT);
})