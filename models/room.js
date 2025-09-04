const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
    
        roomNumber: { 
        type: Number, 
        required: true, 
        unique: true
        }, // Room No.

        type: {
        type: String,
        enum: ["single", "double", "suite"],
        required: true },
          // Room type

        pricePerNight: {
        type: Number, 
        required: true
        }, // Rate

        availability: {
        type: Boolean, 
        default: true
        },
          // available ya booked
        
        createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Room", roomSchema);

