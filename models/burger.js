// Import the ORM to create functions so they can speak with the database

var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },

  // The variables cols and vals are arrays

  create: function(myBurger, cb) {
    orm.create("burgers", ["burger_name","devoured"], [myBurger, false], function(res) {
      cb(res);
    });
  },
  update: function(id, cb) {
    orm.update("burgers", {devoured: true}, id, function(res) {
      cb(res);
    });
  },

};


// Export the database functions for the controller (burgersController.js).
module.exports = burger;