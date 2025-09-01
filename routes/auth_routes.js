const express = require('express');
const {signup,loginUser,getProfile,createStaff} = require('../controllers/authController');
const verifyToken = require('../middleware/middlewares');
const Router= express.Router();

Router.post('/signup',signup);
Router.post('/login',loginUser); 
Router.post('/admin',verifyToken,createStaff)
Router.get('/profile/:id',verifyToken,getProfile)

module.exports=Router;