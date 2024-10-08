const express = require("express");
const path = require("path");
const app = express();

//parses urlencoded payloads
app.use(express.urlencoded({ extended: true }));
//parse json payloads
app.use(express.json())

//setting views directory
app.set("views", path.join(__dirname, "views"));
//using ejs
app.set("view engine", "ejs");

const comments = [
    {
        username: "Taha",
        comment: "LOL that is soo funny!"
    },
    {
        username: "Zain",
        comment: "I like Thomas the Tank Engine"
    },
    {
        username: "Ozair",
        comment: "Mario pixel art is cool and Minecraft is also good"
    },
    {
        username: "Mithu and Buntu",
        comment: "sunflower seed plz & freedom"
    }
]

app.get("/comments", (req, res) => {
    res.render("comments/index", { comments });
})

//sending a get request
app.get("/tacos", (req, res) => {
    res.send("This is a GET /tacos response")
})

//sending a post request
app.post("/tacos", (req, res) => {
    const { meat, qty } = req.body;
    console.log(req.body);
    res.send(`Ok, here are your ${qty} ${meat} tacos!`);
})

app.listen(3000, () => console.log("Listening on Port 3000"));