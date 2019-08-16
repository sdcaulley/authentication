const express = require('express');
const app = express();
const { port } = require('./config.js');

//set up view engine
app.set('view engine', 'ejs');

//create home route
app.get('/', (req, res) => {
  res.render('home');
});
app.listen(port, () => {
  console.log(`app is now listening for requests on port ${port}.`);
});
