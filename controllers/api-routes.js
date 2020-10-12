// TODO WIP

// this page is the routes for API stuff
const db = require('../models');

// These are the routes
module.exports = function (app) {
  // GET route for getting all users
  app.get("/api/profiles/", function(req,res) {
    db.Profiles.findAll({})
    .then(function(dbProfiles) {
      res.json(dbProfiles);
    });
  });
  // GET route for sleeps of a user
  app.get("/api/sleeps/user/:user", function(req,res) {
    db.Sleeps.findAll({
      where: {
        user: req.params.user
      }
    })
    .then(function(dbSleeps) {
      res.json(dbSleeps);
    });
  });
  
};