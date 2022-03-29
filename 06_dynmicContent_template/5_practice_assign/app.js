const express = require('express');
const bodyParser = require('body-parser'); // body-parser allows express to read the body and then parse that into a Json object that we can understand
const expHbs = require('express-handlebars');

const app = express();

const users = [];

// app.engine('hbs', expHbs.engine({defaultLayout: 'main-layout', extname: 'hbs'}));
app.set('view engine', 'ejs');
// app.set('view engine', 'hbs');
// app.set('view engine', 'pug');
 app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
  res.render('index', { pageTitle: 'Add User' });
});

app.get('/users', (req, res, next) => {
  res.render('users', { 
    pageTitle: 'User', 
    users: users, 
    hasUsers: users.length > 0 
  });
});

app.post('/add-user', (req, res, next) => {
  users.push({ name: req.body.username });
  res.redirect('/users');
})

app.listen(300);