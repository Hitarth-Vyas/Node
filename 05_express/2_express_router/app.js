const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

 // use() can use any http method 
app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes);
//as we used post method in shop.js, order doesn't matter
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found</h1>')
})

app.listen(300) ;
