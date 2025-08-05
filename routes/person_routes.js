// const { Router } = require('express');
const express = require('express')
const {createperson,getperson,getpersonbyid,updateperson,deleteperson} = require('../controllers/personController');
const Router= express.Router();

Router.post('/create',createperson);
Router.get('/get',getperson);
Router.get('/:id',getpersonbyid);
Router.put('/update/:id',updateperson);
Router.delete('/delete/:id',deleteperson)
module.exports=Router;