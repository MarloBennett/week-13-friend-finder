//require path npm to get correct file paths
var path = require("path");

//exportable function
module.exports = function(app) {

	//html get requests, shows user the requested page
	app.get("/survey", function (req, res) {
		res.sendFile(path.join(__dirname + "/../public/survey"));
	});

	//default to home if no page selected
	app.use(function (req, res) {
		res.sendFile(path.join(__dirname + "/../public/home.html"));
	});
};
