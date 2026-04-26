const mongoose = require('mongoose');

const connectdb = async () =>{

    try{

    const db = await mongoose.connect(process.env.MONGO_URI);
    console.log("mongodb connected ");

    }catch(err){
        console.log("error");
        console.log(err);
        

    }
};

module.exports=connectdb;