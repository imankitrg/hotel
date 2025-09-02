const express = require("express");
const router = express.Router();
const { createOrder, getMyOrders, getAllOrders, updateOrderStatus } = require("../controllers/orderController");
const verifyToken = require("../middleware/middlewares");
const isAdmin =require('../middleware/admin')

router.post("/create", verifyToken, createOrder);          // customer place order
router.get("/my", verifyToken, getMyOrders);         // customer orders
router.get("/", verifyToken, getAllOrders);          // admin/staff all orders
router.put("/status/:id",verifyToken,isAdmin, updateOrderStatus);  // admin/staff update status

module.exports = router;
