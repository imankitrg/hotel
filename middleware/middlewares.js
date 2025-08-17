const jwt = require("jsonwebtoken");
const person = require("../models/person");

const verifyToken = async (req, res, next) => {
    const authHeader = req.headers["authorization"];

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Access Denied: No token provided" });
    }

    const token = authHeader.split(" ")[1];

    try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await person.findById(decoded.id).select("_id role username");
    if (!user) {
        return res.status(404).json({ message: "No user found" });
    }

    req.user = user;
    next();

    } catch (error) {
    if (error.name === "TokenExpiredError") {
        return res.status(401).json({ message: "Token expired, please login again" });
    }
    res.status(401).json({ message: "Invalid Token" });
    }
};

module.exports = verifyToken;
