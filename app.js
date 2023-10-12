//Creating an Express app

//step-1 install node js

//step-2 initialize node js project using npm init

//step-3 install the express package. command for installing express is : npm install --save express

// to create an express app first importing the express module
const express = require("express");

const app = express();

//importing template engines

const ejs = require("ejs");
const pug = require("pug");

const PORT = 3000; // port number

//Routing Requests

//whenever there is request comes for http://localhost:3000/ give response to it.
app.get("/", (req, res) => {
  res.send("Hello World");
});

//request for about page
app.get("/about", (req, res) => {
  res.send("This is the About Page.");
});

//request for contact page
app.get("/contact", (req, res) => {
  res.send("Contact us at contact@example.com");
});

//Dynamic Route with Parameters
app.get("/user/:id", (req, res) => {
  // Accessing parameters from the URL
  const userId = req.params.id;
  res.send(`UserID: ${userId}`);
});

//handling responses in express js

// Respond with plain text
app.get("/text", (req, res) => {
  res.send("This is a plain text response.");
});

// Respond with HTML
app.get("/html", (req, res) => {
  res.send("<h1>This is an HTML response.</h1>");
});

// Respond with JSON
app.get("/json", (req, res) => {
  const jsonData = {
    message: "This is a JSON response.",
    status: "success",
  };
  res.json(jsonData);
});

// Respond with a file (assuming 'sample.txt' exists in the same directory)
app.get("/file", (req, res) => {
  res.sendFile(__dirname + "/sample.txt");
});

// Respond with a status code
app.get("/status", (req, res) => {
  res.status(200).send("success");
});

// Redirect to another URL
app.get("/redirect", (req, res) => {
  res.redirect("https://developer.mozilla.org/en-US/");
});

//Working With Template Engines

app.set("view engine", "ejs"); // Set EJS as the view engine
app.set("views", __dirname + "/views/ejs");

// EJS Routes
app.get("/ejs", (req, res) => {
  res.render("index", {
    subject: "EJS template engine",
    name: "our template",
    link: "https://google.com",
  });
});



// app.set("view engine", "pug"); // Set Pug as the view engine
// app.set("views", __dirname + "/views/pug");

// // Pug Routes
// app.get("/pug", (req, res) => {
//   res.render("index", {
//     subject: "Pug template engine",
//     name: "our template",
//     link: "https://google.com",
//   });
// });



// Handling 404 (Not Found) errors
app.use((req, res) => {
  res.status(404).send("404 - Not Found");
});
//app is listening on port 3000
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
