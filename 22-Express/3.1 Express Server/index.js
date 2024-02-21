import express from "express";
const app = express();
//Hard code the port you want to use
const port = 3000;

//Port 3000: location of server listening from client side
app.listen(port, () => {
  //call back function when port 3000 is set up
  console.log(`Server running on port ${port}.`);
});
