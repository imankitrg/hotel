const express =require('express');
const {createmenu,getmenu,getmenubyid,updatemenu,deletemenu}=require('../controllers/menuController');
const Router = express.Router();

Router.post('/create',createmenu);
Router.get('/get',getmenu);
Router.get('/get/:id',getmenubyid);
Router.put('/update/:id',updatemenu);
Router.delete('/delete/:id',deletemenu);

module.exports=Router;