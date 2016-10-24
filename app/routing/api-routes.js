//load data from friends file
var friendsList = require("../data/friends.js");

//exportable function
module.exports = function(app) {

	//get request, show JSON of avaiable friends 
	app.get("/api/friends", function(req, res) {
		res.json(friendsList);
	});

	//post request, when user submits data through form push it to the friends array
	app.post("/api/friends", function(req, res) {

		friendsList.push(req.body);

		// Send back success result
		res.status(200).end();
	});
};