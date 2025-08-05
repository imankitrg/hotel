const mongoose = require('mongoose');

const connectdb = async () =>{

    try{

    const db = await mongoose.connect('mongodb://localhost:27017/hoteldb');
    console.log("mongodb connected ");

    }catch(err){
        console.log("error");

    }
};

module.exports=connectdb;