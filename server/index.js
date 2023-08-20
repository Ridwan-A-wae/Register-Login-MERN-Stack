const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Controllers
const { createUser, LogIn } = require("./Controllers/usersController");

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

mongoose.connect(process.env.MONGO);

app.post("/register", createUser);
app.post("/login", LogIn);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
