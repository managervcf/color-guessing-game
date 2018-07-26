const   express = require("express"),
        app     = express();
    
app.set("view engine", "ejs");


app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Game is running...");
});