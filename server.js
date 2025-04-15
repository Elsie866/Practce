const express = require("express");

const app = express();
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "",
  database: "blog",
});

// routes

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/dashbord", (req, res) => {
  res.render("dashboard.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.get("/posts", (req, res) => {
  connection.query("SELECT * FROM posts", (error, posts) => {
    console.log(posts);
  });
  res.render("posts.ejs"); // shows all posts with possible actions like delete,hide,view post,view comments,likes etc...actions will be  in form of links and buttons
});

app.get("/posts/:postID", (req, res) => {
  res.render("post.ejs"); //shows one/specific posts
});

app.post("/newPost", (req, res) => {
  res.redirect("posts/5");
});

app.listen(8000, () => console.log("App started running on port 8000"));
