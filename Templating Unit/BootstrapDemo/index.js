const express = require("express");
const path = require("path");
const app = express();
const redditData = require("./data.json");

//taking the absolute path to this directory and adding /public to access that directory
//serving static assets
app.use(express.static(path.join(__dirname, "/public")));

//getting embedded java script (ejs) to work
app.set("view engine", "ejs");
//Allowing us to access /views properly (not neccessarily from the current working directory (cwd))
app.set("views", path.join(__dirname, "/views"));

//home
app.get("/", (req, res) => {
    //passing the name of our file (home.ejs)
    res.render("home")
})

//subreddit
app.get("/r/:subreddit", (req, res) => {
    const { subreddit } = req.params;
    //accessing reddit data
    const data = redditData[subreddit];
    console.log(data);
    //can also pass in values like this. Variable name is the same on ejs
    //spreading the object... meaning that we can access it's values using it's keys!
    if (data) {
    res.render("subreddit", { ...data });
    } else {
        res.render("notfound", { subreddit });
    }
})

//cats
app.get("/cats", (req, res) => {
    const cats = [
        "Blue", "Rocket", "Monty", "Stephanie", "Winston"
    ];
    res.render("cats", { cats });
})

app.get("/random", (req, res) => {
    //random number generator
    const num = Math.floor(Math.random() * 10) + 1;
    //store our variables in objects as key-value pairs. On the ejs page, our variable is named after the key
    //the key and value can have the same name
    res.render("random", { rand: num });
})

app.listen(3000, () => console.log("Listening on Port 3000!"));
