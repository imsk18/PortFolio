const express = require('express');
const userModel = require('./models/userInfo.model');
const cors = require('cors');
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ PUBLIC folder serve karo (build nahi)
app.use(express.static(path.join(__dirname, "public")));

// ✅ API route
app.post('/user', async (req, res) => {
  try {
    const { Name, email, message } = req.body;

    const data = await userModel.create({
      Name,
      email,
      message
    });

    res.status(200).json({
      message: "success!",
      data
    });

  } catch (error) {
    res.status(500).json({
      message: "error",
      error: error.message
    });
  }
});

// ✅ React routing handle (public/index.html)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

module.exports = app;