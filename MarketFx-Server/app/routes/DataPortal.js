const express = require("express");
const axios = require("axios");
const router = express.Router();
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
router.get("/datawindow", async (req, res) => {
 
  console.log(data);

  res.status(200).json(data);
});

module.exports = router;
