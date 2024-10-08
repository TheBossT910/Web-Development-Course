const express = require("express");
const app = express();

//runs whenever there is ANY request, will not allow any other app.get() to work
// app.use((req, res) => {
//     console.log("We got a new request!");
//     res.send("Hello, recieved request!");
// })

//Routing GET and POST requests
//Homepage
app.get("/", (req, res) => {
    res.send("This is the homepage!")
})

//Subreddit 
app.get("/r/:subreddit", (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>This is the "${subreddit}" subreddit!<h1>`);
})

//with postID
app.get("/r/:subreddit/:postId", (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>This is the "${subreddit}" subreddit with the post id "${postId}"<h1>`);
})

//cats page
//POST
app.post("/cats", (req, res) => {
    res.send("Post request to /cats was sent!!!!")
})
//GET
app.get("/cats", (req, res) => {
    res.send("meow");
})

//dogs page
app.get("/dogs", (req, res) => {
    res.send("woof");
})

//search page
app.get("/search", (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send("<h1>Nothing found!!! Search to find stuff<h1>");
    } else {
        res.send(`<h1>Search results for: ${q}<h1>`);
    }
})

//universal response for any page, needs to be put last!
app.get("*", (req, res) => {
    res.send("I don't know that path!");
})

//starts the server
app.listen(3000, () => {
    //prints when the server starts
    console.log("Listening on Port 3000");
})