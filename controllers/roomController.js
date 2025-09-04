const Room = require("../models/room");

// Admin create room
const createRoom = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ msg: "Access denied" });
    }

    const { roomNumber, type, pricePerNight } = req.body;

    const roomExist = await Room.findOne({ roomNumber });
    if (roomExist) return res.status(400).json({ msg: "Room already exists" });

    const room = new Room({ roomNumber, type, pricePerNight });
    await room.save();

    res.status(201).json({ msg: "Room created successfully", room });
  } catch (err) {
    console.error("Room Error:", err.message);
    res.status(500).json({ msg: "Server error while creating room" });
  }
};

module.exports={createRoom}