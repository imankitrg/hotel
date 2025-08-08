const mongoose = require('mongoose');

const personschema = mongoose.Schema({

    name:{
        type:String,
        required:true

    },
    age:{
        type:Number,
        required:true
    },
    work:{
        type:String,
        enum:['chef','manager','waiter'],
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
        // required:true
    },
    salary:{
        type:Number,
        required:true
    },
    username:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:Number,
        required:true
    },

});

// created person model

// const person =mongoose.model('person',personschema);
module.exports=mongoose.model('Person',personschema);