
// Set up for Express
var express = require("express");


// Port with HEROKU deploy
var PORT = process.env.PORT || 6900;

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Set up Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Imported Routes
var routes = require("./controllers/burgersController.js");

app.use(routes);

// Server Start up
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});