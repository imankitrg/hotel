const Room = require("../models/room");
const Booking = require("../models/bookings");

const bookRoom = async (req, res) => {
  try {
    const { roomId, checkInDate, checkOutDate } = req.body;

    // Room exist check
    const room = await Room.findById(roomId);
    if (!room) return res.status(404).json({ msg: "Room not found" });

    if (!room.availability) {
      return res.status(400).json({ msg: "Room is not available" });
    }

    // Booking create
    const booking = new Booking({
      user: req.user.id,
      room: room._id,
      checkInDate,
      checkOutDate
    });

    await booking.save();

    // Room availability update
    room.availability = false;
    await room.save();

    res.status(201).json({ msg: "Room booked successfully", booking });
    console.log("room is booked ,thankyou")
  
    } catch (err) {

    console.error("Booking Error:", err.message);
    
    res.status(500).json({ msg: "Server error while booking room" });
  }
};

// -------------------------------------------------------------------------------------------

// GET /api/bookings/my
const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id })
      .populate("room", "roomNumber type price"); // optional: room details bhi laa de
    res.json({ bookings });
  } catch (err) {
    res.status(500).json({ msg: "Server error while fetching your bookings" });
  }
};

// --------------------------------------------------------------------------------------------------

// GET /api/bookings
const getAllBookings = async (req, res) => {
  try {
    if (req.user.role !== "admin" && req.user.role !== "staff") {
      return res.status(403).json({ msg: "Access denied" });
    }

    const bookings = await Booking.find()
      .populate("user", "name email")
      .populate("room", "roomNumber type");
    res.json({ bookings });
  } catch (err) {
    res.status(500).json({ msg: "Server error while fetching bookings" });
  }
};



module.exports={bookRoom,getMyBookings,getAllBookings};
