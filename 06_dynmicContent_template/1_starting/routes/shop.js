const path = require('path');  

const express = require('express');

const adminData = require('./admin');

const router = express.Router();

// router.get('/', (req, res, next) => {
//   res.send('<h1>Hello from Express</h1>');
// });

router.get('/', (req, res, next) => {
  console.log(adminData.products);
  res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
});

module.exports = router;