const http = require("http"); // will always use global file named http

const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('In the middleware!');
  next();    // Allows request to continue to next middleware in line
});
//use() allows us to add new middleware function
// it takes the list of argumrnts

app.use((req, res, next) => {
  console.log('In another middleware!');
  res.send('<h1>Hello from Express</h1>')
  //....
});

const server = http.createServer(app);

server.listen(300);
