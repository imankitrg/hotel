const express = require('express');
const Router= express.Router();
const verifyToken = require('../middleware/middlewares');
const {bookRoom}=require('../controllers/bookingController')

Router.post('/',verifyToken,bookRoom);

module.exports=Router;