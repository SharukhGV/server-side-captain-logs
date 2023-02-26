const express = require("express");
const logs = express.Router();
const logsArray = require("../models/logs");



logs.get("/", (req, res) => {
  res.json(logsArray);
});



  // CREATE
logs.post("/", (req, res) => {
    logsArray.push(req.body);
    res.json(logsArray[logsArray.length - 1]);
  });



// SHOW
logs.get("/:index", (req, res) => {
const {index } = req.params

const element = logsArray[index];
// if (logsArray[req.params.index]) {

    if (element) {
      // res.json(logsArray[req.params.index]);
      res.json(logsArray[index]);

    } else {
      res.status(404).json({ error: "Not Found" });
    }
  });

// DELETE
logs.delete("/:index", (req, res) => {
    if (logsArray[req.params.index]) {
      const deletedLog = logsArray.splice(req.params.index, 1);
      res.status(200).json(deletedLog);
    } else {
      res.status(404).json({ error: "Not Found" });
    }
  });
    
// UPDATE
logs.put("/:index", async (req, res) => {
  
    if (logsArray[req.params.index]) {
      logsArray[req.params.index] = req.body;
      res.status(200).json(logsArray[req.params.index]);
    } else {
      res.status(404).json({ error: "Not Found" });
    }
  });

// 404 PAGE
logs.get("*", (req, res) => {
    res.status(404).json({ error: "Page not found" });
  });




module.exports = logs;
