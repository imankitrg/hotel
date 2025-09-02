const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
        user: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Person", required: true
        }, // kisne order kiya
        
        items: [
        {
        name: String,
        quantity: Number,
        price: Number
        }
        ],

        totalAmount: {
        type: Number,
        required: true
        },

        status: {
        type: String,
        enum: ["pending", "confirmed", "completed", "cancelled"], 
        default: "pending"
        },

        createdAt: { 
        type: Date,
        default: Date.now 
        }

});

module.exports = mongoose.model("Order", orderSchema);
