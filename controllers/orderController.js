const Order = require("../models/order");

// Create new order
    const createOrder = async (req, res) => {
        try {
            const { items } = req.body;
            if (!items || items.length === 0) {
            return res.status(400).json({ msg: "Order items are required" });
            }

    // total calculate
        const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

        const order = new Order({
            user: req.user.id,
            items,
            totalAmount
        });
            await order.save();
            res.status(201).json({ msg: "Order placed successfully", order });

            } catch (err) {
                console.error("Order Error:", err.message);
                res.status(500).json({ msg: "Server error while creating order" });
                }
        };
// ----------------------------------------------------------------------------------------------
// Get my orders (customer)

const getMyOrders = async (req, res) => {
    try {
    const orders = await Order.find({ user: req.user.id });
    res.json(orders);
    } catch (err) {
    res.status(500).json({ msg: "Server error while fetching orders" });
    }
};
// ----------------------------------------------------------------------------------------------------

// Admin/staff get all orders
const getAllOrders = async (req, res) => {
        try {
            if (req.user.role !== "admin" && req.user.role !== "staff") 
            {
                return res.status(403).json({ msg: "Access denied" });
            }

            const orders = await Order.find().populate("user", "name email");
            res.json(orders);

            } catch (err) {
                res.status(500).json({ msg: "Server error while fetching all orders" });
            }
};
// ----------------------------------------------------------------------------------------------------------------
// Update order status (admin/staff only)
// ----------------------------------------------------------------------------------------------------------------
const updateOrderStatus = async (req, res) => {
    try {
        if (req.user.role !== "admin" && req.user.role !== "staff") {
            return res.status(403).json({ msg: "Access denied" });
    }
    const order = await Order.findByIdAndUpdate(
        req.params.id,
        { status: req.body.status },
        { new: true }
    );
    res.json({ msg: "Order status updated", order });
    } catch (err) {
    res.status(500).json({ msg: "Server error while updating order" });
    }
};

module.exports={createOrder,getMyOrders,getAllOrders,updateOrderStatus}
