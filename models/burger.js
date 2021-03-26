var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },

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

module.exports = burger;