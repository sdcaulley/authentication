const express = require('express');
const app = express();
const { port } = require('./config.js');
const authRoutes = require('./routes/auth-routes');

//set up view engine
app.set('view engine', 'ejs');

//set up authRoutes
app.use('/auth', authRoutes);

//create home route
app.get('/', (req, res) => {
  res.render('home');
});

app.listen(port, () => {
  console.log(`app is now listening for requests on port ${port}.`);
});
