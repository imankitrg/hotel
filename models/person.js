const mongoose = require('mongoose');

const personschema = mongoose.Schema({

    name:{
        type:String,
        default: null 
        
    },
    age:{
        type:Number,
        default: null 
    },
    role:{
        type:String,
        enum:['chef','manager','waiter','admin'],
        default: null 
    },
    mobile:{
        type:Number,
        default: null 
    },
    // email:{
    //     type:String,
    //     required:true,
    //     unique:true
    
    address:{
        type:String,
        default: null 
        // required:true
    },
    salary:{
        type:Number,
        default: null 
    },
        username:{
        type:String,
        default: null 
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

// created person model

// const person =mongoose.model('person',personschema);
module.exports=mongoose.model('Person',personschema);