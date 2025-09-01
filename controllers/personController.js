const Person = require("../models/person");

const updateProfile = async (req, res) => {
    try {
    const allowedFields = ["name", "age", "mobile", "address", "username"];
    const adminOnlyFields = ["salary", "role"];

    const updates = {};
    [...allowedFields, ...adminOnlyFields].forEach(field => {

    if (req.body[field] !== undefined) updates[field] = req.body[field];
    });

    // ⚠️ Admin-only check
    if ((updates.role || updates.salary) && req.user.role !== "admin") {
        return res.status(403).json({ message: "Access denied. Admin only!" });
    }

    const updatedUser = await Person.findByIdAndUpdate(
        req.user.id,
        updates,
        { new: true, runValidators: true }
    ).select("-password");

    res.json({
        message: "Profile updated successfully",
        user: updatedUser
    });

    } catch (err) {
    console.error("Update Error:", err.message);
    res.status(500).json({ message: "Server error while updating profile" });
    }
};

//--------------------------------------------------------------------------------------------------

// DELETE /api/users/delete
const deleteMyAccount = async (req, res) => {
    try {
    const user = await Person.findByIdAndDelete(req.user.id);

    if (!user) {
        return res.status(404).json({ msg: "User not found" });
    }

    res.json({ msg: "Your account has been deleted successfully" });
    } catch (err) {
    console.error("Delete Error:", err.message);
    res.status(500).json({ msg: "Server error while deleting account" });
    }
};
// ------------------------------------------------------------------------------------------------------------

// DELETE /api/users/:id
const deleteUserByAdmin = async (req, res) => {
    try {
    if (!req.user || req.user.role !== "admin") {
        return res.status(403).json({ msg: "Access denied. Admin only!" });
    }

    const user = await Person.findByIdAndDelete(req.params.id);

    if (!user) {
        return res.status(404).json({ msg: "User not found" });
    }

    res.json({ msg: "User deleted successfully", user });
    } catch (err) {
    console.error("Admin Delete Error:", err.message);
    res.status(500).json({ msg: "Server error while deleting user" });
    }
};


module.exports = { updateProfile ,deleteMyAccount,deleteUserByAdmin};
