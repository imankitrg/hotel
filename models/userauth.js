// const { default: mongoose } = require('mongoose');
const mongoose = require('mongoose');

const userschema = mongoose.Schema({

    username:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});

module.exports= mongoose.model('AUTH',userschema);