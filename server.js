var express = require("express");
var PORT = process.env.PORT || 8080;
var app = express();

app.use(express.static("public"));

// Parse the application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up the handlebars
var exphbs = require("express-handlebars");


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to these routes
var routes = require("./controllers/burgersController.js");

app.use(routes);

// Start up the server to begin listening to client request(s)

app.listen(PORT, function() {

  console.log("Server listening on: http://localhost:" + PORT);
  
});
