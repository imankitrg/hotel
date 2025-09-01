// const { Router } = require('express');
const express = require('express')
const {deleteMyAccount,deleteUserByAdmin, updateProfile} = require('../controllers/personController');
const verifyToken = require('../middleware/middlewares');
// const {signup} = require('../controllers/authController')
const Router= express.Router();

Router.put("/update",verifyToken,updateProfile)
Router.delete("/delete", verifyToken, deleteMyAccount); // user apna account delete kare
Router.delete("/delete/:id", verifyToken, deleteUserByAdmin);  // admin kisi bhi user ko delete kare

module.exports=Router;