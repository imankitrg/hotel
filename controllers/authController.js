const Person = require('../models/person');
const bcrypt = require('bcrypt');
const  jwt = require('jsonwebtoken');
// const user = require('../models/person');

const signup = async (req,res) => {
    
    try{

        const {name,email,password} = req.body;

        const userexist = await Person.findOne({email});   
        
        if (userexist){
            return res.status(404).json({msg:"user alredy exist"})
        }
        const hashedPassword = await bcrypt.hash(password,10);

        const user = new Person({ name, email, password: hashedPassword });
                await user.save();
                res.status(201).json({
                user,
                });

    }catch(err){
        console.log(err);
        res.status(500).json({msg:"internal server error"});

    }
};

// 

// const JWT_SECRET = 'mysecretkey';

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
        { expiresIn: '120s' }
    );

    res.status(200).json({ msg: 'Login successful', token });

    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

// get your profile 
// controller/userController.js

const getProfile = async (req, res) => {

    try {
    // verifyToken middleware se req.user mil chuka hoga
    const user = await Person.findById(req.user.id).select('-password');
        res.json({ user });

    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server Error' });
    }
};


module.exports = { signup ,loginUser,getProfile};


