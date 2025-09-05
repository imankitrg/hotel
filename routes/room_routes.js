const express = require('express');
const Router= express.Router();
const {createRoom,getAllRooms,getRoomById}=require('../controllers/roomController');
const verifyToken = require('../middleware/middlewares');
const isAdmin = require('../middleware/admin');

Router.post('/create',verifyToken,isAdmin,createRoom);
Router.get('/getall',verifyToken,getAllRooms);
Router.get('/get/:id',verifyToken,getRoomById);

module.exports=Router;