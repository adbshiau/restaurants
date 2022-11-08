require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();

const port = process.env.PORT || 3001;

// MIDDLEWARES
app.use(morgan("dev"));
app.use(express.json());

// ROUTE HANDLER
//? Get all restaurants
app.get("/api/v1/restaurants", (req, res) => {
  res.status(200).json({
    status: "Success",
    data: {
      restaurant: ["McDonalds", "In n Out"],
    },
  });
});

//? Get a restaurant
app.get("/api/v1/restaurants/:id", (req, res) => {
  console.log(req.params);
  res.status(200).json({
    status: "Success",
    data: {
      restaurant: ["Sugarfish"],
    },
  });
});

//? Create a restaurant
app.post("/api/v1/restaurants", (req, res) => {
  console.log(req.body);
  res.status(201).json({
    status: "Success",
    data: {
      restaurant: ["Sugarfish"],
    },
  });
});

//? Update a restaurant
app.put("/api/v1/restaurants/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  res.status(200).json({
    status: "Success",
    data: {
      restaurant: ["Sugarfish"],
    },
  });
});

//? Delete a restaurant
app.delete("/api/v1/restaurants/:id", (req, res) => {
  res.status(204).json({
    status: "Success",
  });
});

app.listen(port, () => {
  console.log(`Server is up and listening on port ${port}`);
});
