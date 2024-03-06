"use strict";
import express from "express";

const app = express();
const port = 3000;

app.set("view engine", "ejs");

const assignments = [
  {
    rank: "S",
    position: "ANBU Jonin",
    goal: "Message delivery to the Kazekage",
  },
  {
    rank: "S",
    position: "ANBU Jonin",
    goal: "Scroll retrieval from Omashu",
  },
  {
    rank: "S",
    position: "ANBU Captain",
    goal: "Assassination of the Prince of Rohan",
  },
  {
    rank: "S",
    position: "Rogue",
    goal: "Assassination of the Hokage",
  },
];

const user = {
  firstName: "Itachi",
  lastName: "Uchiha",
  admin: true,
};

app.get("/", (req, res) => {
  res.render("pages/index", {
    user,
  });
});

app.get("/missions", (req, res) => {
  res.render("pages/missions", {
    missions: assignments,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
