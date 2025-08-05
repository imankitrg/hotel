const mongoose = require('mongoose');

const menuschema = mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
        enum:['sweet','spicy','sour'],
        required:true
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    ingresients:{
        type:[String],
        default:[]
    },
    num_sales:{
        type:Number,
        default:0,
    }

});

// creating menu model

module.exports= mongoose.model('MenuItem',menuschema);
// module.exports=menuItem;