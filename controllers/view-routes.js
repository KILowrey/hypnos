// This page is the routes for HTML and Handlebars
const path = require('path');
const secured = require('../config/middleware/secured'); //this makes it so that the user has to be logged in

// These are the routes
module.exports = function (app) {
  // index.html. Welcome page
  app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  // team.html. Description of dev team
  app.get('/team', function(req,res) {
    res.sendFile(path.join(__dirname, "../public/team.html"));
  });
  // TODO if Jeneth's page is static it goes here
  // error page
  app.get('/error', function(req,res) {
    res.render('error', {});
  });
  // user.handlebars. user profile
  app.get('/user', secured, function(req,res) {
    res.render('user', {});
  });
  //  onBoard.handlebars. questions.
  app.get('/questions', secured, function(req,res) {
    res.render('onBoard', {});
  });
  // results.handlebars. charts.
  app.get('/results', secured, function(req,res) {
    res.render('results', {});
  });
};