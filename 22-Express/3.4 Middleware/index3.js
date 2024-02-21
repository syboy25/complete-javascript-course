import express from "express";

const app = express();
const port = 3000;

const logMiddleware = (req, res, next) => {
  console.log(`Request Method: ${req.method}`);
  console.log(`Incoming request to ${req.url}`);
  next();
};
app.use(logMiddleware);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
