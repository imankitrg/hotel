const express = require('express');
const {signup,loginUser,getProfile} = require('../controllers/authController');
const verifyToken = require('../middleware/middlewares');
const Router= express.Router();

Router.post('/signup',signup);
Router.post('/login',loginUser);
Router.get('/profile',verifyToken,getProfile)

module.exports=Router;