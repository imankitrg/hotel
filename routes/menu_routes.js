const express =require('express');
const {createmenu,getmenu,getmenubyid,updatemenu,deletemenu}=require('../controllers/menuController');
const verifyToken =require('../middleware/middlewares')
const isAdmin=require('../middleware/admin')
const Router = express.Router();

Router.post('/create',verifyToken,isAdmin,createmenu);
Router.get('/get',getmenu);
Router.get('/get/:id',getmenubyid);
Router.put('/update/:id',updatemenu);
Router.delete('/delete/:id',deletemenu);

module.exports=Router; 