const express =require('express');
const {createmenu,getmenu,getmenubyid,updatemenu,deletemenu}=require('../controllers/menuController');
const verifyToken =require('../middleware/middlewares')
const upload = require("../middleware/upload"); // multer middleware for handling file uploads
const isAdmin=require('../middleware/admin')
const menuLimiter = require("../middleware/rateLimiter").menuLimiter; // rate limiter for menu routes
const Router = express.Router();

// Router.post('/create',verifyToken,isAdmin,createmenu);
Router.get('/get',menuLimiter,getmenu);
Router.get('/get/:id',menuLimiter,getmenubyid);
Router.put('/update/:id',verifyToken,isAdmin,updatemenu);
Router.delete('/delete/:id',verifyToken,isAdmin,deletemenu);


Router.post("/create", upload.single("image"),verifyToken,isAdmin,createmenu); // route for creating menu item with image upload

module.exports=Router; 