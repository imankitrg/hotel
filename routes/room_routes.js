const express = require('express');
const Router= express.Router();
const {createRoom}=require('../controllers/roomController');
const verifyToken = require('../middleware/middlewares');
const isAdmin = require('../middleware/admin');

Router.post('/create',verifyToken,isAdmin,createRoom);

module.exports=Router;