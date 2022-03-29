const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const expHbs = require('express-handlebars')

const app = express();

app.engine('hbs', expHbs.engine({
  layoutsDir: 'views/layouts/',
  defaultLayout: 'main-layout',
  extname: 'hbs',
}));
app.set('view engine', 'hbs');
app.set('views', 'views');
 
// app.set('view engine', 'pug');
// app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

 // use() can use any http method 
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
//as we used post method in shop.js, order doesn't matter
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', {pageTitle: 'Page Not Found'});
})

app.listen(300);
