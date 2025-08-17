

const isAdmin = (req, res, next) => {
    console.log( req.user,11)
    if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Access denied. Admin only!" });
    }
    next();
};

module.exports=isAdmin;
