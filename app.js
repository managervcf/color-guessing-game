const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));    
app.set("view engine", "ejs");

app.get("/", (req, res) => res.render("game"));

app.get("/*", (req, res) => res.redirect("/"));

app.listen(port, () =>
	console.log('Server is running on port ' + port));