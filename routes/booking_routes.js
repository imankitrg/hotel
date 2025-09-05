const express = require('express');
const Router= express.Router();
const verifyToken = require('../middleware/middlewares');
const {bookRoom,getMyBookings,getAllBookings}=require('../controllers/bookingController');
const isAdmin = require('../middleware/admin');

Router.post('/',verifyToken,bookRoom);
Router.get('/get',verifyToken,getMyBookings);
Router.get('/getall',verifyToken,getAllBookings);

module.exports=Router;