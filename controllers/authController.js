const Person = require('../models/person');
const bcrypt = require('bcrypt');
const  jwt = require('jsonwebtoken');


// this is our auth signup route

const signup = async (req,res) => {
    
    try{

        const {name,email,password} = req.body;

        const userexist = await Person.findOne({email});   
        
        if (userexist){
            return res.status(400).json({msg:"user alredy exist"})
        }
        const hashedPassword = await bcrypt.hash(password,10);

        const user = new Person({ name, email, password: hashedPassword });
                await user.save();
                res.status(201).json({msg:"you are welcoome to the my hotel-app",
                user,
                });
                console.log("user signup succesfully")

    }catch(err){
        console.log(err);
        res.status(500).json({msg:"internal server error"});

    }
};

// this is our auth login route

// --------------------------------------------------------------------------------------

const loginUser = async (req, res) => {


    try {

    const { email, password } = req.body;
    // Check user exists
    const user = await Person.findOne({ email });

    if (!user)
			return res.status(400).json({ msg: 'User not found' });

    // Compare password 
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
	    return res.status(401).json({ msg: 'Invalid password' });

    // Create JWT token
    const token = jwt.sign(
        { id: user._id, email: user.email, role:user.role },
        process.env.JWT_SECRET,
        { expiresIn: '1000s' }
    );

    res.status(200).json({ msg: 'Login successful', token });

    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};


// admin route for creating hotel-staaf

//---------------------------------------------------------------------------------------------

// Admin-only route to create staff

const createStaff = async (req, res) => {
    try {
    if (req.user.role !== "admin") {
        return res.status(403).json({ msg: "Access denied" });
    }

    const { name, email, password, role } = req.body;
    const userexist = await Person.findOne({ email });
    if (userexist) return res.status(400).json({ msg: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const staff = new Person({ name, email, password: hashedPassword, role });

    await staff.save();

    res.status(201).json({ msg: "Staff created", staff });
    } catch (err) {
        console.log(err)
    res.status(500).json({ msg: "Server error" });
    }
};

// get your profile 

// -----------------------------------------------------------------------------------------------


const getProfile = async (req, res) => {
    try {
    let user = await Person.findById(req.user.id).select("-password");

    // Agar normal user hai toh salary aur role return hi mat kar
    if (user.role === "user") {
        user = user.toObject();
        delete user.salary;
        delete user.role;
    }

    res.json({ user });
    } catch (err) {
    res.status(500).json({ message: "Server Error" });
    }
};


module.exports = { signup,loginUser,getProfile,createStaff};


