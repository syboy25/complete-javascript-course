import express from "express";

const app = express();
const port = 3000;

//Get request to the homepage
app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Information</h1>");
});

//Port 3000: location of server listening from client side
app.listen(port, () => {
  //call back function when port 3000 is set up

  console.log(`Listening on port ${port} `);
});
