const   express = require("express"),
        app     = express();


app.use(express.static(__dirname + "/public"));    
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("game");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Game is running...");
});