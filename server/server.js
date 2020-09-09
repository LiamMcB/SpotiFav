const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

// serve from build folder with route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));

// Serve css
app.use(express.static('public'));

// Serve index.html as default path
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'))
});


app.listen(PORT, () => {
  console.log("Server listening on port", PORT);
})