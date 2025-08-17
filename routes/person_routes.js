// const { Router } = require('express');
const express = require('express')
const {updateProfile} = require('../controllers/personController');
const verifyToken = require('../middleware/middlewares');
// const {signup} = require('../controllers/authController')
const Router= express.Router();

Router.put('/update',verifyToken,updateProfile);

// Router.post('/create',createperson);
// Router.get('/get',getperson);
// Router.get('/:id',getpersonbyid);
// Router.put('/update/:id',verifyToken,updateperson);
// Router.delete('/delete/:id',deleteperson)
// Router.post('/signup',signup)


module.exports=Router;