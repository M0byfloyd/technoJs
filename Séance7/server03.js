// load the express package
var express = require('express');

// declares the app
var app = express();

// the routes
app.get('/', function (req, res) {
  res.status(200).send('Hello World!');
}).get('/semester1', function (req, res) {
  res.status(200).send('Semester 1!');
}).get('/semester2', function (req, res) {
  res.status(200).send('Semester 2!');
}).use(function(req, res, next) {
  res.setHeader("Content-type", "text/html");
  res.status(404).send("Unknown page!");
}).listen(3000,
   function () { console.log('Listening on port 3000...'); }
  );