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

// ----------------------------------------------------------------------------------------

// GET /api/rooms
const getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json({ rooms });
  } catch (err) {
    res.status(500).json({ msg: "Server error while fetching rooms" });
  }
};

// -----------------------------------------------------------------------------------------

// GET /api/rooms/:id
const getRoomById = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) return res.status(404).json({ msg: "Room not found" });
    res.json(room);
  } catch (err) {
    res.status(500).json({ msg: "Server error while fetching room" });
  }
};
//--------------------------------------------------------------------------------------------------

module.exports={createRoom,getAllRooms,getRoomById}