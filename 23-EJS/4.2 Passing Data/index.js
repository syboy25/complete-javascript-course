import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

function Member(firstName, lastName, memberNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.memberNumber = memberNumber;
}

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const newMember = new Member(
    req.body["firstName"],
    req.body["lastName"],
    req.body["memberNumber"]
  );

  console.log(req.body);
  res.render("submit.ejs", { newMember });
  // res.redirect("submit");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
