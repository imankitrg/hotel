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
        default:'spicy'
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    ingredients:{
        type:[String],
        default:[]
    },
    isAvailable: {
    type: Boolean
    , default: true
    },
    category: {
    type: String,
    enum: ['starter', 'main_course', 'dessert', 'drink'],
    required: true
    },
    num_sales:{
        type:Number,
        default:0,
    },
    description: {
    type:String,
    default:null
    }
},{ timestamps: true 
    

});

// creating menu model

module.exports= mongoose.model('MenuItem',menuschema);
// module.exports=menuItem;