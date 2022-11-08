require("dotenv").config();
const express = require("express");
const app = express();

const port = process.env.PORT || 3001;

// ROUTES
//? http://localhost:3001/getRestaurants
app.get("/getRestaurants", (req, res) => {
  console.log("Get all restaurants!");
});

app.listen(port, () => {
  console.log(`Server is up and listening on port ${port}`);
});
