const mongoose = require("mongoose");

const ProductDoc= mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter the Product Name !"]
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:[true,"Please add Product Description !"]
    },
    category:{
        type:String,
        required:true
    },
    stock:{
        type:Number,
        default:1,
        maxLength:[4,"stock can not exceed 4 character number"],
        required:true
    },
    totalReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
    images:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    createdDate:{
        type:Date,
        default:Date.now
    }

});



const ProductCol= mongoose.model("PRODUCT",ProductDoc);

module.exports= ProductCol;