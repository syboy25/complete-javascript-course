//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
"use strict";
import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
let userIsAuthorised = false;

app.use(bodyParser.urlencoded({ extended: true }));

// const logMiddleWare = (req, res, next) => {
//   console.log(`Method: ${req.method}`);
//   console.log(`Request: ${req.url}`);
//   next();
// };

const authenticateUsers = (req, res, next) => {
  const password = req.body["password"];
  if (password === "ILoveProgramming") {
    userIsAuthorised = true;
  }
  next();
};

// app.use(logMiddleWare);
app.use(authenticateUsers);
// app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

app.post("/check", (req, res) => {
  if (userIsAuthorised) {
    res.sendFile(`${__dirname}/public/secret.html`);
  } else {
    res.sendFile(`${__dirname}/public/index.html`);
  }
});

app.listen(port, () => {
  console.log(`Your are listening on port: ${port}`);
});
