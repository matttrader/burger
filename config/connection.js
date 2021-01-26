// Set up MySQL connection.

var mysql = require("mysql");

var connection = mysql.createConnection({

  host: "localhost",
  port: 3306,
  user: "root",
  // I'm still having password issues; no pw was used to set up mySQL connection so not sure if an empty string is correct or NULL?
  // Perhaps I should remove the below password code since terminal below states "using password: YES" ??
  password: "",
  database: "burgers_db"

});

// Make a connection below:

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


// Export connection for the ORM to utilize

module.exports = connection;