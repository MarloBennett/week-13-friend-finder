//require npm packages
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//ceate express server
var app = express(); 

//assign port number
var PORT = 3000;

//use body-parser to interpret data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:"application/vnd.api+json"}));
app.use("/sweetalert", express.static(__dirname + "/sweetalert"));

//point server to route files
//give our server a "map" of how to respond when users visit or request data from various URLs. 
require("./app/routing/api-routes.js") (app); 
require("./app/routing/html-routes.js") (app);

//set server to listen
app.listen(process.env.PORT || PORT, function() {
	console.log("App listening on PORT: " + PORT);
});