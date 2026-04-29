const rateLimit = require("express-rate-limit");

// 🔐 LOGIN
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 5,
  message: "Too many login attempts, try again later",
  standardHeaders: true,
  legacyHeaders: false,
});

// 📝 SIGNUP
const signupLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: "Too many signup attempts, try later",
});

// 🌐 MENU
const menuLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  message: "Too many requests",
});

// 🛒 ORDER
const orderLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  message: "Too many orders, try later",
});

// 🧑‍💼 ADMIN
const adminLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
  message: "Admin limit exceeded",
});

module.exports = {
  loginLimiter,
  signupLimiter,
  menuLimiter,
  orderLimiter,
  adminLimiter,
};