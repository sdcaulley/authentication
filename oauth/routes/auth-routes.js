const router = require('express').Router();

//auth Login
router.get('/login', (req, res) => {
  res.render('login');
});

//auth logout
router.get('/logout', (req,res) => {
  //handle with passport
  res.send('logging out');
});

//auth with Gologle
router.get('/google', (req, res) => {
  //handle with passport
  res.send('logging in with Google');
});

module.exports = router;
