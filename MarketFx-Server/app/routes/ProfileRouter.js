const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authMidddlware = require("../middlewares/authMiddleware");

//importing the models
const User = require("../models/User");

const app = express.Router();

// Endpoint to get the profile data
app.get('/profile', (req, res) => {
  const profileData = {
    name: name,
    email: email,
    password: password,
    mobile: mobile,
  };

  res.json(profileData);
});

// Endpoint to update the profile data
app.post('/profile', (req, res) => {
  const { name, email, password, mobile } = req.body;

  // Update the profile data in the database
  // ...

  const updatedProfileData = {
    name,
    email,
    password,
    mobile,
  };

  res.json(updatedProfileData);
});


module.exports = app;

