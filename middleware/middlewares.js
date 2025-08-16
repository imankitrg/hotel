const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {

    const token = req.headers['authorization'];

    if (!token || !token.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Access Denied: No token provided' });
    }

    try {
        const decoded = jwt.verify(token.split(' ')[1], 'mysecretkey');
        req.user = decoded; // yahan se controller me req.user.id milega
        next();

        // const isAdmin = (req, res, next) => {
        // if (req.user.role !== "admin") {
        //     return res.status(403).json({ message: "Access denied. Admin only!" });
        // }
    


    } catch (error) {
    res.status(400).json({ message: 'Invalid Token' });
    }
};

module.exports = verifyToken;