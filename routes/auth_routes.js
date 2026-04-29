const express = require("express");
const {
  signup,
  loginUser,
  getProfile,
  createStaff,} = require("../controllers/authController");
const verifyToken = require("../middleware/middlewares");
const { signupLimiter, loginLimiter ,adminLimiter} = require("../middleware/rateLimiter");
const Router = express.Router();

Router.post("/signup", signupLimiter, signup);
Router.post("/login", loginLimiter, loginUser);
Router.post("/admin", adminLimiter, verifyToken, createStaff);
Router.get("/profile/{/:id}", verifyToken, getProfile);

module.exports = Router;
