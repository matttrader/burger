var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions

var burger = require("../models/burger.js");

// Create all our routes and then set up logic within those routes where its required

router.get("/", function(req, res) {
 burger.all(function(burgerData){

     res.render("index", {burgerData:burgerData})

 })

});

router.post("/api/burgers", function(req, res) {
    console.log("Burger Test 1")
});

router.put("/api/burgers/:id", function(req, res) {
    console.log("Burger Test 2")
});

router.delete("/api/burgers/:id", function(req, res) {
    console.log("Burger Test 3")
});


// Export the routes so the server.js file can use it

module.exports = router;
