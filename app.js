// DEPENDENCIES
const express = require("express");
const logs = require("./models/logs.js");
const cors = require("cors");

// CONFIGURATION
const app = express();
// MIDDLEWARE
app.use(express.json()); // Parse incoming JSON
app.use(cors()); //This will allow ANY app to make requests to the API.

const logsController = require("./controllers/captainLogsController");
app.use("/logs", logsController);





// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Express logs App");
});
app.use((req, res, next) => {
    console.log("This code runs for every request");
    next();
  });

app.get("/logs", (req, res) => {
  res.send(logs);
});

// EXPORT
module.exports = app;